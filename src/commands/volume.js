module.exports = {
    aliases: ["v", "vol"],
    category: "music",
    description: "Chages the volume",
    name: "volume",
    usage: "volume [number between 1 and 250]",
    async execute(client, msg) {
        client.functions.musicCheck(client, msg); let serverQueue = client.queue.get(msg.guild.id);
        if (!msg.args[0]) return await msg.send(`Current volume: **${serverQueue.volume}**`)
        let vol = parseInt(msg.args.join(' '))
        if (!vol) return await msg.react("🛑")
        if (vol < 1 || vol > 250) return await msg.react("🛑")
        await serverQueue.player.setVolume(vol)
        serverQueue.volume = vol
        await msg.react("👍")
    }
}