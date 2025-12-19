import { query } from '@/lib/db';
import { NextResponse } from 'next/server';
import { OpenAI } from 'openai';
import { OpenAIEmbeddings } from "@langchain/openai";

// Initialize OpenAI
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
const embeddings = new OpenAIEmbeddings({
  openAIApiKey: process.env.OPENAI_API_KEY
});

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

    // Generate embedding for search query
    const queryEmbedding = await embeddings.embedQuery(userMessage.content);

    // Search similar document chunks
    const { rows: similarChunks } = await query(
      `
      SELECT
        chunk_text,
        document_name,
        metadata,
        (embeddings <=> $1::vector) AS distance
      FROM documentchunks
      ORDER BY embeddings <=> $1::vector
      LIMIT 5;
      `,
      [JSON.stringify(queryEmbedding)]
    );

    console.log("🚀 ~ POST ~ similarChunks:", similarChunks)
    if (!similarChunks?.length) {
      return NextResponse.json(
        {
          response: "No documents found. Please upload documents first.",
          sources: []
        },
        { status: 200, headers: corsHeaders }
      );
    }

    const context = buildContext(similarChunks);
    const sources = [...new Set(similarChunks.map((c) => c.document_name))];

    const stream = await generateStreamingResponse(context, messages, sources);

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
async function generateStreamingResponse(context, messages, sources) {
  console.log("🚀 ~ generateStreamingResponse ~ context:", context)
  const systemMessage = {
    role: "system",
    content: `
You are an AI assistant. Answer ONLY using the provided document context.

Context:
${context}

Instructions:
- Respond concisely (maximum 4–5 lines).
- Use only factual details from the context.
- If the context lacks information, clearly say so.
- Do NOT add assumptions or extra details.
`
  };

  const stream = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [systemMessage, ...messages.slice(-10)],
    max_tokens: 700,
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
