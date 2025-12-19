import { query } from '@/lib/db';
import { NextResponse } from 'next/server';
import { OpenAI } from 'openai';
import { OpenAIEmbeddings } from "@langchain/openai";
import { CHATBOT_SYSTEM_PROMPT } from '@/lib/prompts';

// Initialize OpenAI
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
const embeddings = new OpenAIEmbeddings({
  openAIApiKey: process.env.OPENAI_API_KEY,
  modelName: "text-embedding-3-small"  // Match crawler's embedding model
});


// Vector search configuration
// Cosine distance: lower = more similar (0.0 = identical, 2.0 = very different)
const MAX_CHUNKS_RETRIEVE = 12; // Retrieve candidates initially
const TOP_K_CHUNKS = 6; // Send to LLM

// Simple adaptive thresholds
const STRICT_THRESHOLD = 1.5;   // Good match - try this first
const RELAXED_THRESHOLD = 2.5;  // Relaxed match - fallback if strict fails

// CORS
const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization"
};

export async function OPTIONS() {
  return new Response(null, { status: 200, headers: corsHeaders });
}

// -------------------------------
//   TRANSLATION FOR SEARCH
// -------------------------------
async function translateQueryToEnglish(query) {
  /**
   * Translates user query to English for embedding search.
   * This ensures query embeddings match document embeddings (which are in English).
   *
   * @param {string} query - User's query in any language
   * @returns {string} - Query translated to English (or original if already English)
   */
  try {
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",  // GPT-3.5 is fine for simple translation (fast & cheap)
      messages: [
        {
          role: "system",
          content: `You are a translation assistant for document search.

TASK: Translate the user's query to English for semantic search purposes.

RULES:
1. If the query is ALREADY in English → return it UNCHANGED
2. If in another language (Dutch, German, etc.) → translate to clear, natural English
3. Preserve the MEANING and INTENT of the query
4. Keep technical terms and proper nouns intact
5. Return ONLY the translated query, nothing else (no explanations, no quotes)

Examples:
Input: "Wat zijn de belastingregels voor bedrijven?"
Output: What are the tax rules for businesses?

Input: "How do I calculate depreciation?"
Output: How do I calculate depreciation?

Input: "Vertel me over TCFD rapportage"
Output: Tell me about TCFD reporting`
        },
        {
          role: "user",
          content: query
        }
      ],
      temperature: 0.2,
      max_tokens: 600
    });

    const translated = response.choices[0].message.content.trim();
    console.log(`[TRANSLATION] Original: "${query}" → English: "${translated}"`);
    return translated;

  } catch (error) {
    console.error("[TRANSLATION ERROR]", error.message);
    // Fallback: return original query if translation fails
    console.log("[FALLBACK] Using original query for search");
    return query;
  }
}

