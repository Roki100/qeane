module.exports = {
    name: "seek",
    category: "music",
    async execute(client, msg) {
        client.functions.musicCheck(client, msg); let serverQueue = client.queue.get(msg.guild.id);

        if (!msg.args.join(' ')) return await msg.reply(`${msg.author.tag}: ` + msg.str.noArgs)
        let seek = require("timestamp-to-ms")(msg.args.join(' '))
        if (!seek) return await msg.reply(`${msg.author.tag}: ` + msg.str.noArgs)
        await serverQueue.player.seekTo(seek)
        await msg.reply(`${msg.author.tag}: ` + msg.str.success)
    }
}