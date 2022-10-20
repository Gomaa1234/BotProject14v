const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('scary')
		.setDescription('Boo!'),
	async execute(interaction) {
        const random = (arr) => arr[Math.floor(Math.random() * arr.length)];
        const images = [
        'https://i.imgur.com/r5QjV70.jpg',
        'https://i.imgur.com/NUQy2y7.png',
        'https://i.imgur.com/PJOJScF.png',
        'https://i.imgur.com/odi3PKk.jpg',
        'https://i.imgur.com/WgNC2HP.jpg',
        'https://i.imgur.com/Yf4bUxk.png',
        'https://i.imgur.com/XkQyUC7.jpg',
        'https://i.imgur.com/9MeaZwA.png',
        'https://i.imgur.com/O0b41I5.png',
        'https://i.imgur.com/Sk84riv.jpg',
        'https://i.imgur.com/Vt0HVta.jpg',
        'https://i.imgur.com/W7FG5yz.png',
        'https://i.imgur.com/GaYGzZW.jpg',
        'https://i.imgur.com/0kCKLU4.jpg',
        'https://i.imgur.com/ltoAxpw.jpg',
        'https://i.imgur.com/rLSPGeZ.jpg',
        'https://i.imgur.com/mt4lQkB.jpg',
        'https://i.imgur.com/UEFpUFc.jpg',
        'https://i.imgur.com/cjz6OKx.jpg',
        'https://i.imgur.com/JQP6Bwt.jpg',
        'https://i.imgur.com/GsXGHg0.jpg',
        'https://i.imgur.com/mPfrOxJ.jpg',
        'https://i.imgur.com/wtjZu57.jpg',
        'https://i.imgur.com/jePBVYC.png',
        'https://i.imgur.com/PgY3xkR.jpg',
        'https://i.imgur.com/Jj0PvAL.png',
        'https://i.imgur.com/xYBfqPq.png',
        'https://i.imgur.com/829Re5S.jpg',
        'https://i.imgur.com/yk2u0ci.jpg',
        ];
        let img = random(images);
        console.log(img);
		return await interaction.reply(img)
	},
};

/*const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});

await lib.discord.channels['@0.3.2'].messages.create({
  "channel_id": `${context.params.event.channel_id}`,
  "content": "",
  "tts": false,
  "embeds": [
    {
      "type": "rich",
      "title": "",
      "description": "",
      "color": 0x00FFFF,
      "image": {
        "url": `https://pbs.twimg.com/media/FfXgOKNXkAE4D2x?format=jpg&name=small`,
        "height": 0,
        "width": 0
      }
    }
  ]
});*/