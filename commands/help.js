const Discord =require('discord.js')

module.exports = {
    
       run: async( message , member ) => {
         message.channel.send(new Discord.MessageEmbed()
            .setTitle('Help')
            .setDescription('Fait !cmd pour voir les commandes du bot ')
            .setColor('#8F00FF')
            .setAuthor(message.author.username, message.author.avatarURL())
            .setFooter(  '[FR] Squid [RP]',` https://cdn.discordapp.com/avatars/822955483659894794/3a36e7870d95675d91715949b91203b1.png?size=4096 `)
            .setTimestamp()
         )
 
 
        },
     name: 'help'
     
     }
