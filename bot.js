//////////////////////////////////////////////////////////////////////////////////////////////////
const Discord1 = require('discord.js');
const Discord2 = require('discord.js');
//////////////////////////////////////////////////////////////////////////////////////////////////
const client1 = new Discord21.Client();
const client2 = new Discord22.Client();
//////////////////////////////////////////////////////////////////////////////////////////////////
var ServerID = "510514272229392384";
var ChannelID = "512374264389828624";
var prefix = "R";
console.log('Love.. Online.');
//////////////////////////////////////////////////////////////////////////////////////////////////
client1.on('ready', () => {
client1.user.setActivity('Love..', {type: "STREAMING",url: "http://www.twitch.tv/dangernumber17"});
});
client2.on('ready', () => {
client2.user.setActivity('Love..', {type: "STREAMING",url: "http://www.twitch.tv/dangernumber17"});
});
//////////////////////////////////////////////////////////////////////////////////////////////////
client1.on("message", message => {
      if (message.author.bot) return;
      if(!message.channel.guild) return;
        if(message.content.startsWith(prefix + "say")) {
message.delete(3000);
    if(message.author.id !== "463698464845594628") return message.reply('You are not allowed to use this command!').then(msg => msg.delete(3000));
        let args = message.content.split(" ").slice(1);
message.channel.send(args).then(s => {
s.delete(3000);
});
}
});
client2.on("message", message => {
      if (message.author.bot) return;
      if(!message.channel.guild) return;
        if(message.content.startsWith(prefix + "say")) {
message.delete(3000);
    if(message.author.id !== "Your ID") return message.reply('You are not allowed to use this command!').then(msg => msg.delete(3000));
        let args = message.content.split(" ").slice(1);
message.channel.send(args).then(s => {
s.delete(3000);
});
}
});
//////////////////////////////////////////////////////////////////////////////////////////////////
client1.on('ready', () => {
client1.user.setActivity('Love..', {type: "STREAMING",url: "http://www.twitch.tv/dangernumber17"});
});
client2.on('ready', () => {
client2.user.setActivity('Love..', {type: "STREAMING",url: "http://www.twitch.tv/dangernumber17"});
});
//////////////////////////////////////////////////////////////////////////////////////////////////
client1.on("message", message => {
          if (message.author.bot) return;
      if(!message.channel.guild) return;
        if(message.content.startsWith(prefix + "rep")) {
message.delete(3000);
    if(message.author.id !== "463698464845594628") return message.reply('You are not allowed to use this command!').then(msg => msg.delete(3000));
message.channel.send('#rep <@!463698464845594628>').then(s => {
s.delete(3000);
});
message.channel.send('->rep <@!463698464845594628>').then(s => {
s.delete(3000);
});
}
});
client2.on("message", message => {
          if (message.author.bot) return;
      if(!message.channel.guild) return;
        if(message.content.startsWith(prefix + "rep")) {
message.delete(3000);
    if(message.author.id !== "463698464845594628") return message.reply('You are not allowed to use this command!').then(msg => msg.delete(3000));
message.channel.send('#rep <@!463698464845594628>').then(s => {
s.delete(3000);
});
message.channel.send('->rep <@!463698464845594628>').then(s => {
s.delete(3000);
});
}
});
//////////////////////////////////////////////////////////////////////////////////////////////////
client1.login(process.env.BOT1_TOKEN);
client2.login(process.env.BOT2_TOKEN);
