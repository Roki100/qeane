module.exports = {
    name: "skip",
    category: "music",
    async execute(client, msg) {
        const str = client.languages.get(msg.guild.language).commands.skip
        const musicStr = client.languages.get(msg.guild.language).music
        let serverQueue = client.queue.get(msg.guild.id)
        if (!serverQueue) return msg.reply(`${msg.author.tag}: ` + musicStr.queueEmpty)
        if (!msg.member.voice.channel) return msg.reply(`${msg.author.tag}: ` + musicStr.noVc)
        let vc = await msg.member.voice.channel.fetch()
        if (serverQueue.voiceChannel.id !== vc.id) return msg.reply(`${msg.author.tag}: ` + musicStr.notSameVc)
        if (!msg.args[0]) {
            msg.reply(`${msg.author.tag}: ` + str.success1).then(m => {
                m.delete({timeout: 15000})
            })
            serverQueue.player.stopTrack()
        } else {
            let amount = parseInt(msg.args[0])
            if (!amount || amount < 1 || amount >= serverQueue.songs.length) return msg.reply(`${msg.author.tag}: ` + str.invalidAmount)
            serverQueue.songs.splice(0, amount - 1)
            msg.reply(`${msg.author.tag}: ` + str.success2
                .replace("{0}", amount)).then(m => {
                m.delete({timeout: 15000})
            })
            serverQueue.player.stopTrack()
        }
    }
}