const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports={
	data: new SlashCommandBuilder()
		.setName('help')
		.setDescription('help description'),
	async execute(interaction,Client) {
		const user = await interaction.user;
        user.send({
            "content": `help commands`,
            "tts": false,
            "embeds": [
                {
                "type": "rich",
                "title": `Gamer Cafe Bot Commands`,
                "description": `All Commands`,
                "color": 0x0099ff,
                "fields": [
                    {
                        "name": `Avatar`,
                        "value": `Get the avatar URL of the selected user, or your own avatar; Avatar @User`,
                        "inline": true
                    },
                    {
                        "name": `Beep`,
                        "value": `with this command the bot will replay Boop`,
                        "inline": true
                    },
                    {
                        "name": `Kick`,
                        "value": `Select a member and kick them (but not really); Kick @User`,
                        "inline": true
                    },
                    {
                        "name": `Server`,
                        "value": `Display info about this server`,
                        "inline": true
                    },
                    {
                        "name": `User-info`,
                        "value": `Display info about yourself`,
                        "inline": true
                    },
                    {
                        "name": `Ping`,
                        "value": `with this command the bot will replay pong`,
                        "inline": true
                    }
                ],
                "author": {
                    "name": `Gamer Cafe Bot`,
                    "url": `https://discord.js.org`,
                    "icon_url": `https://i.imgur.com/jPLcxCb.png`
                },
                "footer": {
                    "text": `Some footer text here`,
                    "icon_url": `https://i.imgur.com/jPLcxCb.png`
                }
                }
            ]
        });
        await interaction.reply("I send you all commands in your DMS")
	},
}