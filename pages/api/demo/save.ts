import { NextApiRequest, NextApiResponse } from 'next';

import { Client } from 'pg';

const client = new Client({
    user: 'neondb_owner',
    host: 'ep-wispy-hall-a13xvrdi.ap-southeast-1.aws.neon.tech',
    database: 'neondb',
    password: 't3RODPuqmjs0',
    port: 5432,
    ssl: {
        rejectUnauthorized: false
    }
});
client.connect();

export default async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'POST') {
        const { theme_id, name, email } = req.body;

        try {// Mock "save to DB" operation
            const result = await client.query('INSERT INTO partners_demo (name, email, theme_id) VALUES ($1, $2, $3) RETURNING id', [name, email, theme_id]);
            res.status(200).json({ id: result.rows[0].id, theme_id, name, email });
        } catch (err) {
            const pgError = err as { code?: string, message: string };
            if (pgError.code === '23505') {
                // Unique constraint error
                res.status(409).json({ error: 'Conflict', message: 'Demo with this name already exists.' });
            } else {
                // Other errors
                res.status(500).json({ error: 'Internal Server Error', message: pgError.message });
            }
        }
        // Send the new item back as confirmation
    } else {
        res.status(405).send({ message: 'Only POST requests are allowed' });
    }
};