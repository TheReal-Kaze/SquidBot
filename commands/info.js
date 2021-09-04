const Discord =require('discord.js')

module.exports = {
    
       run: message => {
        message.channel.send(new Discord.MessageEmbed()
        
        .setDescription(`**__[FR] Oméga City [RP]; [MAINTENANCE]__**

        IP du serveur: **__51.255.220.26__**
        Port du serveur: **__27015__**
        
        
        **__[FR] Oméga WW2 [RP]; [ON]__**

        IP du serveur: **__178.32.107.69__**
        Port du serveur: **__27015__**
        
        
        **__[FR] Oméga Survie [Semi-RP]; [ON]__**

        IP du serveur: **__135.125.113.65__**
        Port du serveur: **__27015__** `)
        
        .setColor('RANDOM'))

        
         
 
        },
     name: 'info'
     
     }

