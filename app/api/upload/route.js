import { NextResponse } from 'next/server';
import { PDFLoader } from "@langchain/community/document_loaders/fs/pdf";
import { DocxLoader } from "@langchain/community/document_loaders/fs/docx";
import { RecursiveCharacterTextSplitter } from "@langchain/textsplitters";
import { OpenAIEmbeddings } from "@langchain/openai";
import { getClient } from '@/lib/db';
import { writeFile, unlink } from 'fs/promises';
import path from 'path';
import os from 'os';

export async function POST(request) {
  try {
    const formData = await request.formData();
    const files = formData.getAll('files');        // Get all uploaded files
    const agentId = process.env.NEXT_PUBLIC_AGENT_ID || process.env.AGENT_ID;       // Get associated chatbot agent ID
    // Validate that files were provided
    if (!files || files.length === 0) {
      return NextResponse.json(
        { success: false, message: "No files provided" },
        { status: 400 }
      );
    }

    // Validate that agent ID is provided
    if (!agentId) {
      return NextResponse.json(
        { success: false, message: "Agent ID is required" },
        { status: 400 }
      );
    }

    // file size
    const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB maximum file size
    const SUPPORTED_TYPES = [
      'application/pdf',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document', // Word docs
      'text/plain'
    ];

    // Validate each uploaded file
    for (const file of files) {
      // Check file size limit
      if (file.size > MAX_FILE_SIZE) {
        return NextResponse.json(
          { success: false, message: `File ${file.name} exceeds 5MB limit` },
          { status: 400 }
        );
      }

      // Check file type support
      if (!SUPPORTED_TYPES.includes(file.type)) {
        return NextResponse.json(
          { success: false, message: `File type ${file.type} is not supported` },
          { status: 400 }
        );
      }
    }

    // Configure text splitter 
    const textSplitter = new RecursiveCharacterTextSplitter({
      chunkSize: 1000,
      chunkOverlap: 200,
      separators: ['\n\n', '\n', '.', ' ', '']
    });

    // Initialize OpenAI embeddings service
    const embeddings = new OpenAIEmbeddings({
      openAIApiKey: process.env.OPENAI_API_KEY,
      modelName: "text-embedding-ada-002"        // OpenAI embedding model
    });

    // Get database connection
    const client = await getClient();
    const tempFiles = [];

    try {
      // Initialize processing tracking variables
      const results = [];
      let totalChunks = 0;
      let totalProcessedChunks = 0;

      // Process each uploaded file
      for (const file of files) {
        let tempFilePath = null;
        let processedChunks = 0;
        const failedChunks = [];

        try {
          // Convert file to buffer for processing
          const arrayBuffer = await file.arrayBuffer();
          const buffer = Buffer.from(arrayBuffer);

          let docs = [];

          // Handle PDF and Word documents (require file system access)
          if (file.type === 'application/pdf' ||
            file.type === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document') {

            // Create temporary file for document loaders
            const tempDir = os.tmpdir();
            const fileExtension = file.type === 'application/pdf' ? '.pdf' : '.docx';
            tempFilePath = path.join(tempDir, `temp_${Date.now()}_${Math.random().toString(36).substr(2, 9)}${fileExtension}`);

            // Write file buffer to temporary location
            await writeFile(tempFilePath, buffer);
            tempFiles.push(tempFilePath);  // Track for cleanup

            // Initialize appropriate document loader
            let loader;
            if (file.type === 'application/pdf') {
              loader = new PDFLoader(tempFilePath);
            } else {
              loader = new DocxLoader(tempFilePath);
            }

            // Load document content and split into chunks
            const rawDocs = await loader.load();
            docs = await textSplitter.splitDocuments(rawDocs);

          }
          // Handle plain text files (can process directly from buffer)
          else if (file.type === 'text/plain') {
            // Convert buffer to text
            const textContent = buffer.toString('utf-8');

            // Create document object for text splitter
            const rawDoc = {
              pageContent: textContent,
              metadata: { source: file.name }
            };

            // Split text into chunks
            docs = await textSplitter.splitDocuments([rawDoc]);
          }

          // Update total chunk count
          totalChunks += docs.length;

          // Process each document chunk
          for (let chunkIndex = 0; chunkIndex < docs.length; chunkIndex++) {
            const doc = docs[chunkIndex];

            try {
              // Generate OpenAI embedding for the chunk text
              const embedding = await embeddings.embedQuery(doc.pageContent);

              console.log(`Generated embedding for chunk ${chunkIndex + 1}: ${embedding.length} dimensions`);

              if (embedding.length !== 1536) {
                throw new Error(`Unexpected embedding dimension: ${embedding.length}, expected 1536`);
              }

              // Start database transaction for chunk insertion
              await client.query('BEGIN');

              // Insert chunk data with embedding into database
              await client.query(
                `INSERT INTO DocumentChunks 
                 (agent_id, document_name, chunk_text, chunk_number, embeddings, metadata) 
                 VALUES ($1, $2, $3, $4, $5, $6)`,
                [
                  agentId,
                  file.name,
                  doc.pageContent,
                  chunkIndex + 1,
                  JSON.stringify(embedding),
                  JSON.stringify({
                    ...doc.metadata,
                    documentType: file.type,
                    chunkIndex: chunkIndex,
                    totalChunks: docs.length,
                    fileSize: file.size,
                    embeddingModel: "text-embedding-ada-002",
                    embeddingDimensions: embedding.length,
                    processingDate: new Date().toISOString()
                  })
                ]
              );

              // Commit transaction
              await client.query('COMMIT');
              processedChunks++;
              totalProcessedChunks++;

            } catch (chunkError) {
              // Rollback transaction on error
              await client.query('ROLLBACK');
              console.error(`Error processing chunk ${chunkIndex + 1}:`, chunkError.message);

              // Track failed chunk for reporting
              failedChunks.push({
                chunkIndex: chunkIndex + 1,
                error: chunkError.message
              });
            }

            // Add delay to respect OpenAI API rate limits
            await new Promise(resolve => setTimeout(resolve, 100));
          }

          // Store processing results for this file
          results.push({
            fileName: file.name,
            success: processedChunks > 0,
            chunks: processedChunks,
            failedChunks: failedChunks.length,
            fileSize: `${(file.size / 1024 / 1024).toFixed(2)}MB`, // Formatted file size
            fileType: file.type,
            errors: failedChunks.length > 0 ? failedChunks : undefined // Error details if any
          });

        } catch (fileError) {
          // Handle file-level processing errors
          console.error(`Error processing file ${file.name}:`, fileError);
          results.push({
            fileName: file.name,
            success: false,
            message: fileError.message
          });
        }
      }

      // Categorize results for response
      const successfulFiles = results.filter(r => r.success);
      const failedFiles = results.filter(r => !r.success);

      // Return comprehensive processing results
      return NextResponse.json({
        success: totalProcessedChunks > 0,
        agentId,
        processedFiles: results,
        totalChunks: totalProcessedChunks,
        successCount: successfulFiles.length,
        failureCount: failedFiles.length,
        embeddingInfo: {
          model: "text-embedding-ada-002",
          dimensions: 1536
        },
        message: totalProcessedChunks > 0
          ? `Successfully processed ${totalProcessedChunks} chunks from ${successfulFiles.length} files`
          : "No chunks were processed successfully"
      });

    } finally {
      // Cleanup: Remove temporary files
      for (const tempFile of tempFiles) {
        try {
          await unlink(tempFile);           // Delete temporary file
        } catch (cleanupError) {
          console.warn(`Failed to cleanup temp file ${tempFile}:`, cleanupError);
        }
      }

      // Release database connection
      client.release();
    }

  } catch (error) {
    // Handle top-level errors
    console.error("Error processing documents:", error);
    return NextResponse.json(
      {
        success: false,
        message: error.message,
        details: process.env.NODE_ENV === 'development' ? error.stack : undefined // Stack trace in dev
      },
      { status: 500 }
    );
  }
}