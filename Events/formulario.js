//BOT DESENVOLVIDO POR uknwxx
//BOT DESENVOLVIDO POR uknwxx
//BOT DESENVOLVIDO POR uknwxx

require('../index')

const Discord = require('discord.js')
const client = require('../index')
const { QuickDB } = require("quick.db")
const db = new QuickDB()

client.on("interactionCreate", async(interaction) => {
    if (interaction.isButton()) {
      if (interaction.customId === "formulario") {
        if (!interaction.guild.channels.cache.get(await db.get(`canal_logs_${interaction.guild.id}`))) return interaction.reply({ content: `O sistema está desativado.`, ephemeral: true })
        const modal = new Discord.ModalBuilder()
        .setCustomId("modal")
        .setTitle("Formulário STAFF");
  
        const pergunta1 = new Discord.TextInputBuilder()
        .setCustomId("pergunta1") // Coloque o ID da pergunta
        .setLabel("Nome / Sobrenome") // Coloque a pergunta
        .setPlaceholder("Ex: João Victor") // Mensagem que fica antes de escrever a resposta
        .setRequired(true) // Deixar para responder obrigatório (true | false)
        .setStyle(Discord.TextInputStyle.Short) // Tipo de resposta (Short | Paragraph)
  
        const pergunta2 = new Discord.TextInputBuilder()
        .setCustomId("pergunta2") // Coloque o ID da pergunta
        .setLabel("Data de nascimento?") // Coloque a pergunta
        .setPlaceholder("Ex: 21/12/2012.") // Mensagem que fica antes de escrever a resposta
        .setStyle(Discord.TextInputStyle.Short) // Tipo de resposta (Short | Paragraph)
        .setRequired(true)
  
        const pergunta3 = new Discord.TextInputBuilder()
        .setCustomId("pergunta3") // Coloque o ID da pergunta
        .setLabel("Seu id in-game?") // Coloque a pergunta
        .setPlaceholder("Ex: 1010") // Mensagem que fica antes de escrever a resposta
        .setStyle(Discord.TextInputStyle.Short) // Tipo de resposta (Short | Paragraph)
        .setRequired(true)

        const pergunta4 = new Discord.TextInputBuilder()
        .setCustomId("pergunta4") // Coloque o ID da pergunta
        .setLabel("Qual sua diponibilidade de horario?") // Coloque a pergunta
        .setPlaceholder("Manhã/Tarde/Noite") // Mensagem que fica antes de escrever a resposta
        .setStyle(Discord.TextInputStyle.Short) // Tipo de resposta (Short | Paragraph)
        .setRequired(true)

        const pergunta5 = new Discord.TextInputBuilder()
        .setCustomId("pergunta5") // Coloque o ID da pergunta
        .setLabel("Por que quer entrar na staff?") // Coloque a pergunta
        .setPlaceholder("Resposta aqui.") // Mensagem que fica antes de escrever a resposta
        .setStyle(Discord.TextInputStyle.Paragraph) // Tipo de resposta (Short | Paragraph)
        .setRequired(true)


        modal.addComponents(
          new Discord.ActionRowBuilder().addComponents(pergunta1),
          new Discord.ActionRowBuilder().addComponents(pergunta2),
          new Discord.ActionRowBuilder().addComponents(pergunta3),
          new Discord.ActionRowBuilder().addComponents(pergunta4),
          new Discord.ActionRowBuilder().addComponents(pergunta5),

        )
  
        await interaction.showModal(modal)
      }
    } else if (interaction.isModalSubmit()) {
      if (interaction.customId === "modal") {
        let resposta1 = interaction.fields.getTextInputValue("pergunta1")
        let resposta2 = interaction.fields.getTextInputValue("pergunta2")
        let resposta3 = interaction.fields.getTextInputValue("pergunta3")
        let resposta4 = interaction.fields.getTextInputValue("pergunta4")
        let resposta5 = interaction.fields.getTextInputValue("pergunta5")


  
        if (!resposta1) resposta1 = "Não informado."
        if (!resposta2) resposta2 = "Não informado."
        if (!resposta3) resposta3 = "Não informado."
        if (!resposta4) resposta4 = "Não informado."
        if (!resposta5) resposta5 = "Não informado."

  
        let embed = new Discord.EmbedBuilder()
        .setColor("303136")
        .setTitle(`Formulário Recebido.`)
        .setDescription(`${interaction.user} \*\`(${interaction.user.id})\`\*`)
        .addFields(
          {
            name: `<:indentidade:1324401921037045814> Nome Sobrenome`,
            value: `\`\`\`${resposta1}\`\`\``,
            inline: true
          },
          {
            name: `<:indentidade:1324401921037045814> Idade`,
            value: `\`\`\`${resposta2}\`\`\``,
            inline: true
          },
          {
            name: `<:indentidade:1324401921037045814> ID in-game`,
            value: `\`\`\`${resposta3}\`\`\``,
            inline: true
          },
          {
            name: `<:chat:1324397260670505081> Qual sua disponibilidade de horario?`,
            value: `\`\`\`${resposta4}\`\`\``,
            inline: false
          },     
          {
            name: `<:chat:1324397260670505081> Por que quer entrar na staff?`,
            value: `\`\`\`${resposta5}\`\`\``,
            inline: false
          },   


        );

        let emebedenviado = new Discord.EmbedBuilder()
        .setColor('303136')
        .setDescription(`> Olá \*\*\*${interaction.user.username}\*\*\* seu formulário foi enviado com sucesso! Entraremos em contato em breve.`)
  
        interaction.reply({ embeds: [emebedenviado], ephemeral: true})
        await interaction.guild.channels.cache.get(await db.get(`canal_logs_${interaction.guild.id}`)).send({ embeds: [embed] })
      }
    }
  })

//BOT DESENVOLVIDO POR uknwxx
//BOT DESENVOLVIDO POR uknwxx
//BOT DESENVOLVIDO POR uknwxx