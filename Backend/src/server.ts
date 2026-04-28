import "dotenv/config";

import express from 'express';
import authRoutes from './routes/authRoutes.js';
import videoRoutes from './routes/videoRoutes.js';
import cors from 'cors';

const corsOptions = {
    origin: process.env.Frontend_URL,    // Frontend URL
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
};


const app = express();
app.use(cors(corsOptions));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use("/api/auth", authRoutes);
app.use("/api/video", videoRoutes);


app.get('/', (req, res) => {
    console.log('Hello World');
    res.send('Hello World');
});




app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});