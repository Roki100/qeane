module.exports = {
    aliases: ["q"],
    category: "music",
    description: "Shows the queue",
    name: "queue",
    usage: "queue",
    async execute(client, msg) {
        let serverQueue = client.queue.get(msg.guild.id)
        if (!serverQueue) return await msg.react("🛑")
        const output = []
        for (let i = 1; i < Math.min(serverQueue.songs.length, 11); i++) {
            output[i] = [
                `${i}- [${serverQueue.songs[i].info.title}](${serverQueue.songs[i].info.uri})\n`
            ]
        }
        if (!output[1]) output[1] = "Queue is empty!"

        let queueemb = {
            embed: {
                description: `**__Current:__** \n[${serverQueue.songs[0].info.title}](${serverQueue.songs[0].info.uri})\n\n**__Incoming:__**\n${output.join('')}`,
                footer: {}
            }
        }
        if (serverQueue.songs.length > 11) {
            queueemb.embed.footer.text = `${serverQueue.songs.length - 11} more songs...`
        }

        await msg.reply(queueemb)
    }
}