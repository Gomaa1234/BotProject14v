const Discord = require('discord.js');
require('dotenv').config();
const Client = new Discord.Client({
    intents:3243773
});
Client.on("ready",()=>{
    console.log("Client ready!");
});
Client.login(process.env.Token);