import type { NextApiRequest, NextApiResponse } from 'next'
import { Theme } from '../../../models/theme'

let themes: Theme[] = []

const isValidTheme = (theme: any): theme is Theme => {
    return typeof theme.background_color === 'string' &&
        typeof theme.font_color === 'string' &&
        typeof theme.accent_color === 'string'
}

function generateUUID() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random()*16|0, v = c === 'x' ? r : (r&0x3|0x8);
        return v.toString(16);
    });
}

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method === 'POST') {
        if (!isValidTheme(req.body)) {
            res.status(400).json({ message: 'Invalid theme data' })
        }
        // Mock "saving" new theme. Soon to be replaced by saving in API customization
        const newTheme: Theme = {
            ...req.body,
            id: generateUUID(), // assign a random UUID
        }
        themes.push(newTheme)

        res.status(200).json({ message: 'Theme created!', theme: newTheme })
    } else {
        res.status(405).json({ message: 'Method Not Allowed, only POST method is allowed' })
    }
}