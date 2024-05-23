import {NextApiRequest, NextApiResponse} from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    const {
        query: { theme_id },
    } = req;

    // TODO: put your handling code here
    const token = "jas5R2DqVdSFh35oiwejsLK3Re1xDvmo_lc_en_bg_2C2640_tb_6E7BF7"
    res.status(200).json({ token });
};