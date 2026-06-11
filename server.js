import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import axios from 'axios';

const app = express();   // Access Express power
app.use(cors());   // Middleware - Connect Backend to Frontend
app.use(express.json());
dotenv.config();

app.get('/api/space-data', async (req, res) => {
    try {
        const response = await axios.get(process.env.NASA_API);
        res.status(200).json(response.data);
    } catch (error) {
        console.error('Error', error);
        res.status(500).json({ message: 'Failed to fetch API' });
    }
});

const Port = process.env.PORT || 5000;

app.listen(Port, () => {
    console.log(`Server is running on http://localhost:${Port}`);
});