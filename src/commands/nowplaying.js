module.exports = {
    aliases: ["np"],
    category: "music",
    description: "Sends a link to the current Now Playing message",
    name: "nowplaying",
    usage: "nowplaying",
    async execute(client, msg) {
        let serverQueue = client.queue.get(msg.guild.id)
        if (!serverQueue) return await msg.reply(`${msg.author.tag}: Nothing is playing here!`)
        await msg.reply(`${msg.author.tag}: ` + serverQueue.linkToNpmsg)
    }
}
