import fetch from 'node-fetch';
import dotenv from 'dotenv';

dotenv.config();

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

async function getSuggestions(interest) {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${OPENAI_API_KEY}`
        },
        body: JSON.stringify({
            model: "gpt-3.5-turbo",  // Use the supported model name
            messages: [
                {
                    role: "system",
                    content: "You are a helpful assistant."
                },
                {
                    role: "user",
                    content: `Suggest actions for someone interested in ${interest}.`
                }
            ],
            max_tokens: 100,
            temperature: 0.7
        })
    });

    if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`OpenAI API error: ${response.statusText}. Response text: ${errorText}`);
    }

    const data = await response.json();
    return data.choices[0].message.content.trim().split('\n');
}

getSuggestions('sports')
    .then(suggestions => console.log(suggestions))
    .catch(error => console.error('Error:', error));
