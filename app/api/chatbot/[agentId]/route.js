import { query } from '@/lib/db';
import { NextResponse } from 'next/server';
import { OpenAI } from 'openai';
import { OpenAIEmbeddings } from "@langchain/openai";
import { chatLimiter } from '@/lib/rate-limit';

// Initialize OpenAI and LangChain clients
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
const embeddings = new OpenAIEmbeddings({ openAIApiKey: process.env.OPENAI_API_KEY });

// Define CORS headers for responses
const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization',
};

// Handle OPTIONS requests for CORS
export async function OPTIONS() {
  return new Response(null, { status: 200, headers: corsHeaders });
}

// GET endpoint for metadata
export async function GET(request, { params }) {
  try {

    // Identify user by IP
    const ip =
      request.headers.get("x-forwarded-for") ||
      request.headers.get("x-real-ip") ||
      "unknown";

    // Apply rate limiting
    const { success } = await chatLimiter.limit(ip);

    if (!success) {
      return NextResponse.json(
        { success: false, message: "You're sending messages too fast. Try again later!" },
        { status: 429 }
      );
    }

    const { agentId } = await params;

    if (!agentId) {
      return NextResponse.json(
        { error: 'Agent ID is required' },
        { status: 400, headers: corsHeaders }
      );
    }

    const agentInfo = await query(
      'SELECT company_name, company_details FROM Agent WHERE id = $1',
      [agentId]
    );

    if (agentInfo.rows.length === 0) {
      return NextResponse.json(
        { error: 'Chatbot not found' },
        { status: 404, headers: corsHeaders }
      );
    }

    const agent = agentInfo.rows[0];

    return NextResponse.json(
      {
        id: agentId,
        name: `${agent.company_name} Assistant`,
        description: `Ready to help with ${agent.company_name} questions`,
        companyName: agent.company_name,
        companyDetails: agent.company_details,
      },
      { status: 200, headers: corsHeaders }
    );

  } catch (error) {
    console.error('Error fetching chatbot metadata:', error);
    return NextResponse.json(
      { error: 'Failed to fetch chatbot metadata' },
      { status: 500, headers: corsHeaders }
    );
  }
}

// POST endpoint for chat responses
export async function POST(request, { params }) {
  try {
    const { agentId } = await params;
    const { messages } = await request.json();

    // Input validation
    if (!agentId) {
      return NextResponse.json(
        { error: 'Agent ID is required' },
        { status: 400, headers: corsHeaders }
      );
    }

    if (!messages?.length) {
      return NextResponse.json(
        { error: 'Messages are required' },
        { status: 400, headers: corsHeaders }
      );
    }

    const lastMessage = messages[messages.length - 1];

    // Fetch agent information
    const agentInfo = await query(
      'SELECT company_name, company_details FROM Agent WHERE id = $1',
      [agentId]
    );

    if (!agentInfo.rows.length) {
      return NextResponse.json(
        { error: 'Chatbot not found' },
        { status: 404, headers: corsHeaders }
      );
    }

    const agent = agentInfo.rows[0];

    // Check if any documents exist
    const chunkCount = await query(
      'SELECT COUNT(*) as count FROM DocumentChunks WHERE agent_id = $1',
      [agentId]
    );
    const totalChunks = parseInt(chunkCount.rows[0].count);

    if (totalChunks === 0) {
      return NextResponse.json({
        response: "I don't have any documents uploaded for this company yet. Please upload some documents first so I can help answer questions based on them.",
        sources: [],
        debug: { agentId, totalChunks: 0, issue: "No documents found" }
      }, { status: 200, headers: corsHeaders });
    }

    // Generate embedding and find similar chunks
    const queryEmbedding = await embeddings.embedQuery(lastMessage.content);
    const { chunks: similarChunks, method: searchMethod } = await findSimilarChunks(queryEmbedding, agentId);

    // Build context and generate response
    const context = buildContext(similarChunks.rows);
    const response = await generateResponse(agent, context, messages);

    if (!response) {
      throw new Error('No response from OpenAI');
    }

    return NextResponse.json({
      response,
      sources: [...new Set(similarChunks.rows.map(chunk => chunk.document_name))],
      debug: {
        agentId,
        totalChunks,
        chunksFound: similarChunks.rows.length,
        searchMethod,
        contextLength: context.length,
        hasContext: context.length > 0
      }
    }, { status: 200, headers: corsHeaders });

  } catch (error) {
    console.error('Chatbot API Error:', error);
    return NextResponse.json({
      error: 'Failed to generate response',
      debug: {
        message: error.message,
        ...(process.env.NODE_ENV === 'development' && { stack: error.stack })
      }
    }, { status: 500, headers: corsHeaders });
  }
}

