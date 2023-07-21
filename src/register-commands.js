require('dotenv').config();
const { REST, Routes } = require('discord.js');

const commands = [

    {
        name: 'ola',
        description: 'Responde xd',
    },
];

const deleteCMD = [];

const rest = new REST({ version: '10'}).setToken(process.env.TOKEN);

(async () => {
  try {
    console.log('Registrando comandos');

    await rest.put(
      Routes.applicationGuildCommands(
        process.env.CLIENT_ID,
        process.env.GUILD_ID
      ),
      { body: commands }
    );

    console.log('Comandos registrados');
  } catch (error) {
    console.log(`Hubo un error: ${error}`);
  }
})();