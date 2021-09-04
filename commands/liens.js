const Discord =require('discord.js')

module.exports = {
    
       run: message => {
         message.channel.send(new Discord.MessageEmbed()
            .setTitle('**Voici les liens les plus importants à avoir sur Oméga City:**')
            .setDescription('[**•Clique __ici__**](https://omegacity.fr/) pour acceder à notre magnifique site web. \n [**•__Ici__**](https://docs.google.com/spreadsheets/d/1To8Meqgiz_AnGtHTCu6ikXNnB-T_FlN1fM107AJ5dFg/edit?usp=sharing) pour ouvrir notre google sheet/doc où tu trouveras pleins d\'informations. \n [**•__Ici__**](https://map.omegacity.fr/) tu trouveras notre MapBat afin d\'avoir toutes les informations sur les bâtiments du RolePlay ville.) \n •Et tu accéderas [**__Ici__**](https://top-serveurs.net/unturned/fr-omega-city-rp) à notre page Top-Serveur où tu as la possibilité de voter pour notre serveur afin d\'avoir plus de visibilité ! ')
            .setColor('RANDOM')
            .setFooter(message.author.username, message.author.avatarURL())
            .setTimestamp()
         )
 
 
        },
     name: 'liens'
     
     }
