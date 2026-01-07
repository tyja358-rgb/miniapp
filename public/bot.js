const TelegramBot = require('node-telegram-bot-api');

// Вставь сюда токен своего бота от BotFather
const TOKEN = '8465624288:AAGKPaKjgGKxOZ3e1xN4pFTI_gTzP3KiVjc';

// Создаём бота
const bot = new TelegramBot(TOKEN, { polling: true });

// Событие при старте
bot.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id;

    // Настройка кнопки с URL на твой сайт
    const options = {
        reply_markup: {
            inline_keyboard: [
                [
                    { text: "Открыть Plasma Tower", url: "https://newpublic.netlify.app" }
                ]
            ]
        }
    };

    // Сообщение пользователю
    bot.sendMessage(chatId, "Привет! Нажми кнопку ниже, чтобы сразу начать играть:", options);
});

// Пример обработки других команд (необязательно)
bot.onText(/\/help/, (msg) => {
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, "Это бот для игры Plasma Tower. Просто нажми кнопку и начинай играть!");
});

// Логирование всех сообщений (для отладки)
bot.on('message', (msg) => {
    console.log(`Получено сообщение от ${msg.from.username || msg.from.first_name}: ${msg.text}`);
});
