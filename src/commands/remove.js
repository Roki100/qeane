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
                delete serverQueue.songs[msg.args[0]]
                serverQueue = serverQueue.filter(s => s)
                return await msg.react("💮")
        }
}