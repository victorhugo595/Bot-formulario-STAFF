//BOT DESENVOLVIDO POR uknwxx
//BOT DESENVOLVIDO POR uknwxx
//BOT DESENVOLVIDO POR uknwxx

const Discord = require("discord.js")

module.exports = {
  name: "ping",
  description: "Veja o ping do bot.",
  type: Discord.ApplicationCommandType.ChatInput,

  run: async (client, interaction) => {

    let ping = client.ws.ping;

    let embed_1 = new Discord.EmbedBuilder()
    .setDescription(`> Olá ${interaction.user}, meu ping está  \`calculando...\`.`)
    .setColor("303136");

    let embed_2 = new Discord.EmbedBuilder()
    .setDescription(`> Olá ${interaction.user}, meu ping está em \`${ping}ms\`.`)
    .setColor("303136");

    interaction.reply({ embeds: [embed_1] }).then( () => {
        setTimeout( () => {
            interaction.editReply({ embeds: [embed_2] })
        }, 2000)
    })
  }
}

//BOT DESENVOLVIDO POR uknwxx
//BOT DESENVOLVIDO POR uknwxx
//BOT DESENVOLVIDO POR uknwxx