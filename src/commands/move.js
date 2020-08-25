module.exports = {
    aliases: ["mv"],
    category: "music",
    description: "Moves a song from a position to another",
    name: "move",
    usage: "move <position of the song> <new position>",
    async execute(client, msg) {
        client.functions.musicCheck(client, msg); let serverQueue = client.queue.get(msg.guild.id);
        if (!msg.args[1]) return await msg.reply(`${msg.author.tag}: Usage: ${this.usage}`)
        if (isNaN(msg.args[0]) || isNaN(msg.args[1])) return await msg.reply(`${msg.author.tag}: Usage: ${this.usage}`)
        if (msg.args[0] === 0 || msg.args[1] === 0) return await msg.reply(`${msg.author.tag}: You can not move the song number 0!`)
        let o = serverQueue.songs[msg.args[0]]
        delete serverQueue.songs[msg.args[0]]
        serverQueue.songs.splice(msg.args[1], 0, o)
        await msg.reply(`${msg.author.tag}: Succesfully moved song **${o.info.name}** to position **${msg.args[1]}**!`)
    }
} 