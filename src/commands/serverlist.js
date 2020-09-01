module.exports = {
    category: "owner",
    description: "Sends the list of the servers Qeane is in",
    name: 'serverlist',
    ownerOnly: true,
    usage: "serverlist",
    async execute(client, msg) {
        let string = '';
        client.guilds.cache.forEach(guild => {
            string += `${guild.name} (${guild.id})\n`;
        })
        await msg.author.send(string)
        await msg.send(`Server list sent in DM!`);
    },
} 
