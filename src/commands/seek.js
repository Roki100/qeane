module.exports = {
    aliases: ["se"],
    category: "music",
    description: "Changes the position of the song (go look at the now playing message to see where you currently are)",
    name: "seek",
    usage: "seek <position (ex: 4m 15s)>",
    async execute(client, msg) {
        client.functions.musicCheck(client, msg); let serverQueue = client.queue.get(msg.guild.id);
        if (!msg.args.join(' ')) return await msg.reply(`${msg.author.tag}: Usage: ${this.usage}`)
        let seek = require("timestamp-to-ms")(msg.args.join(' '))
        if (!seek) return await msg.reply(`${msg.author.tag}: Usage: ${this.usage}`)
        await serverQueue.player.seekTo(seek)
        await msg.reply(`${msg.author.tag}: Succesfully seeked to position **${msg.args.join(' ')}**!`)
    }
}