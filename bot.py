from telegram.ext import Updater, CommandHandler
import os

TOKEN = os.getenv("BOT_TOKEN")

def start(update, context):
    update.message.reply_text("Бот запущен ✅")

updater = Updater(TOKEN, use_context=True)
dp = updater.dispatcher

dp.add_handler(CommandHandler("start", start))

updater.start_polling()
updater.idle()
