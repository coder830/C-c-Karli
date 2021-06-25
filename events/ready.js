const chalk = require("chalk");
const moment = require("moment");
const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");
var prefix = ayarlar.prefix;

module.exports = async client => {
 
    client.user.setActivity("Çekiliş sonuçlarını", { type: "WATCHING" }); //WATCHING = İzliyor //PLAYİNG = Oynuyor //Listening = Dinliyor Gibi Düzenlenebilir
    client.user.setStatus("dnd"); //online = Aktif //dnd = Rahatsız Etmeyin Gibi Düzenlenebilir
console.log("Bot Hazır")
};



