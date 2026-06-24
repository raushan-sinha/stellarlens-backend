import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import axios from 'axios';

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

// API call logic -
app.get('/space-news', async (req, res) => {
    try {
        const response = await axios.get(process.env.NASA_API);

        return res.status(200).json(response.data);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Failed to fetch API" });
    }
});

export default app;