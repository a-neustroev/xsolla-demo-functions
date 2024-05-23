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

        // Mock "save to DB" operation
        const result = await client.query('INSERT INTO partners_demo (name, email, theme_id) VALUES ($1, $2, $3) RETURNING id', [name, email, theme_id]);

        // Send the new item back as confirmation
        res.status(200).json({ id: result.rows[0].id, theme_id, name, email });
    } else {
        res.status(405).send({ message: 'Only POST requests are allowed' });
    }
};