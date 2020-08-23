module.exports = {
    name: 'ping',
    category: "info",
    async execute(client, msg) {
        await msg.reply(`${msg.author.tag}: ` + msg.str.pong
            .replace("{0}", client.ws.ping))
    }
}
