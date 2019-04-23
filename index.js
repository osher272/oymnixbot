const Discord = require('discord.js');
const bot = new Discord.Client();
const token = 'NTY5OTYzMjUyOTIyOTc0MjA5.XL5-fA.ipaWa5ZnpAIXmZAEaOQFz9p9p2I';
const PREFIX = '@';

bot.on('ready', () =>{
   console.log('This bot is online!');
})

bot.on('message', msg=>{
   if(msg.content === "hello OyMnix"){
  msg.reply('Hello friend!');
   }
})
bot.on('message', msg=>{
  if(msg.content === "hello OyMnixBot"){
 msg.reply('Hello friend!');
  }
})

bot.on('message', message =>{
  if(message.content === "@rules")
  {
      message.channel.send('https://discord.gg/jUBEWG');
      message.channel.send('#??rules');

  }
})

bot.on('message', message =>{
  if(message.content === "@OyMnix Channel")
  {
      message.channel.send('https://www.youtube.com/channel/UCeTreKKp4LjQ9VvGoaga4TA?view_as=subscriber');
  }
})


bot.on('message', message =>{
  if(message.content === "@help")
  {
     
      message.channel.send('```1. hello OyMnix = Hello friend```');
      message.channel.send('```2. hello OyMnixBot = Hello friend```');
      message.channel.send('```3. !ruls = see the ruls of OyMnix Server```');
      message.channel.send('```4. !OyMnix Channel = Link to OyMnix Channel```');
      message.channel.send('```5. !Spam  = spam @everyone``');
  }
})

bot.on('message', message =>{
  if(message.content === "@עזרה")
  {
    
      message.channel.send('```1. hello OyMnix = Hello friend```');
      message.channel.send('```2. hello OyMnixBot = Hello friend```');
      message.channel.send('```3. !ruls = להכנס לחוקים של הסרבר```');
      message.channel.send('```4. !OyMnix Channel = קישור לערוץ שלי```');
      message.channel.send('```5. !Spam = הספמה @everyone```');
  }
})


bot.on('message', message =>{
  if(message.content === "@Spam")
  {
      message.channel.send("!Spam @everyone");
      message.channel.send("!Spam @everyone");
      message.channel.send("!Spam @everyone");
      message.channel.send("!Spam @everyone");
      message.channel.send("!Spam @everyone");
      message.channel.send("!Spam @everyone");
      message.channel.send("!Spam @everyone");
      message.channel.send("!Spam @everyone");
      message.channel.send("!Spam @everyone");
      message.channel.send("!Spam @everyone");
      message.channel.send("!Spam @everyone");
      message.channel.send("!Spam @everyone");
      message.channel.send("!Spam @everyone");
      message.channel.send("!Spam @everyone");
      message.channel.send("!Spam @everyone");
      message.channel.send("!Spam @everyone");
      message.channel.send("!Spam @everyone");
      message.channel.send("!Spam @everyone");
      message.channel.send("!Spam @everyone");
      message.channel.send("!Spam @everyone");
      message.channel.send("!Spam @everyone");
      message.channel.send("!Spam @everyone");
      message.channel.send("!Spam @everyone");
      message.channel.send("!Spam @everyone");
      message.channel.send("!Spam @everyone");
      message.channel.send("!Spam @everyone");
      message.channel.send("!Spam @everyone");
      message.channel.send("!Spam @everyone");
      message.channel.send("!Spam @everyone");
      message.channel.send("!Spam @everyone");
      message.channel.send("!Spam @everyone");
      message.channel.send("!Spam @everyone");
      message.channel.send("!Spam @everyone");
      message.channel.send("!Spam @everyone");
      message.channel.send("!Spam @everyone");
  }
})


bot.login(token);
