import type { NextApiRequest, NextApiResponse } from 'next'
import {IsValidTheme, Theme as Itheme} from '../../../models/theme'
import {BaseColors, Theme, themeGenerator} from '@xsolla/switch-themes';
import {lightTheme} from "../../../models/light-theme";

function generateTheme(parameters: {
    baseColors: BaseColors<string>;
    parentTheme: Theme;
    schemeName: string;
}): Theme {
    return themeGenerator({
        schemeName: parameters.schemeName,
        baseColors: parameters.baseColors as unknown as BaseColors
    });
}



function setBaseColors(content: string, surface: string, project: string): BaseColors<string> {
    return {
        content: content,
        surface: surface,
        project: project,
        phantom: "rgb(0, 0, 0)",
        path: "rgb(13, 13, 242)",
        success: "rgb(15, 138, 101)",
        warning: "rgb(204, 65, 0)",
        alert: "rgb(204, 0, 78)",
        neutral: "rgb(65, 57, 96)"
    }
}

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method === 'POST') {
        if (!IsValidTheme(req.body)) {
            res.status(400).json({ message: 'Invalid theme data' })
            return
        }

        const { content, surface, project } = req.body;
        const baseColors = setBaseColors( content, surface, project )

        const themeContent = generateTheme({
            parentTheme: lightTheme,
            schemeName: "paystation4",
            baseColors: baseColors
        });
        res.status(200).json(themeContent)
    } else {
        res.status(405).json({ message: 'Method Not Allowed, only POST method is allowed' })
    }
}