// Utility functions

// Function to create standardized error responses
const createErrorResponse = (error, status = 500) =>
  NextResponse.json({ error, debug: { timestamp: new Date().toISOString() } },
    { status, headers: corsHeaders });

// Function to calculate cosine similarity between two vectors
const cosineSimilarity = (vecA, vecB) => {
  if (!vecA?.length || !vecB?.length || vecA.length !== vecB.length) return 0;

  let dotProduct = 0, normA = 0, normB = 0;
  for (let i = 0; i < vecA.length; i++) {
    const a = vecA[i] || 0, b = vecB[i] || 0;
    dotProduct += a * b;
    normA += a * a;
    normB += b * b;
  }

  const norm = Math.sqrt(normA) * Math.sqrt(normB);
  return norm === 0 ? 0 : dotProduct / norm;
};

// Search strategies for finding similar chunks
const searchStrategies = {
  // pgvector database search strategy
  async pgvector(queryEmbedding, agentId) {
    const result = await query(`
      SELECT chunk_text, document_name, metadata, (embeddings <=> $1::vector) as distance
      FROM DocumentChunks WHERE agent_id = $2 
      ORDER BY embeddings <=> $1::vector LIMIT 5
    `, [JSON.stringify(queryEmbedding), agentId]);
    return { chunks: result, method: 'pgvector' };
  },

  // JavaScript cosine similarity fallback
  async jsCosineSimilarity(queryEmbedding, agentId) {
    const allChunks = await query(`
      SELECT chunk_text, document_name, metadata, embeddings
      FROM DocumentChunks WHERE agent_id = $1 LIMIT 50
    `, [agentId]);

    const scored = allChunks.rows
      .map(chunk => {
        try {
          const chunkEmbedding = typeof chunk.embeddings === 'string'
            ? JSON.parse(chunk.embeddings) : chunk.embeddings;
          const similarity = cosineSimilarity(queryEmbedding, chunkEmbedding);
          return { ...chunk, distance: 1 - similarity, similarity };
        } catch { return null; }
      })
      .filter(Boolean)
      .sort((a, b) => a.distance - b.distance)
      .slice(0, 5);

    return { chunks: { rows: scored }, method: 'javascript_fallback' };
  },

  // Simple recent chunks fallback
  async fallbackRecent(agentId) {
    const result = await query(`
      SELECT chunk_text, document_name, metadata
      FROM DocumentChunks WHERE agent_id = $1 ORDER BY id DESC LIMIT 5
    `, [agentId]);
    return { chunks: result, method: 'simple_recent' };
  }
};

// Function to find similar chunks using multiple strategies
const findSimilarChunks = async (queryEmbedding, agentId) => {
  for (const [name, strategy] of Object.entries(searchStrategies)) {
    try {
      return await strategy(queryEmbedding, agentId);
    } catch (error) {
      if (name === 'fallbackRecent') throw error;
      console.warn(`Search strategy '${name}' failed, trying next...`);
      continue;
    }
  }
};

// Function to build context from chunks
const buildContext = (chunks) => chunks.length > 0
  ? chunks.map(chunk => `Document: ${chunk.document_name}\n${chunk.chunk_text}`).join('\n\n---\n\n')
  : '';

// Function to generate AI response using OpenAI
const generateResponse = async (agent, context, messages) => {
  const systemMessage = {
    role: 'system',
    content: `You are an AI assistant for ${agent.company_name}.
    
Company Details: ${agent.company_details}

Context from documents:
${context}

Instructions: Answer using the specific document information provided. Be detailed and helpful. Only say you lack information if the context truly doesn't contain relevant details.`
  };

  const completion = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [systemMessage, ...messages.slice(-10)],
    max_tokens: 800,
    temperature: 0.7,
  });

  return completion.choices[0]?.message?.content;
};