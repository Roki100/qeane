module.exports = {
    aliases: ["rs"],
    category: "music",
    description: "Resumes the current song",
    name: "resume",
    usage: "resume",
    async execute(client, msg) {
        client.functions.musicCheck(client, msg); let serverQueue = client.queue.get(msg.guild.id); if (!serverQueue) return;
        if (!serverQueue.player.paused) return await msg.react("🛑")
        await serverQueue.player.setPaused(false)
        await msg.react("⏯")
    }
}