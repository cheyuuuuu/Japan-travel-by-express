const express = require('express');
const router = express.Router();
const path = require('path');

const apiKey = process.env.OPENAI_API_KEY; // 從 .env 讀取 API 密鑰

/* GET aihelp page. */
router.get('/', function(req, res, next) {
  res.sendFile(path.join(__dirname, '../public', 'aihelp.html'));
});

// POST 請求處理，用於從前端發送的訊息與 OpenAI API 互動
router.post('/chat', async (req, res) => {
  const userMessage = req.body.message;

  if (!userMessage) {
      return res.status(400).json({ error: 'Message is required' });
  }

  try {
      const response = await fetch('https://api.openai.com/v1/chat/completions', {
          method: 'POST',
          headers: {
              'Authorization': `Bearer ${apiKey}`,
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({
              model: 'gpt-3.5-turbo',
              messages: [
                { role: 'system', content: '你是一位日本導遊，請使用繁體中文回答所有問題。' },
                { role: 'user', content: userMessage }],
          }),
      });

      const data = await response.json();
      console.log("Response from OpenAI API:", data); // 添加這一行來查看完整的回應

      if (data.choices && data.choices.length > 0) {
          res.json({ reply: data.choices[0].message.content });
      } else {
          console.error("Unexpected response format from OpenAI:", data); // 記錄錯誤
          res.status(500).json({ error: 'Unexpected response from OpenAI API' });
      }
  } catch (error) {
      console.error('Error communicating with OpenAI:', error);
      res.status(500).json({ error: 'Internal server error' });
  }
});


module.exports = router;