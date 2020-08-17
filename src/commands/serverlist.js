module.exports = {
    name: 'serverlist',
    ownerOnly: true,
    category: "owner",
    async execute(client, msg) {
        let string = '';
        client.guilds.cache.forEach(guild => {
            string += `${guild.name} (${guild.id})\n`;
        })


        msg.author.send(string)
        msg.reply(`${msg.author.tag}: ` + client.languages.get(msg.guild.language).commands.serverlist.sent);
    },
} 
