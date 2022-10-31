const TelegramApi = require('node-telegram-bot-api')
const token = '5710153516:AAEdmbkzI2YKZQfp2G-BMa9L8GeRQYfPG6o';
const botName = 'demenevTest_bot';

const bot = new TelegramApi(token,{polling:true})

bot.on('message' , msg => {
    const author = msg.from.first_name;
    const chatId = msg.chat.id;
    if (msg.text === '/start') {
        bot.sendMessage(chatId, `Привет, ${author}, Добро пожаловать`)        
    }
    console.log(msg);
}
)