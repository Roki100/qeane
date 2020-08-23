module.exports = {
    name: "volume",
    category: "music",
    async execute(client, msg) {
        const musicStr = client.languages.get(msg.guild.language).music
        let serverQueue = client.queue.get(msg.guild.id)
        if (!serverQueue) return msg.reply(`${msg.author.tag}: ` + musicStr.queueEmpty)
        if (!msg.member.voice.channel) return msg.reply(`${msg.author.tag}: ` + musicStr.noVc)
        let vc = await msg.member.voice.channel.fetch()
        if (serverQueue.voiceChannel.id !== vc.id) return msg.reply(`${msg.author.tag}: ` + musicStr.notSameVc)
        if (!msg.args[0]) return msg.reply(`${msg.author.tag}: ` + msg.str.current
            .replace("{0}", serverQueue.volume))
        let vol = parseInt(msg.args.join(' '))
        if (!vol) return msg.reply(`${msg.author.tag}: ` + msg.str.noArgs)
        if (vol < 1 || vol > 250) return msg.reply(`${msg.author.tag}: ` + msg.str.invalid)
        await serverQueue.player.setVolume(vol)
        serverQueue.volume = vol
        await msg.reply(`${msg.author.tag}: ` + msg.str.success
            .replace("{0}", vol))
    }
}