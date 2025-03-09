const axios = require('axios');

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
const GEMINI_API_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent';

async function getEnhancedText(text) {
    const prompt = `Enhance the following text to be more coherent and polished:\n\n${text}`;
    return await callGeminiAPI(prompt);
}

async function getModifiedText(text, modification) {
    let prompt = '';

    switch (modification) {
        case 'shorten':
            prompt = `Summarize the following text:\n\n${text}`;
            break;
        case 'lengthen':
            prompt = `Expand the following text with more details:\n\n${text}`;
            break;
        case 'formal':
            prompt = `Rewrite the following text in a formal tone:\n\n${text}`;
            break;
        case 'casual':
            prompt = `Rewrite the following text in a casual tone:\n\n${text}`;
            break;
        default:
            throw new Error('Invalid modification type');
    }

    return await callGeminiAPI(prompt);
}

async function callGeminiAPI(prompt) {
    try {
        const response = await axios.post(
            `${GEMINI_API_URL}?key=${GEMINI_API_KEY}`,
            {
                contents: [{ role: "user", parts: [{ text: prompt }] }],
            }
        );

        return response.data?.candidates?.[0]?.content?.parts?.[0]?.text || 'No response from Gemini API';
    } catch (error) {
        console.error('Error calling Gemini API:', error.response?.data || error.message);
        throw new Error('Gemini API request failed');
    }
}

module.exports = { getEnhancedText, getModifiedText };
