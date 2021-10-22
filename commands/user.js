const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
    data: new SlashCommandBuilder()
        .setName('user')
        .setDescription('Replies with user info!'),
    async execute(interaction) {
        await interaction.reply(`Username: ${interaction.user.tag}\nID: ${interaction.user.id}\nJoined ${interaction.guild.name}: ${interaction.member.joinedAt}`);
    },
}