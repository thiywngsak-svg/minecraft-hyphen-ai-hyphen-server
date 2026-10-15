const mineflayer = require('mineflayer');

const bot = mineflayer.createBot({
  host: 'localhost', 
  port: 25565,       
  username: 'AIBot'  
});

bot.on('chat', (username, message) => {
  if (username === bot.username) return;

  if (message.includes('hello')) {
    bot.chat('สวัสดีค่ะ มีอะไรให้ฉันช่วยไหมคะ');
  } else if (message.includes('jump')) {
    bot.setControlState('jump', true);
    setTimeout(() => bot.setControlState('jump', false), 500);
  }
});
