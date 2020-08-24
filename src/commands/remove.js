module.exports = {
    name: "remove",
    category: "music",
    async execute(client, msg) {
        client.functions.musicCheck(client, msg); let serverQueue = client.queue.get(msg.guild.id)
        if (isNaN(msg.args[0])) return await msg.reply(`${msg.author.tag}: ` + msg.str.noArgs)
        if (msg.args[0] === 0) return await msg.reply(`${msg.author.tag}: ` + msg.str.errorZero)
        if (!serverQueue.songs[msg.args[0]]) return await msg.reply(`${msg.author.tag}: ` + msg.str.notExist)
        delete serverQueue.songs[msg.args[0]]
        return await msg.reply(`${msg.author.tag}: ` + msg.str.success)
    }
}