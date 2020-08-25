module.exports = {
    aliases: ["gh"],
    category: "info",
    description: "Gives the link to my github repo",
    name: 'github',
    usage: "github",
    async execute(_client, msg) {
        await msg.reply(`${msg.author.tag}: https://github.com/lumap/qeane`)
    }
}
