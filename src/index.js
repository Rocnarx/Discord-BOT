const { Client, IntentsBitField, EmbedBuilder, AttachmentBuilder} = require("discord.js");
const file = new AttachmentBuilder("C:/Users/Rocnar/Desktop/BOT CONQUISTADOR/VSC/assets/prueba.png");

const client = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.MessageContent,
  ],
});

require("dotenv").config();
client.on("ready", (c) => {
  console.log(`${c.user.username} esta online.`);
});
/*
client.on('messageCreate', (message) => {
    if (message.author.bot) {
        return;
    }

    if (message.content === 'hello'){
        message.reply('hello');
    }

});
*/

client.on("interactionCreate", (interaction) => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === "ola") {
    const embed = new EmbedBuilder()
      .setTitle("Prueba 1")
      .setDescription("Puto el que lo lea") 
      .setColor('Random')
      .addFields({ name: 'Imagen', value: 'xdas'})
      .setImage('attachment://prueba.png')
             

    interaction.reply({ embeds: [embed], files: [file] });
  }
});



client.login(process.env.TOKEN);
