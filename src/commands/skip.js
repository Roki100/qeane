module.exports = {
    aliases: ["sk"],
    category: "music",
    description: "Skips to the next/to the Xth song in the queue",
    name: "skip",
    usage: "skip [song to skip to]",
    async execute(client, msg) {
        client.functions.musicCheck(client, msg); let serverQueue = client.queue.get(msg.guild.id); if (!serverQueue) return;
        if (!msg.args[0]) {
            await msg.react("⏩")
            await serverQueue.player.stopTrack()
        } else {
            let amount = parseInt(msg.args[0])
            if (!amount || amount < 1 || amount >= serverQueue.songs.length) return await msg.react("🛑")
            serverQueue.songs.splice(0, amount - 1)
            await msg.react("⏩")
            await serverQueue.player.stopTrack()
        }
    }
}