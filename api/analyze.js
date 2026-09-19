import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: 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,
});

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { image, prompt } = req.body;

    if (!image) {
      return res.status(400).json({ error: 'Image data is required' });
    }

    const completion = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [
        {
          role: 'user',
          content: [
            { type: 'text', text: prompt || 'Analyze this plant image and return only valid JSON.' },
            {
              type: 'image_url',
              image_url: {
                url: image,
                detail: 'high',
              },
            },
          ],
        },
      ],
      max_tokens: 1000,
      temperature: 0.2,
    });

    const content = completion.choices[0].message.content.trim();

    return res.status(200).json({ result: content });
  } catch (error) {
    console.error('[OpenAI API Error]', error);
    return res.status(500).json({
      error: 'Failed to analyze image',
      message: error.message || 'Internal server error',
    });
  }
}
