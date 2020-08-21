module.exports = {
    name: "bassboost",
    category: "music",
    async execute(client, msg) {
        const str = client.languages.get(msg.guild.language).commands.bassboost
        const musicStr = client.languages.get(msg.guild.language).music
        let serverQueue = client.queue.get(msg.guild.id)
        if (!serverQueue) return msg.reply(`${msg.author.tag}: ` + musicStr.queueEmpty)
        if (!msg.member.voice.channel) return msg.reply(`${msg.author.tag}: ` + musicStr.noVc)
        let vc = await msg.member.voice.channel.fetch()
        if (serverQueue.voiceChannel.id !== vc.id) return msg.reply(`${msg.author.tag}: ` + musicStr.notSameVc)
        let gain = parseInt(msg.args[0])
        if (isNaN(gain)) return msg.reply(`${msg.author.tag}: ` + str.invalidNumber)
        if (gain < -8 || gain > 8) return msg.reply(`${msg.author.tag}: ` + str.invalidNumber);
        serverQueue.bassboost = gain
        await serverQueue.player.setEqualizer(client.functions.getEq(serverQueue.bassboost));
        await msg.reply(`${msg.author.tag}: ` + str.success)
    }
}