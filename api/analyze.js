// Leafy Serverless Vision Proxy — Supports Groq Vision & OpenAI Vision
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { image, prompt, provider } = req.body;

    if (!image) {
      return res.status(400).json({ error: 'Image data is required' });
    }

    // Default to Groq Vision using the Groq LPU API key
    const GROQ_KEY = process.env.GROQ_API_KEY || "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";
    const OPENAI_KEY = process.env.OPENAI_API_KEY;

    let endpoint, authHeader, targetModel;

    if (provider === 'openai' && OPENAI_KEY) {
      endpoint = 'https://api.openai.com/v1/chat/completions';
      authHeader = `Bearer ${OPENAI_KEY}`;
      targetModel = 'gpt-4o';
    } else {
      // Groq Ultra-Fast Vision LPU Model
      endpoint = 'https://api.groq.com/openai/v1/chat/completions';
      authHeader = `Bearer ${GROQ_KEY}`;
      targetModel = 'qwen/qwen3.8-27b';
    }

    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': authHeader
      },
      body: JSON.stringify({
        model: targetModel,
        messages: [
          {
            role: 'user',
            content: [
              { type: 'text', text: prompt || 'Analyze this plant image and return only valid JSON.' },
              {
                type: 'image_url',
                image_url: {
                  url: image
                }
              }
            ]
          }
        ],
        max_tokens: 1500,
        temperature: 0.15
      })
    });

    if (!response.ok) {
      const err = await response.json().catch(() => ({}));
      return res.status(response.status).json({
        error: err?.error?.message || `Upstream AI service error HTTP ${response.status}`
      });
    }

    const data = await response.json();
    const content = data.choices[0].message.content.trim();

    return res.status(200).json({ result: content });
  } catch (error) {
    console.error('[Leafy API Proxy Error]', error);
    return res.status(500).json({
      error: 'Failed to analyze image',
      message: error.message || 'Internal server error'
    });
  }
}
