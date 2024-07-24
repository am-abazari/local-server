
import path from 'path';
import fs from 'fs';

const uploadDir = path.join(process.cwd(), '/src/pages/api/');

export default async function handler(req, res) {

    try {
        const x = fs.readFileSync(`${uploadDir}text.text`,'utf-8');
        res.status(200).json({ message: x });
    } catch { }
    
}