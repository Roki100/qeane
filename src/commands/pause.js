module.exports = {
    name: "pause",
    category: "music",
    async execute(client, msg) {
        const musicStr = client.languages.get(msg.guild.language).music
        let serverQueue = client.queue.get(msg.guild.id)
        if (!serverQueue) return await msg.reply(`${msg.author.tag}: ` + musicStr.queueEmpty)
        if (!msg.member.voice.channel) return await msg.reply(`${msg.author.tag}: ` + musicStr.noVc)
        let vc = await msg.member.voice.channel.fetch()
        if (serverQueue.voiceChannel.id !== vc.id) return await msg.reply(`${msg.author.tag}: ` + musicStr.notSameVc)
        if (serverQueue.player.paused) return await msg.reply(`${msg.author.tag}: ` + msg.str.alreadyPaused)
        await serverQueue.player.setPaused(true)
        await msg.reply(`${msg.author.tag}: ` + msg.str.success)
    }
}