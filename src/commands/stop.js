module.exports = {
    name: "stop",
    category: "music",
    async execute (client,msg) {
        let player = client.music.players.get(msg.guild.id)
        if (!player) return msg.reply("Woops, nothing is playing right now!")
        if (!msg.member.voice.channel) return msg.reply("Woops, you have to be in a voice channel!")
        let vc = await msg.member.voice.channel.fetch()
        if (player.voiceChannel.id !== vc.id) return msg.reply("Woops, you have to be in my voice channel!")
        client.music.emit("queueEnd",player)
    }
}