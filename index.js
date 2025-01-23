//BOT DESENVOLVIDO POR uknwxx
//BOT DESENVOLVIDO POR uknwxx
//BOT DESENVOLVIDO POR uknwxx

const Discord = require("discord.js")
const config = require("./config.json")
const err = ('0')
const dev = ('Bot desenvolvido por uknwxx')
const client = new Discord.Client({ 
  intents: [ 
Discord.GatewayIntentBits.Guilds
       ]
    });

module.exports = client

client.on('interactionCreate', (interaction) => {

  if(interaction.type === Discord.InteractionType.ApplicationCommand){

      const cmd = client.slashCommands.get(interaction.commandName);

      if (!cmd) return interaction.reply(`Error`);

      interaction["member"] = interaction.guild.members.cache.get(interaction.user.id);

      cmd.run(client, interaction)

   }
})

  client.on('ready', () => {
  console.log(`Sistema ligado com sucesso | Aplicação: ${client.user.username}!`)
  console.log(`${err} erros encotrados! | ${dev}`)

})


client.slashCommands = new Discord.Collection()

require('./handler')(client)

const fs = require('fs');

fs.readdir('./Events', (err, file) => {
  file.forEach(event => {
    require(`./Events/${event}`)
  })
})

client.login(config.token)

//BOT DESENVOLVIDO POR uknwxx
//BOT DESENVOLVIDO POR uknwxx
//BOT DESENVOLVIDO POR uknwxx