module.exports = {
    name: "stop",
    category: "music",
    async execute(client, msg) {
        client.functions.musicCheck(client, msg); let serverQueue = client.queue.get(msg.guild.id);

        serverQueue.songs = []
        await serverQueue.player.stopTrack()
    }
}