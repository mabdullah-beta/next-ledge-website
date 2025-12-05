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

    // Run agent fetch and embedding generation in parallel for better performance
    const [agentInfo, queryEmbedding] = await Promise.all([
      query('SELECT company_name, company_details FROM Agent WHERE id = $1', [agentId]),
      embeddings.embedQuery(lastMessage.content)
    ]);

    if (!agentInfo.rows.length) {
      return NextResponse.json(
        { error: 'Chatbot not found' },
        { status: 404, headers: corsHeaders }
      );
    }

    const agent = agentInfo.rows[0];

    // Find similar chunks
    const { chunks: similarChunks, method: searchMethod } = await findSimilarChunks(queryEmbedding, agentId);

    // Check if any documents exist
    if (!similarChunks.rows || similarChunks.rows.length === 0) {
      return NextResponse.json({
        response: "I don't have any documents uploaded for this company yet. Please upload some documents first so I can help answer questions based on them.",
        sources: [],
        debug: { agentId, chunksFound: 0, issue: "No documents found" }
      }, { status: 200, headers: corsHeaders });
    }

    // Build context and generate streaming response
    const context = buildContext(similarChunks.rows);
    const sources = [...new Set(similarChunks.rows.map(chunk => chunk.document_name))];

    // Create a streaming response
    const stream = await generateStreamingResponse(agent, context, messages, sources, {
      agentId,
      chunksFound: similarChunks.rows.length,
      searchMethod,
      contextLength: context.length,
      hasContext: context.length > 0
    });

    return new Response(stream, {
      headers: {
        ...corsHeaders,
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive',
      },
    });

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

// Similarity threshold: only use chunks with similarity >= 0.01 (1%)
// Note: Cosine similarity ranges from -1 to 1, where:
// 1 = identical, 0 = orthogonal, -1 = opposite
// Set low due to web-scraped content having naturally lower similarity scores
const SIMILARITY_THRESHOLD = 0.01;

// Function to calculate cosine similarity between two vectors
// Returns value between -1 and 1
const cosineSimilarity = (vecA, vecB) => {
  if (!vecA?.length || !vecB?.length || vecA.length !== vecB.length) return -1;

  let dotProduct = 0, normA = 0, normB = 0;
  for (let i = 0; i < vecA.length; i++) {
    const a = vecA[i] || 0, b = vecB[i] || 0;
    dotProduct += a * b;
    normA += a * a;
    normB += b * b;
  }

  const norm = Math.sqrt(normA) * Math.sqrt(normB);
  return norm === 0 ? -1 : dotProduct / norm;
};

// Search strategies for finding similar chunks
const searchStrategies = {
  // pgvector database search strategy
  async pgvector(queryEmbedding, agentId) {
    // Try to use pgvector extension - will fail if not installed
    const maxDistance = 1 - SIMILARITY_THRESHOLD;

    try {
      const result = await query(`
        SELECT
          chunk_text,
          document_name,
          metadata,
          (embeddings <=> $1::vector) as distance
        FROM DocumentChunks
        WHERE agent_id = $2
          AND (embeddings <=> $1::vector) <= $3
        ORDER BY embeddings <=> $1::vector
        LIMIT 5
      `, [JSON.stringify(queryEmbedding), agentId, maxDistance]);
      return { chunks: result, method: 'pgvector' };
    } catch (error) {
      // If pgvector not installed, throw to try next strategy
      throw new Error(`pgvector extension not available: ${error.message}`);
    }
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
      .filter(chunk => chunk.similarity >= SIMILARITY_THRESHOLD)
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

// Function to generate streaming AI response using OpenAI
const generateStreamingResponse = async (agent, context, messages, sources, debug) => {
  const systemMessage = {
    role: 'system',
    content: `You are an AI assistant for ${agent.company_name}.

Company Details: ${agent.company_details}

Context from documents:
${context}

Instructions: Answer using the specific document information provided. Be detailed and helpful. Only say you lack information if the context truly doesn't contain relevant details.`
  };

  const stream = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [systemMessage, ...messages.slice(-10)],
    max_tokens: 800,
    temperature: 0.4,
    stream: true,
  });

  const encoder = new TextEncoder();

  return new ReadableStream({
    async start(controller) {
      try {
        // Send initial metadata
        const metadata = JSON.stringify({ sources, debug }) + '\n';
        controller.enqueue(encoder.encode(`data: ${metadata}\n\n`));

        // Stream the response chunks
        for await (const chunk of stream) {
          const content = chunk.choices[0]?.delta?.content || '';
          if (content) {
            const data = JSON.stringify({ content }) + '\n';
            controller.enqueue(encoder.encode(`data: ${data}\n\n`));
          }
        }

        // Send done signal
        controller.enqueue(encoder.encode('data: [DONE]\n\n'));
        controller.close();
      } catch (error) {
        controller.error(error);
      }
    },
  });
};