import {NextRequest, NextResponse} from 'next/server'
import cors from "../../../lib/cors";

export const config = {
    runtime: 'edge',
    api: {
        bodyParser: true,
    },
}

export default async function handler(req: NextRequest) {

    if (req.method === "POST") {
        let data
        try {
            data = await req.json();
        } catch (error) {
            return new NextResponse(JSON.stringify({ error: "Invalid JSON!" }), {
                status: 400,
                headers: { "Content-Type": "application/json" },
            });
        }
        if (!data || !data.url) {
            return new NextResponse(JSON.stringify({ error: "Missing url parameter!" }), {
                status: 400,
                headers: { "Content-Type": "application/json" },
            });
        }

        const colors = ["red", "green", "blue"]; // Replace with any color-generating logic
        const url = data.url
        // `cors` also takes care of handling OPTIONS requests
        return cors(
            req,
            new Response(JSON.stringify({url, colors}), {
                status: 200,
                headers: {'Content-Type': 'application/json'},
            })
        )
    }
}
