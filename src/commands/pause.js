module.exports = {
    aliases: ["pa"],
    category: "music",
    description: "Pauses the current song",
    name: "pause",
    usage: "pause",
    async execute(client, msg) {
        client.functions.musicCheck(client, msg); let serverQueue = client.queue.get(msg.guild.id);
        if (serverQueue.player.paused) return await msg.reply(`${msg.author.tag}: Looks like the current song is already paused!`)
        await serverQueue.player.setPaused(true)
        await msg.reply(`${msg.author.tag}: Succesfully paused the current song!`)
    }
}