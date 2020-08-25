module.exports = {
    aliases: ["q"],
    category: "music",
    description: "Shows the queue",
    name: "queue",
    usage: "queue",
    async execute(client, msg) {
        let serverQueue = client.queue.get(msg.guild.id)
        if (!serverQueue) return await msg.reply(`${msg.author.tag}: Nothing is playing right now!`);
        const output = []
        for (let i = 1; i < Math.min(serverQueue.songs.length, 11); i++) {
            output[i] = [
                `${i}- [${serverQueue.songs[i].info.title}](${serverQueue.songs[i].info.uri})\n`
            ]
        }
        if (!output[1]) output[1] = "Queue is empty!"

        let queueemb = {
            embed: {
                description: `Current: \n[${serverQueue.songs[0].info.title}](${serverQueue.songs[0].info.uri}) ([Link to Now Playing message](${serverQueue.linkToNpmsg}))\n\nIncoming:\n${output.join('\n')}`
            }
        }
        if (serverQueue.songs.length > 11) {
            queueemb.embed.footer.text = `${serverQueue.songs.length - 11} more songs...`
        }

        await msg.reply(`${msg.author.tag}: `, queueemb)
    }
}