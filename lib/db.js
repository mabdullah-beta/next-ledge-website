import { Pool } from 'pg';

const pool = new Pool({
    connectionString: process.env.DATABASE_URL_UNPOOLED,
    ssl: {
        rejectUnauthorized: false
    }
});

export async function query(text, params) {
    return pool.query(text, params);
}

export async function getClient() {
    const client = await pool.connect();
    return client;
}