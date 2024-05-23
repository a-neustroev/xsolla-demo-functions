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
  if (req.method === 'GET') {
    const { name } = req.query;

    try {
      // Fetch the partner by name
      const result = await client.query('SELECT theme_id FROM partners_demo WHERE name = $1', [name]);

      if (result.rows.length === 0) {
        res.status(404).json({ error: 'Not Found', message: 'No partner demo with this name.' });
        return;
      }

      const { theme_id } = result.rows[0];

      // Generate a token based on theme_id
      const token = generateToken(theme_id);

      // Respond with the generated token
      res.status(200).json({ token });
    } catch (error) {
      const pgError = error as { code?: string, message: string };
      res.status(500).json({ error: 'Internal Server Error', message: pgError.message });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed', message: 'Only GET requests are allowed.' });
  }
};

function generateToken(theme_id: number): string {
  // Your token generation logic here
  return `jas5R2DqVdSFh35oiwejsLK3Re1xDvmo_lc_en_bg_2C2640_tb_6E7BF7`;
}