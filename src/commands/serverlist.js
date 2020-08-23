module.exports = {
    name: 'serverlist',
    ownerOnly: true,
    category: "owner",
    async execute(client, msg) {
        let string = '';
        client.guilds.cache.forEach(guild => {
            string += `${guild.name} (${guild.id})\n`;
        })
        await msg.author.send(string)
        await msg.reply(`${msg.author.tag}: ` + msg.str.sent);
    },
} 
