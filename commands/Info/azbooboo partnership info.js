const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
const embed = new Discord.RichEmbed()
.setColor(`#11a8ff`)
.setDescription(`
🌻 Welcome to Azzy's Play and Chat 🌞 💜
My server is a place for fun!! We like to game play and voice chat.
-
🌞  Our members play a variety of games
🌞  In server activities are available
🌞  We support our members YT channels, Discord Channels and Games
🌞  A fun place to be 🎊
`)
.addField(`Server Invite`, `https://discord.gg/rqGzftT`)
.setthumbnail(https://cdn.discordapp.com/attachments/422430815561973761/467753104725770240/43151bcb9c44b5b11f06ef7058950b5c.png)
message.channel.send(embed);
}
module.exports.help = {
    name: "PartnerAz"
}