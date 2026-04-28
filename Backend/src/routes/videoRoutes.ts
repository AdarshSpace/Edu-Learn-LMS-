import express from 'express';
import { generateUploadAuth, uploadVideo } from '../lib/imagekit.js';

const router = express.Router();

router.get('/auth', generateUploadAuth);
router.post('/upload', uploadVideo);

export default router;