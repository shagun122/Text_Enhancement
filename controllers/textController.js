const { getEnhancedText, getModifiedText } = require('../services/geminiService');

exports.enhanceText = async (req, res) => {
    try {
        const { text } = req.body;
        if (!text) return res.status(400).json({ error: 'Text is required' });

        const enhancedText = await getEnhancedText(text);
        res.json({ enhancedText });
    } catch (error) {
        console.error('Enhance text error:', error);
        res.status(500).json({ error: 'Failed to process text' });
    }
};

exports.modifyText = async (req, res) => {
    try {
        const { text, modification } = req.body;
        if (!text || !modification) return res.status(400).json({ error: 'Text and modification are required' });

        const modifiedText = await getModifiedText(text, modification);
        res.json({ modifiedText });
    } catch (error) {
        console.error('Modify text error:', error);
        res.status(500).json({ error: 'Failed to modify text' });
    }
};
