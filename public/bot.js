const TelegramBot = require('node-telegram-bot-api');

// Вставь сюда токен своего бота
const token = '8465624288:AAGKPaKjgGKxOZ3e1xN4pFTI_gTzP3KiVjc';

// Запуск бота в режиме polling
const bot = new TelegramBot(token, { polling: true });

// Обработка команды /start с необязательным параметром
bot.onText(/\/start(?:\s+(\w+))?/, (msg, match) => {
  const chatId = msg.chat.id;
  const param = match[1];

  if (param === 'play') {
    // Если пользователь зашел с /start play — сразу кнопка "Играть"
    bot.sendMessage(chatId, 'Добро пожаловать в Plasma Tower! 🎮\nНачинай играть по ссылке:', {
      reply_markup: {
        inline_keyboard: [
          [{ text: 'Играть', url: 'https://newpublic.netlify.app' }]
        ]
      }
    });
  } else {
    // Обычное приветствие для просто /start
    bot.sendMessage(chatId, 'Привет! Нажми на кнопку ниже, чтобы открыть Plasma Tower.', {
      reply_markup: {
        inline_keyboard: [
          [{ text: 'Открыть Plasma Tower', url: 'https://tyja358-rgb.github.io/miniapp/' }]
        ]
      }
    });
  }
});

// Можно добавить другие команды или обработчики по необходимости
bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  // Просто для отладки можно отправлять текст обратно
  // bot.sendMessage(chatId, `Вы написали: ${msg.text}`);
});
