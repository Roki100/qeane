module.exports = {
    name: "move",
    category: "music",
    async execute(client, msg) {
        client.functions.musicCheck(client, msg); let serverQueue = client.queue.get(msg.guild.id);
        if (!msg.args[1]) return await msg.reply(`${msg.author.tag}: ` + msg.str.noArgs)
        if (isNaN(msg.args[0]) || isNaN(msg.args[1])) return await msg.reply(`${msg.author.tag}: ` + msg.str.noArgs)
        if (msg.args[0] === 0 || msg.args[1] === 0) return await msgreply(`${msg.author.tag}: ` + msg.str.errorZero)
        let s1 = serverQueue.songs[msg.args[0]], s2 = serverQueue.songs[msg.args[1]]
        serverQueue.songs[msg.args[1]] = s1
        serverQueue.songs[msg.args[0]] = s2
        await msg.reply(`${msg.author.tag}: ` + msg.str.success)
    }
} 