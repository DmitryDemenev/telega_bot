const TelegramApi = require('node-telegram-bot-api')
const token = '5710153516:AAEdmbkzI2YKZQfp2G-BMa9L8GeRQYfPG6o';
const userID = {};

const bot = new TelegramApi(token,{polling:true})
const chatTest = -1001847323009


bot.on('message' , msg => {
    const author = msg.from.first_name;
    const chatIdChannel = -1001847323009;
    const chatId = msg.from.id
    bot.sendMessage(chatId, `Привет, ${author}, Добро пожаловать`,{
        reply_markup:{
            inline_keyboard: [
                [{text: "Принять", web_app: {url:'https://t.me/+Y3RGKN24XIRkMWMy'}}],
        
            ]
        }
    }
    )
    
    
    // bot.sendMessage(chatId, `Привет, ${author}, Добро пожаловать`)
    // if (msg.text === '/start') {
    //             
    // }
    console.log(msg);
    
}
)