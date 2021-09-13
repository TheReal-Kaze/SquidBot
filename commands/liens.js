const Discord =require('discord.js')

module.exports = {
    
       run: message => {
         message.channel.send(new Discord.MessageEmbed()
            .setTitle('**Tu peux voter pour nous toutes les 2h:**')
            .setDescription(' [**•__Clique Ici__**](https://docs.google.com/spreadsheets/d/1AQkxSR7PtgIfxtFct11arfPYfI9fjPVrLAuOIPReznY) pour ouvrir notre google sheet/doc où tu trouveras pleins d\'informations.  \n •Et  [**__Ici__**](https://top-serveurs.net/unturned/fr-squid-rp) à notre page Top-Serveur où tu as la possibilité de voter pour notre serveur afin d\'avoir plus de visibilité ! ')
            .setColor('RANDOM')
            .setFooter(message.author.username, message.author.avatarURL())
            .setTimestamp()
         )
 
 
        },
     name: 'liens'
     
     }
