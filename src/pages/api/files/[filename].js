import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
    const { filename } = req.query; // دریافت نام فایل از URL

    const filePath = path.join(process.cwd(), 'public','files', filename); // پیدا کردن مسیر فایل
    console.log(filePath)
    fs.readFile(filePath, (err, data) => {
        if (err) {
            res.status(404).json({ error: `File not found ${err}` });
            return;
        }

        // تنظیم هدرها برای دانلود فایل
        res.setHeader('Content-Disposition', `attachment; filename=${filename}`);
        res.setHeader('Content-Type', 'application/octet-stream');

        res.status(200).send(data);
    });
}