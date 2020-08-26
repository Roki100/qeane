module.exports = {
    aliases: ["se"],
    category: "music",
    description: "Changes the position of the song (go look at the now playing message to see where you currently are)",
    name: "seek",
    usage: "seek <position (ex: 4m 15s)>",
    async execute(client, msg) {
        client.functions.musicCheck(client, msg); let serverQueue = client.queue.get(msg.guild.id);
        if (!msg.args.join(' ')) return await msg.react("🛑")
        let seek = require("timestamp-to-ms")(msg.args.join(' '))
        if (!seek) return await msg.react("🛑")
        if (seek > serverQueue.player.position) { await msg.react("⏩") } else { await msg.react("⏪") }
        await serverQueue.player.seekTo(seek)
    }
}