import { NextRequest, NextResponse } from 'next/server';
import cors from "../../../lib/cors";

export const config = {
    runtime: 'edge',
    api: {
        bodyParser: true,
    },
};

export default async function handler(req: NextRequest) {
    if (req.method === "POST") {
        let data;
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

        const url = data.url;

        try {
            const openaiResponse = await fetch('https://api.openai.com/v1/chat/completions', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
                },
                body: JSON.stringify({
                    model: "gpt-3.5-turbo",
                    messages: [
                        {
                            role: "user",
                            content: `From the game website: ${url}, extract the 3 main colors in HEX format. Give them as an array (example, [#4F7681, #CDD3CB, #9EA7A5]). Rules for extracting colors: 1. Color number one is the color of the background (main) game site. 2. Color number 2 is the text color that is used on the game website. 3. Color number 3 is the color that is used to fill buttons and other control elements on the game website.`
                        }
                    ]
                })
            });

            const openaiData = await openaiResponse.json();
            const colors = JSON.parse(openaiData.choices[0].message.content.trim());

            return cors(
                req,
                new NextResponse(JSON.stringify({ colors }), {
                    status: 200,
                    headers: { 'Content-Type': 'application/json' },
                })
            );
        } catch (error) {
            console.error(error);
            return new NextResponse(JSON.stringify({ error: "Failed to fetch colors from OpenAI" }), {
                status: 500,
                headers: { "Content-Type": "application/json" },
            });
        }
    }

    return new NextResponse(JSON.stringify({ error: "Invalid method" }), {
        status: 405,
        headers: { "Content-Type": "application/json" },
    });
}