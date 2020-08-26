module.exports = {
    aliases: ["rm"],
    category: "music",
    description: "Removes a song in the queue",
    name: "remove",
    usage: "remove <song number>",
    async execute(client, msg) {
        client.functions.musicCheck(client, msg); let serverQueue = client.queue.get(msg.guild.id)
        if (isNaN(msg.args[0])) return await msg.reply(`${msg.author.tag}: Usage: ${this.usage}`)
        if (msg.args[0] === 0) return await msg.reply(`${msg.author.tag}: I can not remove song 0!`)
        if (!serverQueue.songs[msg.args[0]]) return await msg.reply(`${msg.author.tag}: This song is not in the queue!`)
        const s = serverQueue.songs[msg.args[0]]
        delete serverQueue.songs[msg.args[0]]
        serverQueue.songs = serverQueue.songs.filter(c => c)
        return await msg.reply(`${msg.author.tag}: Succesfully removed **${s.info.title}** in position **${msg.args[0]}** from the queue!`)
    }
}