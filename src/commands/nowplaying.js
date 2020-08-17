module.exports = {
    name: "nowplaying",
    category: "music",
    async execute(client, msg) {
        let serverQueue = client.queue.get(msg.guild.id)
        if (!serverQueue) return msg.reply(`${msg.author.tag} ` + client.languages.get(msg.guild.language).music.queueEmpty)
        msg.reply(`${msg.author.tag} ` + serverQueue.linkToNpmsg)
    }
}
