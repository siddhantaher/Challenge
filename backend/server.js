import express from 'express';
import fetch from 'node-fetch';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();

const app = express();
const port = 5000; // Different port to avoid conflict with React dev server

const OPENAI_API_KEY = process.env.OPENAI_API_KEY; // Use environment variable for security

app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/surveyDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Endpoint to get suggestions based on user interest
app.get('/api/suggestions', async (req, res) => {
    const interest = req.query.interest;

    try {
        const suggestions = await getSuggestionsFromChatGPT(interest);
        res.json(suggestions);
    } catch (error) {
        console.error('Error fetching suggestions:', error);
        res.status(500).json({ error: 'Internal Server Error', details: error.message });
    }
});

// Function to get suggestions from ChatGPT
async function getSuggestionsFromChatGPT(interest) {
    const response = await fetch('https://api.openai.com/v1/completions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${OPENAI_API_KEY}`
        },
        body: JSON.stringify({
            model: "text-davinci-004",
            prompt: `Suggest actions for someone interested in ${interest}.`,
            max_tokens: 100
        })
    });

    if (!response.ok) {
        throw new Error(`OpenAI API error: ${response.statusText}`);
    }

    const data = await response.json();
    return data.choices[0].text.trim().split('\n');
}

// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
