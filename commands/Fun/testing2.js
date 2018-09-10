const { Canvas } = require("canvas-constructor");

module.exports.run = (bot, message, args) => {
    const serverSize = message.guild.memberCount;
    const botCount = message.guild.members.filter(m => m.user.bot).size;
    const humanCount = serverSize - botCount;
    const canvas = new Canvas(400, 200)
    .setColor("#2C2F33")
    .addRect(0, 0, 400, 200)
    .setColor("#ffffff")
    .setTextFont('25px Impact')
    //.setTextAlign("center")
    .addText(`Server Members`, 10, 15)
    .setTextFont('20px Impact')
    .addText(`Total Count: ${serverSize}`, 10, 75)
    .addText(`Human Count: ${humanCount}`, 10, 100)
    .addText(`Bot Count: ${botCount}`, 20, 125)
    

    message.channel.send({files: [{ attachment: canvas.toBuffer(), name: "Account.png"}]});
}

module.exports.help = {
    name: "testing1",
    names: "Testing1"
}
