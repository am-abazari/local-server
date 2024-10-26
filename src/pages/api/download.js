import fs from 'fs';
import path from 'path';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const directoryPath = path.join(process.cwd(), '/public/files'); // مسیر فولدر
      const files = fs.readdirSync(directoryPath); // خواندن محتویات فولدر
      
      res.status(200).json({ files }); // ارسال نام فایل‌ها به عنوان پاسخ
    } catch (error) {
      res.status(500).json({ error: 'Error reading directory' });
    }
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}

