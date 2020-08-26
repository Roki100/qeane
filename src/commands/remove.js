module.exports = {
    aliases: ["rm"],
    category: "music",
    description: "Removes a song in the queue",
    name: "remove",
    usage: "remove <song number>",
    async execute(client, msg) {
        client.functions.musicCheck(client, msg); let serverQueue = client.queue.get(msg.guild.id)
        if (isNaN(msg.args[0])) return await msg.react("🛑")
        if (msg.args[0] === 0) return await msg.react("🛑")
        if (!serverQueue.songs[msg.args[0]]) return await msg.react("🛑")
        const s = serverQueue.songs[msg.args[0]]
        delete serverQueue.songs[msg.args[0]]
<<<<<<< HEAD
        serverQueue.songs = serverQueue.songs.filter(c => c)
        return await msg.reply(`${msg.author.tag}: Succesfully removed **${s.info.title}** in position **${msg.args[0]}** from the queue!`)
=======
        return await msg.react("💮")
>>>>>>> 80ca20c3942c0294a3747186825f678371024c2a
    }
}