const mineflayer = require('mineflayer')

const bot = mineflayer.createBot({
  host: '0.tcp.eu.ngrok.io', // minecraft server ip
  username: 'trrrreeee44', // minecraft username
  version: '1.8.8',
  port: 12290
})

bot.on('message', (message) => {
  console.log(message.toString())

})

// Log errors and kick reasons:
bot.on('kicked', console.log)
bot.on('error', console.log)