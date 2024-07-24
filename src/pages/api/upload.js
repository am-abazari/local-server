// pages/api/upload.js
import multer from 'multer';
import path from 'path';
import fs from 'fs';

const uploadDir = path.join(process.cwd(), '/public/files');
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir);
}

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, uploadDir);
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}12845${file.originalname}`);
    },
});

const upload = multer({ storage });

export const config = {
    api: {
        bodyParser: false,
    },
};

export default function handler(req, res) {
    upload.single('file')(req, res, (err) => {
        if (err) {
            res.status(500).json({ error: 'Something went wrong.' });
            return;
        }
        console.log(uploadDir)
        res.status(200).json({ message: 'File uploaded successfully!' });
    });
}