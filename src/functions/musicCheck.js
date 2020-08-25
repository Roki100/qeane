module.exports = (client, msg) => {
    let serverQueue = client.queue.get(msg.guild.id)
    if (!serverQueue) return msg.reply(`${msg.author.tag}: Nothing is playing right now!`)
    if (!msg.member.voice.channel) return msg.reply(`${msg.author.tag}: You need to be connected to a voice channel to do that!`)
    let vc = await msg.member.voice.channel.fetch()
    if (serverQueue.voiceChannel.id !== vc.id) return msg.reply(`${msg.author.tag}: You need to be in my voice channel to do that!`)
}