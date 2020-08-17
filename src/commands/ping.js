module.exports = {
    name: 'ping',
    category: "info",
    async execute(client, msg) {
        msg.reply(`${msg.author.tag} ` + client.languages.get(msg.guild.language).commands.ping.pong
            .replace("{0}", client.ws.ping))
    }
}
