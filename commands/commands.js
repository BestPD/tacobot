const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let serverembed = new Discord.RichEmbed()
  .setDescription("List of Tacobot commands")
  .setColor("#ed960b")
  .addField("!about", "Tells you about the bot and the server.")
  .addField("!tacofact", "This command will show you a quick fact about tacos!")
  .addField("More commands will be added over time.", "_ _")

  return message.channel.send(serverembed);

  return;
  }

  module.exports.help = {
    name: "commands"
  };
