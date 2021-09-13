const Discord =require('discord.js')

module.exports = {
    
       run: async( message , member ) => {
         message.channel.send(new Discord.MessageEmbed()
            .setTitle('Help')
            .setDescription('Fait !cmd pour voir les commandes du bot ')
            .setColor('#8F00FF')
            .setAuthor(message.author.username, message.author.avatarURL())
            .setFooter(  '[FR] Squid [RP]',` https://cdn.discordapp.com/avatars/848166694295175188/325c38e7d7f3bad1159a7cbe72ce98b9.png?size=4096 `)
            .setTimestamp()
         )
 
 
        },
     name: 'help'
     
     }
