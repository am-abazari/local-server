
import path from 'path';
import fs from 'fs';

const uploadDir = path.join(process.cwd(), '/src/pages/api/');



export default async function handler(req, res) {

    try {
        fs.writeFileSync(`${uploadDir}text.text`, req.body);
    } catch { }
    res.status(200).json({ message: 'File uploaded successfully!' });
}