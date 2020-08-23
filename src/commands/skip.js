module.exports = {
    name: "skip",
    category: "music",
    async execute(client, msg) {
        client.functions.musicCheck(client, msg); let serverQueue = client.queue.get(msg.guild.id);

        if (!msg.args[0]) {
            msg.reply(`${msg.author.tag}: ` + msg.str.success1).then(m => { m.delete({ timeout: 15000 }) })
            await serverQueue.player.stopTrack()
        } else {
            let amount = parseInt(msg.args[0])
            if (!amount || amount < 1 || amount >= serverQueue.songs.length) return msg.reply(`${msg.author.tag}: ` + msg.str.invalidAmount)
            serverQueue.songs.splice(0, amount - 1)
            msg.reply(`${msg.author.tag}: ` + msg.str.success2
                .replace("{0}", amount)).then(m => { m.delete({ timeout: 15000 }) })
            await serverQueue.player.stopTrack()
        }
    }
}