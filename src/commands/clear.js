module.exports = {
        aliases: ["c"],
        category: "music",
        description: "Clears the queue, if there is one",
        name: "clear",
        usage: "clear",
        async execute(client, msg) {
                client.functions.musicCheck(client, msg); let serverQueue = client.queue.get(msg.guild.id); if (!serverQueue) return;
                if (!serverQueue.songs[1]) return await msg.react("🛑")
                serverQueue.songs = [serverQueue.songs[0]]
                await msg.react("💮")
        }
} 