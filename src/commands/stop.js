module.exports = {
    aliases: ["st"],
    category: "music",
    description: "Stops playing music, destroys the queue and leaves the voice channel",
    name: "stop",
    usage: "stop",
    async execute(client, msg) {
        client.functions.musicCheck(client, msg); let serverQueue = client.queue.get(msg.guild.id);
        serverQueue.songs = []
        await msg.react("👋")
        await serverQueue.player.stopTrack()
    }
}