module.exports = {
    aliases: ["pa"],
    category: "music",
    description: "Pauses the current song",
    name: "pause",
    usage: "pause",
    async execute(client, msg) {
        client.functions.musicCheck(client, msg); let serverQueue = client.queue.get(msg.guild.id); if (!serverQueue) return;
        if (serverQueue.player.paused) return await msg.react("🛑")
        await serverQueue.player.setPaused(true)
        await msg.react("⏯")
    }
}