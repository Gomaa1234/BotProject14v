const { SlashCommandBuilder } = require('@discordjs/builders');
const { PermissionFlagsBits } = require('discord-api-types/v10');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('prune')
		.setDescription('Prune up to 99 messages.')
		.addIntegerOption(option => option.setName('amount').setDescription('Number of messages to prune'))
		.setDefaultMemberPermissions(PermissionFlagsBits.Administrator),
	async execute(interaction) {
		//delete amount of messages
		const amount = interaction.options.getInteger('amount');

		if (amount < 1 || amount > 99) {
			return interaction.reply({ content: 'You need to input a number between 1 and 99.', ephemeral: true });
		}
		await interaction.channel.bulkDelete(amount, true).catch(error => {
			console.error(error);
			interaction.reply({ content: 'There was an error trying to prune messages in this channel!', ephemeral: true });
		});

		return interaction.reply({ content: `Successfully pruned \`${amount}\` messages.`, ephemeral: true });
	},
};