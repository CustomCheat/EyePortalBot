const Discord = require("discord.js");
const bot = new Discord.Client();

const token = "NjgzNjA3MjM2ODg2NzkwMTQ0.XluF5A.65JpU55uSEmOqtyQZbiRWbvn9NY";

const PREFIX = '?';

bot.on('ready', () => {
    console.log('Jsem Online!');
})
bot.on('message', message=>{

     let args = message.content.substring(PREFIX.length).split(" ")
     switch(args[0]){
   case 'pravidla':
   message.reply('Podivej se do Kanalu Pravidla!')
   break;
   case 'ip':
    message.channel.sendMessage('EyePortal.aternos.me')
    break;
    
    case 'info':
    if(args[1] === 'version'){
        message.channel.sendMessage('1.1')
        break;
    }else if(args[1] === 'about'){
      message.channel.sendMessage('Jsem vytvoren pro EyePortal')
      break;
    }else if(args[1] === 'author'){
         message.channel.sendMessage('Vyrobil me hrac jmenem mamn')
         break;
    }else{
        message.channel.sendMessage('Tento prikaz neexistuje napis ?pomoc pro prikazy')
  break;
    }

    case 'rank':
         const embed = new Discord.RichEmbed()
         .setTitle('Informace o Clenovi')
        .addField('Jmeno', message.author.username)
        .addField('Pouzivana Verze Bota', '1.1')
        .addField('Server', message.guild.name)
        .setColor(0x3498DB)
        message.channel.sendMessage(embed);
break;
case 'prikazy':
case 'pomoc':
const Embed = new Discord.RichEmbed()
.setTitle('Menu:')
.setColor(0x2E86C1)
.setDescription('prikazy: ?ip ?pravidla a ?pomoc ?info version ?info author ?info about ?rank')
message.channel.sendMessage(Embed);
break;
} 
})

bot.login(token);