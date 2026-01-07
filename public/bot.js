// bot.js
// Пример кнопки для Telegram Bot, которая открывает миниап прямо в браузере

const TelegramBot = require('node-telegram-bot-api');

// Вставь сюда свой токен бота
const token = '8465624288:AAGKPaKjgGKxOZ3e1xN4pFTI_gTzP3KiVjc';
const bot = new TelegramBot(token, { polling: true });

// Обработка команды /start
bot.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id;

    const opts = {
        reply_markup: {
            inline_keyboard: [
                [
                    {
                        text: 'Открыть Плазма Товер',
                        url: 'https://tyja358-rgb.github.io/miniapp/' // <-- ссылка на GitHub Pages
                    }
                ]
            ]
        }
    };

    bot.sendMessage(chatId, 'Добро пожаловать в Plasma Tower! Нажмите кнопку ниже, чтобы открыть игру:', opts);
});

// Опционально: обработка других команд
bot.onText(/\/help/, (msg) => {
    bot.sendMessage(msg.chat.id, 'Используйте кнопку "Открыть Плазма Товер" чтобы запустить игру.');
});
