//BOT DESENVOLVIDO POR uknwxx
//BOT DESENVOLVIDO POR uknwxx
//BOT DESENVOLVIDO POR uknwxx

const Discord = require("discord.js")
const { QuickDB } = require("quick.db")
const db = new QuickDB()

module.exports = {
  name: "formulário",
  description: "Abra o painel do formulário para os membros.",
  type: Discord.ApplicationCommandType.ChatInput,
  options: [
    {
        name: "painel",
        description: "Canal para enviar o formulário para os membros.",
        type: Discord.ApplicationCommandOptionType.Channel,
        required: true,
    },
    {
        name: "respostas",
        description: "Canal para enviar as logs dos formulários recebidos.",
        type: Discord.ApplicationCommandOptionType.Channel,
        required: true,
    }
],

  run: async (client, interaction) => {

    if (!interaction.member.permissions.has(Discord.PermissionFlagsBits.Administrator)) {
        interaction.reply({ content: `Você não possui permissão para utilizar este comando.`, ephemeral: true })
    } else {
        const canal_formulario = interaction.options.getChannel("painel")
        const canal_logs = interaction.options.getChannel("respostas")

        if (canal_formulario.type !== Discord.ChannelType.GuildText) {
            interaction.reply({ content: `O canal ${canal_formulario} não é um canal de texto.`, ephemeral: true })
        } else if (canal_logs.type !== Discord.ChannelType.GuildText) {
            interaction.reply({ content: `O canal ${canal_logs} não é um canal de texto.`, ephemeral: true })
        } else {
            await db.set(`canal_formulario_${interaction.guild.id}`, canal_formulario.id)
            await db.set(`canal_logs_${interaction.guild.id}`, canal_logs.id)

            let embed = new Discord.EmbedBuilder()
            .setColor("303136")
            .setDescription(`> Canal do Formulário: ${canal_formulario}.\n> Canal de Logs: ${canal_logs}.`)

            interaction.reply({ embeds: [embed], ephemeral: true }).then( () => {
                let embed_formulario = new Discord.EmbedBuilder()
                .setColor("303136")
                .setThumbnail(interaction.guild.iconURL({ dynamic: true }))
                .setTitle(`Formulário STAFF - ${interaction.guild.name}`)
                .setDescription(`\*\*\*REQUISITOS BÁSICOS\*\*\*\n- Idade mínima: 18 anos.\n - Disponibilidade de tempo. \*\*PARA SE DEDICAR À STAFF\*\*\n - Conhecimento avançados das regras.\n\n \*\*\*INFORMAÇÕES\*\*\*\n - Não mande mensagem no privado nenhum staff!\n - Após o formulário, haverá uma entrevista em call.!\n - Prazo de 48 horas para seu formulário ser lido!\n\n  \*\*\*FORMULÁRIO\*\*\*\nFormulário disponível no botão abaixo!`);
                let botao = new Discord.ActionRowBuilder().addComponents(
                    new Discord.ButtonBuilder()
                    .setCustomId("formulario")
                    .setLabel("Formulário")
                    .setStyle(Discord.ButtonStyle.Primary)
                );

                canal_formulario.send({ embeds: [embed_formulario], components: [botao] })
            })
        } 
    }
  }
}

//BOT DESENVOLVIDO POR uknwxx
//BOT DESENVOLVIDO POR uknwxx
//BOT DESENVOLVIDO POR uknwxx