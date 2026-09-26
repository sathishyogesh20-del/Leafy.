export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { image, prompt, provider, apiKey, model } = req.body;

    if (!image) {
      return res.status(400).json({ error: 'Image data is required' });
    }

    const selectedProvider = provider || (process.env.GROK_API_KEY ? 'grok' : 'openai');
    const key = apiKey || (selectedProvider === 'grok' ? process.env.GROK_API_KEY : process.env.OPENAI_API_KEY);

    if (!key) {
      return res.status(400).json({
        error: `Missing API key for ${selectedProvider}. Please configure in Settings.`
      });
    }

    let endpoint, targetModel, authHeader;

    if (selectedProvider === 'grok') {
      endpoint = 'https://api.x.ai/v1/chat/completions';
      targetModel = model || 'grok-2-vision-1212';
      authHeader = `Bearer ${key}`;
    } else {
      endpoint = 'https://api.openai.com/v1/chat/completions';
      targetModel = model || 'gpt-4o';
      authHeader = `Bearer ${key}`;
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
                  url: image,
                  detail: 'high'
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
        error: err?.error?.message || `Upstream API error HTTP ${response.status}`
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
