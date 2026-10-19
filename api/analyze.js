// Leafy Serverless Vision & Web Search Proxy — Powered by Groq Vision, Tavily Search & Cosmos AI
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { image, prompt, provider, lang, organ } = req.body;

    if (!image) {
      return res.status(400).json({ error: 'Image data is required' });
    }

    const GROQ_KEY = process.env.GROQ_API_KEY || "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";
    const OPENAI_KEY = process.env.OPENAI_API_KEY;
    const TAVILY_KEY = process.env.TAVILY_API_KEY; // Injected via Vercel env variable

    let endpoint, authHeader, targetModel;
    if (provider === 'openai' && OPENAI_KEY) {
      endpoint = 'https://api.openai.com/v1/chat/completions';
      authHeader = `Bearer ${OPENAI_KEY}`;
      targetModel = 'gpt-4o';
    } else {
      endpoint = 'https://api.groq.com/openai/v1/chat/completions';
      authHeader = `Bearer ${GROQ_KEY}`;
      targetModel = 'qwen/qwen3.8-27b';
    }

    // Helper: call LLM chat completion
    async function callLLM(messages, maxTokens = 1500, temperature = 0.15) {
      const resp = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': authHeader
        },
        body: JSON.stringify({
          model: targetModel,
          messages,
          max_tokens: maxTokens,
          temperature
        })
      });
      if (!resp.ok) {
        const err = await resp.json().catch(() => ({}));
        throw new Error(err?.error?.message || `Upstream AI error HTTP ${resp.status}`);
      }
      const data = await resp.json();
      return data.choices[0].message.content.trim();
    }

    // If Tavily API Key is configured on Vercel, perform 2-stage visual identification + real-time web search
    if (TAVILY_KEY) {
      try {
        // Step 1: Rapid Vision scan to detect specimen identification & query keywords
        const identifyPrompt = `Look closely at this plant photograph (specimen organ: ${organ || 'leaf/plant'}).
Identify this plant with high precision. Return ONLY a compact JSON object (no markdown, no backticks):
{
  "plant_name": "Common name",
  "latin_name": "Scientific Latin name",
  "search_query": "specific web search query for exact plant care, insect pests, diseases, and benefits"
}`;

        const idContent = await callLLM([
          {
            role: 'user',
            content: [
              { type: 'text', text: identifyPrompt },
              { type: 'image_url', image_url: { url: image } }
            ]
          }
        ], 300, 0.1);

        let parsedId = null;
        try {
          const clean = idContent.replace(/^```json\s*/, '').replace(/\s*```$/, '').replace(/^```\s*/, '');
          parsedId = JSON.parse(clean);
        } catch (e) {
          console.warn('[Leafy ID parse warning]', e);
        }

        const searchQuery = parsedId?.search_query || `${parsedId?.plant_name || 'plant'} ${parsedId?.latin_name || ''} care watering insects diseases benefits`;

        // Step 2: Query Tavily Search API
        let webSources = [];
        let webContext = '';
        try {
          const tavilyRes = await fetch('https://api.tavily.com/search', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              api_key: TAVILY_KEY,
              query: searchQuery,
              search_depth: 'basic',
              include_answer: true,
              max_results: 4
            })
          });

          if (tavilyRes.ok) {
            const tavilyData = await tavilyRes.json();
            webSources = (tavilyData.results || []).map(r => ({
              title: r.title,
              url: r.url,
              snippet: r.content
            }));

            const answer = tavilyData.answer ? `TAVILY AI ANSWER: ${tavilyData.answer}\n\n` : '';
            const snippets = webSources.map((s, idx) => `[Source ${idx + 1}] (${s.title}): ${s.snippet}`).join('\n\n');
            webContext = `\n\nREAL-TIME LIVE WEB SEARCH RESULTS (TAVILY API):\n${answer}${snippets}\n`;
          }
        } catch (tavilyErr) {
          console.warn('[Leafy Tavily Search fetch error]', tavilyErr);
        }

        // Step 3: Synthesize Vision + Real-time Web Knowledge into final JSON
        const enrichedPrompt = `${prompt}\n${webContext}\nIMPORTANT: Enrich the diagnosis using the live verified web search results above. Include a "web_sources" array with up to 3 verified references [ { "title": "...", "url": "..." } ] if available.`;

        const finalReport = await callLLM([
          {
            role: 'user',
            content: [
              { type: 'text', text: enrichedPrompt },
              { type: 'image_url', image_url: { url: image } }
            ]
          }
        ], 1800, 0.15);

        return res.status(200).json({
          result: finalReport,
          web_search: {
            enabled: true,
            query: searchQuery,
            sources: webSources
          }
        });

      } catch (twoStepErr) {
        console.warn('[Leafy Tavily 2-step failed, falling back to direct vision call]', twoStepErr);
      }
    }

    // Direct single-stage vision call fallback (if Tavily not yet set or during fallback)
    const directContent = await callLLM([
      {
        role: 'user',
        content: [
          { type: 'text', text: prompt || 'Analyze this plant image and return only valid JSON.' },
          { type: 'image_url', image_url: { url: image } }
        ]
      }
    ], 1500, 0.15);

    return res.status(200).json({ result: directContent });

  } catch (error) {
    console.error('[Leafy API Proxy Error]', error);
    return res.status(500).json({
      error: 'Failed to analyze image',
      message: error.message || 'Internal server error'
    });
  }
}
