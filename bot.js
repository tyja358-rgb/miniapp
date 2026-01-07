
const TelegramBot = require('node-telegram-bot-api');

// Вставь сюда токен твоего бота
const token = '8465624288:AAGKPaKjgGKxOZ3e1xN4pFTI_gTzP3KiVjc';
const bot = new TelegramBot(token, { polling: true });

// Команда /start
bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;
  
  bot.sendMessage(chatId, 'Добро пожаловать! Нажмите кнопку, чтобы открыть Plasma Tower:', {
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: 'Открыть Plasma Tower',
            url: 'https://tyja358-rgb.github.io/miniapp/'
          }
        ]
      ]
    }
  });
});
