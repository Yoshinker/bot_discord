// ALIVE

const http = require('http');
const express = require('express');
const app = express();
app.get("/", (request, response) => {
  console.log(Date.now() + " Ping Received");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 200000);

// ---------
//
//   BOT
//
// ---------

const Discord = require('discord.js');
const client = new Discord.Client();

const messageBegginner = "$";

client.on('ready', () => {
  console.log(`Connecté : ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content[0] === messageBegginner) {
    const command = msg.content.substr(messageBegginner.length);

    switch (command) {

      case "balance":
        msg.channel.send('Tu joues depuis 13h17 Vincent !');
        break;

      case "info":
        const monEmbed = new Discord.RichEmbed();
        monEmbed.setTitle("Louis, le petit frère");
        monEmbed.setDescription("Le frère robot d'un nain barbare");
        monEmbed.addField("$balance", "Balance la punchline qui fait sa réputation", false);
        monEmbed.addField("$info", "Affiche toutes les commandes du bot", false);
        msg.channel.send(monEmbed);
        break;
    }
  }

});

client.login(`${process.env.TOKEN}`);