module.exports = {
    aliases: ["rs"],
    category: "music",
    description: "Resumes the current song",
    name: "resume",
    usage: "resume",
    async execute(client, msg) {
        client.functions.musicCheck(client, msg); let serverQueue = client.queue.get(msg.guild.id);
        if (!serverQueue.player.paused) return await msg.reply(`${msg.author.tag}: It seems like the current song is not paused!`)
        await serverQueue.player.setPaused(false)
        await msg.reply(`${msg.author.tag}: Succesfully resumed the current song!`)
    }
}