const Discord = require("discord.js");
const fs = require('fs');

module.exports.run = async (bot, message, args) => {
    let botembed = new Discord.RichEmbed()
    .setColor("#000FF")
    .addField("Restart Issued", `<@${message.author.id}> Has Restarted the Bot!`)
    .setTimestamp()
    console.log(`Bot Has Been Restart By: ` + message.author.username);
    if (message.author.id !== "283311727477784576" && message.author.id !== "288450828837322764") return;
    await message.react("✅");
    await message.channel.send(botembed);
    message.delete(1000).catch();
    await bot.destroy().then(bot.login(process.env.BOT_TOKEN))

}
module.exports.help = {
    name: "restart",
    names: "RT"
}
