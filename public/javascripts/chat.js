document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('userInput').addEventListener('keypress', function (event) {
      if (event.key === 'Enter') {
          event.preventDefault(); // 防止換行
          sendMessage(); // 發送訊息
      }
  });
});

async function sendMessage() {
  const userInput = document.getElementById('userInput');
  const message = userInput.value.trim();
  if (!message) return;

  appendMessage(message, 'user');
  userInput.value = '';

  try {
      const response = await fetch('/aihelp/chat', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ message }),
      });

      const data = await response.json();
      if (data.reply) {
          appendMessage(data.reply, 'bot');
      } else {
          appendMessage('無法獲取回覆，請稍後再試。', 'bot');
      }
  } catch (error) {
      console.error('Error:', error);
      appendMessage('發生錯誤，請稍後再試。', 'bot');
  }
}

function appendMessage(message, sender) {
  const chatDisplay = document.getElementById('chat-display'); 
  const messageElement = document.createElement('div');
  messageElement.classList.add('chat-message', sender === 'user' ? 'user-message' : 'bot-message');
  messageElement.textContent = message;
  chatDisplay.appendChild(messageElement);
  chatDisplay.scrollTop = chatDisplay.scrollHeight; // 自動滾動到最新訊息
}