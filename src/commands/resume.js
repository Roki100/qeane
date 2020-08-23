module.exports = {
    name: "resume",
    category: "music",
    async execute(client, msg) {
        client.functions.musicCheck(client, msg); let serverQueue = client.queue.get(msg.guild.id);

        if (!serverQueue.player.paused) return await msg.reply(`${msg.author.tag}: ` + msg.str.alreadyPlaying)
        await serverQueue.player.setPaused(false)
        await msg.reply(`${msg.author.tag}: ` + msg.str.success)
    }
}