// -------------------------------
//        MAIN POST HANDLER
// -------------------------------
export async function POST(request) {
  try {
    const { messages } = await request.json();

    if (!messages?.length) {
      return NextResponse.json(
        { error: "Messages are required" },
        { status: 400, headers: corsHeaders }
      );
    }

    const userMessage = messages[messages.length - 1];

    // STEP 1: Translate query to English for embedding search
    // Documents are stored in English, so we need English embeddings for good similarity
    const translatedQuery = await translateQueryToEnglish(userMessage.content);

    // STEP 2: Generate embedding for the TRANSLATED query
    const queryEmbedding = await embeddings.embedQuery(translatedQuery);

    // Search similar document chunks with distance metric
    // Multi-stage approach: retrieve more candidates, then filter
    const { rows: allChunks } = await query(
      `
      SELECT
        chunk_text,
        document_name,
        metadata,
        (embeddings <=> $1::vector) AS distance
      FROM documentchunks
      ORDER BY embeddings <=> $1::vector
      LIMIT $2;
      `,
      [JSON.stringify(queryEmbedding), MAX_CHUNKS_RETRIEVE]
    );

    console.log("[SEARCH] Retrieved chunks:", allChunks?.length);

    // Check if any documents exist in database
    if (!allChunks?.length) {
      return NextResponse.json(
        {
          response: "No documents found. Please upload documents first.",
          sources: []
        },
        { status: 200, headers: corsHeaders }
      );
    }

    // SIMPLE ADAPTIVE FILTERING
    // Try strict threshold first, if not enough results, use relaxed threshold
    let chunksToUse = [];
    let confidenceNote = "";

    // Try strict threshold (good matches)
    const strictChunks = allChunks.filter(c => parseFloat(c.distance) <= STRICT_THRESHOLD);

    if (strictChunks.length >= 3) {
      // We have enough good matches
      chunksToUse = strictChunks.slice(0, TOP_K_CHUNKS);
      confidenceNote = "high";
      console.log("[FILTER] Using strict threshold (<=1.5):", chunksToUse.length, "chunks");
    } else {
      // Not enough strict matches, try relaxed threshold
      const relaxedChunks = allChunks.filter(c => parseFloat(c.distance) <= RELAXED_THRESHOLD);

      if (relaxedChunks.length >= 1) {
        chunksToUse = relaxedChunks.slice(0, TOP_K_CHUNKS);
        confidenceNote = "medium";
        console.log("[FILTER] Using relaxed threshold (<=2.5):", chunksToUse.length, "chunks");
      } else {
        // Last resort: use top 3 chunks regardless of distance
        chunksToUse = allChunks.slice(0, Math.min(3, allChunks.length));
        confidenceNote = "low";
        console.log("[FILTER] Using best available:", chunksToUse.length, "chunks (any distance)");
      }
    }

    // Log chunk details for debugging
    console.log("[CHUNKS] Retrieved:", allChunks.length, "| Using:", chunksToUse.length);
    chunksToUse.forEach((chunk, idx) => {
      console.log(
        `  ${idx + 1}. distance=${chunk.distance.toFixed(4)} - ${chunk.document_name.substring(0, 50)}...`
      );
      // Show chunk content preview to verify relevance
      console.log(`     Preview: ${chunk.chunk_text.substring(0, 150)}...`);
    });

    // Build context and prepare response
    const context = buildContext(chunksToUse);
    const sources = [...new Set(chunksToUse.map((c) => c.document_name))];

    console.log("[LLM] Sending", chunksToUse.length, "chunks to GPT-4 with", confidenceNote, "confidence");

    const stream = await generateStreamingResponse(context, messages, sources, confidenceNote);

    return new Response(stream, {
      headers: {
        ...corsHeaders,
        "Content-Type": "text/event-stream",
        "Cache-Control": "no-cache",
        Connection: "keep-alive"
      }
    });

  } catch (error) {
    console.error("Chat API Error:", error);

    return NextResponse.json(
      {
        error: "Failed to generate response",
        debug: {
          message: error.message,
          stack: process.env.NODE_ENV === "development" ? error.stack : undefined
        }
      },
      { status: 500, headers: corsHeaders }
    );
  }
}

// -------------------------------
//       CONTEXT BUILDER
// -------------------------------
function buildContext(chunks) {
  return chunks
    .map(
      (chunk) =>
        `Document: ${chunk.document_name}\n${chunk.chunk_text}`
    )
    .join("\n\n---\n\n");
}

// -------------------------------
//      STREAMING LLM RESPONSE
// -------------------------------
async function generateStreamingResponse(context, messages, sources, confidenceNote) {
  const systemMessage = {
    role: "system",
    content: CHATBOT_SYSTEM_PROMPT(context, confidenceNote)
  };

  const stream = await openai.chat.completions.create({
    model: "gpt-4-turbo-preview",  // Upgraded to GPT-4 for better reasoning with large data
    messages: [systemMessage, ...messages.slice(-10)],
    max_tokens: 1200,
    temperature: 0.3,
    stream: true
  });

  const encoder = new TextEncoder();

  return new ReadableStream({
    async start(controller) {
      // Send metadata (sources list)
      controller.enqueue(
        encoder.encode(
          `data: ${JSON.stringify({ sources })}\n\n`
        )
      );

      try {
        for await (const chunk of stream) {
          const content = chunk.choices?.[0]?.delta?.content;
          if (content) {
            controller.enqueue(
              encoder.encode(`data: ${JSON.stringify({ content })}\n\n`)
            );
          }
        }

        controller.enqueue(encoder.encode("data: [DONE]\n\n"));
        controller.close();

      } catch (err) {
        controller.error(err);
      }
    }
  });
}
