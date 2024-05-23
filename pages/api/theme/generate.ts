import type { NextApiRequest, NextApiResponse } from 'next'
import {IsValidTheme, Theme} from '../../../models/theme'

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method === 'POST') {
        if (!IsValidTheme(req.body)) {
            res.status(400).json({ message: 'Invalid theme data' })
        }
        // Mock "generating" new theme. Soon to be replaced by using switch library

        res.status(200).json({ message: 'Theme created!'})
    } else {
        res.status(405).json({ message: 'Method Not Allowed, only POST method is allowed' })
    }
}