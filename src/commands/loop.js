module.exports = {
    name: "loop",
    category: "music",
    async execute(client, msg) {
        let str = client.languages.get(msg.guild.language).commands.loop
        let musicStr = client.languages.get(msg.guild.language).music
        let serverQueue = client.queue.get(msg.guild.id)
        if (!serverQueue) return msg.reply(`${msg.author.tag}: ` + musicStr.queueEmpty)
        if (!msg.member.voice.channel) return msg.reply(`${msg.author.tag}: ` + musicStr.noVc)
        let vc = await msg.member.voice.channel.fetch()
        if (serverQueue.voiceChannel.id !== vc.id) return msg.reply(`${msg.author.tag}: ` + musicStr.notSameVc)
        let type = msg.args[0]
        let types = [str.queue, str.types.track, str.disable]
        if (!types.includes(type.toLowerCase())) return msg.reply(`${msg.author.tag}: ` + str.usage)
        switch (msg.args[0]) {
            case str.types.queue:
                serverQueue.loopType = 2
                msg.reply(`${msg.author.tag}: ` + "The queue will now loop!")
                return;
            case str.types.track:
                serverQueue.loopType = 1
                msg.reply(`${msg.author.tag}: ` + "The current track will now repeat!")
                return;
            case str.types.disable:
                serverQueue.loopType = 0
                msg.reply(`${msg.author.tag}: ` + "Loop disabled!")
                return;
        }
    }
}
