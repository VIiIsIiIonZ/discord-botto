// Reqwuire necessary discord.js classes
const { Client, Intents } = require('discord.js');
const { token } = require('./config.json');

// Creating new client instance
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

// Once bot ready, will log "ready"
client.once('ready', () => {
    console.log('Ready!');
})

client.on('interactionCreate', async interaction => {
    if (!interaction.isCommand()) return;

    const { commandName } = interaction;

    if (commandName === 'ping') {
        await interaction.reply('Pong!');
    } else if (commandName === 'server') {
        await interaction.reply(`Name: ${interaction.guild.name}\nTotal members: ${interaction.guild.memberCount}\nCreated: ${interaction.guild.createdAt}\nOwner: ${interaction.guild.ownerId}`);
    } else if (commandName === 'user') {
        await interaction.reply(`Username: ${interaction.user.tag}\nID: ${interaction.user.id}\nJoined ${interaction.guild.name}: ${interaction.member.joinedAt}`);
    }
})

// Login to discord with password(token)
client.login(token);