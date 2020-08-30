module.exports = {
    category: "info",
    description: "Gives a link to my support server",
    name: 'support',
    usage: "support",
    async execute(_client, msg) {
        msg.reply(`https://discord.gg/nXg4Yh7`)
    }
}
