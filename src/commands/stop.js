module.exports = {
    name: "stop",
    category: "music",
    async execute(client, msg) {
        const musicStr = client.languages.get(msg.guild.language).music
        let serverQueue = client.queue.get(msg.guild.id)
        if (!serverQueue) return msg.reply(`${msg.author.tag}: ` + musicStr.queueEmpty)
        if (!msg.member.voice.channel) return msg.reply(`${msg.author.tag}: ` + musicStr.noVc)
        let vc = await msg.member.voice.channel.fetch()
        if (serverQueue.voiceChannel.id !== vc.id) return msg.reply(`${msg.author.tag}: ` + musicStr.notSameVc)
        serverQueue.songs = []
        await serverQueue.player.stopTrack()
    }
}