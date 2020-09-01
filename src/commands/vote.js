module.exports = {
    category: "info",
    description: "Gives a link to vote for me on top.gg",
    name: 'vote',
    usage: "vote",
    async execute(_client, msg) {
        await msg.reply(`https://top.gg/bot/742670668646055967/vote`)
    }
}
