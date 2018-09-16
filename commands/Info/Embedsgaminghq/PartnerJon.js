const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply("Sorry but you don't have the permissions to use this command.");
const embed = new Discord.RichEmbed()
.setColor(`#11a8ff`)
.setDescription(`
Jonbn123's Discord: 
》💥 A Family Friendly Environment
》💥 Level up Roles
》💥 Voice Chat's
》💥 Game Nights
》💥 Karaoke
》💥 Q&A's
`)
.addField(`Server Invite`, `https://discord.gg/SeWwhDd`)
.setThumbnail(`https://images-ext-2.discordapp.net/external/l27Gxb4vbIwafwJ1QCI3KHb32bui1NvYmV-SQMgmDgA/https/discordapp.com/api/guilds/251055654465175554/icons/f2d1864625cf8d7e5865c9af98f827ca.jpg`)
message.channel.send(embed);
}
module.exports.help = {
    name: "PartnerJon"
}
