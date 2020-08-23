module.exports = {
    name: "volume",
    category: "music",
    async execute(client, msg) {
        client.functions.musicCheck(client, msg); let serverQueue = client.queue.get(msg.guild.id);

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