const Discord =require('discord.js')

module.exports = {
    
       run: message => {
        message.channel.send(new Discord.MessageEmbed()
        .setTitle('Salut voilà une explication comment bien débuter sur oméga:')
        .setDescription(`
        
        
        1) Parle avec le pnj qui te donnera ton argent et ton stuff de départ, pour ensuite choisir où tu veux spawn.
        2) Va voir le pôle emploi pour voir tout les métiers disponibles. *(explications des métier plus bas).
        3) Enjoy It ! :laughing: (Amuse toi !) :wink::thumbsup:
        
        *Métiers: Il y a plein de possibilités. Vous pouvez:
        - voir les pnj qui sont un peu partout sur la map (bûcheron, mineur, chasseur, pécheurs, éboueur, fermiers, dealers, vendeurs d'armes légales/illégales, etc...),
        - rejoindre un des 5 groupes (Mafieux, Police, Garde Forestier, DIR/Douaniers ou Samu) via un recrutement sur discord (il y a un salon de recrutement pour chaque groupe),
        - rejoindre un des 2 gangs (Crips et Bloods) via un recrutement sur discord (il y a un salon de recrutement pour chaque gang),
        - rejoindre ou créer une entreprise via un recrutement/formulaire sur discord (il y a un salon de recrutement et un salon demandes d'entreprises) ou
        - juste acheter un magasin et y vendre ce que vous voulez.`)
        .setColor('RANDOM'))
 
 
        },
     name: 'rp'
     
     }






