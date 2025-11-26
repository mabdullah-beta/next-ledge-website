import fs from 'fs';
import path from 'path';
import fetch from 'node-fetch';
import FormData from 'form-data';
import { fileURLToPath } from 'url';
import { getApiUrl } from './utils.js';

// If using ESM, get __dirname equivalent
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// const DOCS_DIR = path.join(process.cwd(), 'docs');
const DOCS_DIR = path.resolve(__dirname, '../docs');
const API_UPLOAD_URL = getApiUrl('/api/upload'); // Dynamic URL - works in dev and production

async function uploadFiles() {
    const formData = new FormData();

    // Read all files from docs directory
    const files = fs.readdirSync(DOCS_DIR).filter(file =>
        file.endsWith('.pdf') || file.endsWith('.docx')
    );

    if (files.length === 0) {
        console.log("No doc files found in docs directory.");
        return;
    }

    // Append all files to formData with field name 'files'
    for (const filename of files) {
        const filePath = path.join(DOCS_DIR, filename);
        const fileStream = fs.createReadStream(filePath);

        // Infer mime type
        const mimeType = filename.endsWith('.pdf') ? 'application/pdf' : 'application/vnd.openxmlformats-officedocument.wordprocessingml.document';
        formData.append('files', fileStream, { filename, contentType: mimeType });
    }

    console.log(`Uploading ${files.length} file(s) to ${API_UPLOAD_URL}...`);

    // Send POST request to upload API
    const response = await fetch(API_UPLOAD_URL, {
        method: 'POST',
        body: formData,
        headers: formData.getHeaders(),
    });

    const result = await response.json();
    if (response.ok) {
        console.log('Upload successful:', result);
    } else {
        console.error('Upload failed:', result);
    }
}

uploadFiles().catch(console.error);
