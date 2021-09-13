const Discord =require('discord.js')

module.exports = {
    
       run: message => {
         message.channel.send(new Discord.MessageEmbed()
            .setTitle('**Voici les liens les plus importants à avoir sur Squid rp:**')
            .setDescription('[**•Clique __ici__**]() pour acceder à notre magnifique site web. \n [**•__Ici__**]() pour ouvrir notre google sheet/doc où tu trouveras pleins d\'informations. \n [**•__Ici__**]() tu trouveras notre MapBat afin d\'avoir toutes les informations sur les bâtiments du RolePlay ville.) \n •Et tu accéderas [**__Ici__**]() à notre page Top-Serveur où tu as la possibilité de voter pour notre serveur afin d\'avoir plus de visibilité ! ')
            .setColor('RANDOM')
            .setFooter(message.author.username, message.author.avatarURL())
            .setTimestamp()
         )
 
 
        },
     name: 'liens'
     
     }
