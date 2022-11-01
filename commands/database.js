const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('database')
		.setDescription('see is db is connect'),
	async execute(interaction,client,connectDb) {
		//see if db is connect
        if(connectDb)
		    return interaction.reply('yes');
        else
            return interaction.reply('no');
	},
};