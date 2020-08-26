module.exports = {
    aliases: ["c"],
    category: "music",
    description: "Clears the queue, if there is one",
    name: "clear",
    usage: "clear",
    async execute(client, msg) {
        client.functions.musicCheck(client, msg); let serverQueue = client.queue.get(msg.guild.id);
<<<<<<< HEAD
        if (!serverQueue.songs[1]) return await msg.reply(`${msg.author.tag}: Sorry, but the queue im currently empty, so I can't clear it!`)
=======
        if (!serverQueue.songs[1]) return await msg.react("🛑")
>>>>>>> 80ca20c3942c0294a3747186825f678371024c2a
        serverQueue.songs = [serverQueue.songs[0]]
        await msg.react("💮")
    }
} 