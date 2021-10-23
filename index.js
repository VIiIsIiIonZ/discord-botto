// Require necessary discord.js classes
const fs = require('fs');
const { Client, Collection, Intents } = require('discord.js');
const { token } = require('./config.json');

// Creating new client instance
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

// Event Handler
const eventFiles = fs.readdirSync('./events')

for (const file of eventFiles) {
    const event = require(`./events/${file}`);
    if (event.once) {
        client.once(event.name, (...args) => event.execute(...args));
    } else {
        client.on(event.name, (...args) => event.execute(...args));
    }
}

// Command Handler
client.commands = new Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles){
    const command = require(`./commands/${file}`);
    // set new item in collection
    // with key as command name, value as exported module
    client.commands.set(command.data.name, command);
}

// Login to discord with password(token)
client.login(token);