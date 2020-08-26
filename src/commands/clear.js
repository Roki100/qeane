module.exports = {
    aliases: ["c"],
    category: "music",
    description: "Clears the queue, if there is one",
    name: "clear",
    usage: "clear",
    async execute(client, msg) {
        client.functions.musicCheck(client, msg); let serverQueue = client.queue.get(msg.guild.id);
        if (!serverQueue.songs[1]) return await msg.reply(`${msg.author.tag}: Sorry, but the queue im currently empty, so I can't clear it!`)
        serverQueue.songs = [serverQueue.songs[0]]
        await msg.reply(`${msg.author.tag}: Succesfully cleared the queue!`)
    }
} 