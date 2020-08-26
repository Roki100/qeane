module.exports = {
    aliases: ["sk"],
    category: "music",
    description: "Skips to the next/to the Xth song in the queue",
    name: "skip",
    usage: "skip [song to skip to]",
    async execute(client, msg) {
        client.functions.musicCheck(client, msg); let serverQueue = client.queue.get(msg.guild.id);
        if (!msg.args[0]) {
<<<<<<< HEAD
            msg.reply(`${msg.author.tag}: Skipped!`).then(m => { m.delete({ timeout: 15000 }) })
=======
            await msg.react("🛑")
>>>>>>> 80ca20c3942c0294a3747186825f678371024c2a
            await serverQueue.player.stopTrack()
        } else {
            let amount = parseInt(msg.args[0])
            if (!amount || amount < 1 || amount >= serverQueue.songs.length) return await msg.react("🛑")
            serverQueue.songs.splice(0, amount - 1)
<<<<<<< HEAD
            msg.reply(`${msg.author.tag}: Skipped **${amount}** songs!`).then(m => { m.delete({ timeout: 15000 }) })
=======
            await msg.react("🛑")
>>>>>>> 80ca20c3942c0294a3747186825f678371024c2a
            await serverQueue.player.stopTrack()
        }
    }
}