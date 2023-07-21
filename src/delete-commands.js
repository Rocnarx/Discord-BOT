require('dotenv').config();
const { Client } = require('discord.js');

client.login(process.env.TOKEN);
client.application.commands.set([]);
