const Discord = require('discord.js')
const moment = require('moment')
const db = require('quick.db')
const ayarlar = require('../ayarlar.json')
const client = new Discord.Client();
require("moment-duration-format");
const prefix = ayarlar.prefix
exports.run = async (bot, msg, args) => {

        const çekiliş = new Discord.MessageEmbed()
                .setColor('RANDOM')
        .setFooter(`${msg.author.username} Başarıyla Çekiliş Komutunu Kullandı!`, msg.author.avatarURL)
        .setAuthor('Lycaron | Çekiliş Bot Yardım Menüsü')
        .setThumbnail('https://cdn.discordapp.com/attachments/840121725998858241/845275112110293012/Enes_Acar_82.gif')
        .setDescription('Komutlar/Commands',false)
        .addField('**__Çekiliş Başlat__**','`o!çekiliş-başlat #kanal süre kazanan_sayısı Ödül` \nBelirtilen Kanalda Çekiliş Başlatırsınız',false )
        .addField('**__Çekiliş Yenile__**','  `o!çekiliş-yenile mesaj_id` \n Belirtilen İd deki Çekilişi Yeniler',true)
        .addField('**__Çekiliş Liste__**',' `o!çekiliş-liste` \nSunucudaki Aktif Çekilişleri Listeler',true)
        .addField('**__Çekiliş Bitir__**', ' `o!çekiliş-bitir mesaj_id` \nBelirtilen İd deki Çekilişi Sonlandırır.',false)
 .setThumbnail("https://cdn.discordapp.com/emojis/837945653774647326.gif?v=1")
msg.channel.send(çekiliş)
    
}
exports.conf = {
  enabled: true,
  guildOnly: true,
 aliases: ['çekiliş', 'giveaway'],
  kategori: 'yardım',
  permLevel: 0
};
exports.help = {
  name: 'çekiliş',
  description: 'İstediğiniz kullanıcını bilgilerini gösterir.',
  usage: 'çekiliş'
};