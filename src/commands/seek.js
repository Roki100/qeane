module.exports = {
    name: "seek",
    category: "music",
    async execute(client, msg) {
        const str = client.languages.get(msg.guild.language).commands.bassboost
        const musicStr = client.languages.get(msg.guild.language).music
        let serverQueue = client.queue.get(msg.guild.id)
        if (!serverQueue) return msg.reply(`${msg.author.tag} ` + musicStr.queueEmpty)
        if (!msg.member.voice.channel) return msg.reply(`${msg.author.tag} ` + musicStr.noVc)
        let vc = await msg.member.voice.channel.fetch()
        if (serverQueue.voiceChannel.id !== vc.id) return msg.reply(`${msg.author.tag} ` + musicStr.notSameVc)
        if (!msg.args.join(' ')) return msg.reply(`${msg.author.tag} ` + str.noArgs)
        let seek = require("timestamp-to-ms")(msg.args.join(' '))
        serverQueue.player.seekTo(seek)
        msg.reply(`${msg.author.tag} ` + str.success)
    }
}