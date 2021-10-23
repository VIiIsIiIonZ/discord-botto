module.exports = {
    name: 'interactionCreate',
    execute(client) {
        console.log(`${interaction.user.tag} in #${interaction.channel.name} triggered an interraction.`);
    }
}