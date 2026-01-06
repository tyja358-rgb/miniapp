
// Telegram Bot на Node.js для открытия mini app

const TelegramBot = require('node-telegram-bot-api');

// Токен, который дал BotFather
const TOKEN = "8465624288:AAGKPaKjgGKxOZ3e1xN4pFTI_gTzP3KiVjc";

// Создаём бота
const bot = new TelegramBot(TOKEN, { polling: true });

// Ссылка на mini app
const MINI_APP_URL = "https://tyja358-rgb.github.io/miniapp/";

// Команда /menu
bot.onText(/\/menu/, (msg) => {
  const chatId = msg.chat.id;

  const opts = {
    reply_markup: {
      inline_keyboard: [
        [{ text: "💡 Открыть Plasma Tower", web_app: { url: MINI_APP_URL } }]
      ]
    }
  };

  bot.sendMessage(
    chatId,
    "Mini app Plasma Tower для генерации энергии и KWT.\nУлучши башню и выводи KWT прямо через Telegram.",
    opts
  );
});

console.log("Бот запущен!");
