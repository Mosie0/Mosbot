const Discord = require('discord.js');
module.exports.run = async (bot, message, args) => {
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return;
let announce = message.guild.channels.find('name', '📜announcements📜');
let botembed = new Discord.RichEmbed()
.setColor(`#FF000`)
.setDescription(args.join(' '))
.setAuthor(`${message.guild.name}`, `${message.guild.iconURL}`)
.setFooter(`Announcement From ${message.author.username}`, message.author.avatarURL)
.setTimestamp()
announce.send(botembed);
message.delete().catch();
}
module.exports.help = { 
    name: "annoucement"
}