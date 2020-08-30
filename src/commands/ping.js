module.exports = {
    category: "info",
    description: "Shows how fast the bot interacts with discord",
    name: 'ping',
    usage: "ping",
    async execute(client, msg) {
        await msg.reply(`Pong! **${client.ws.ping}**ms!`)
    }
}
