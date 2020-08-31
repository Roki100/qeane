module.exports = {
    aliases: ["pa"],
    category: "music",
    description: "Pauses the current song",
    name: "pause",
    usage: "pause",
    async execute(client, msg) {
        client.functions.musicCheck(client, msg); let serverQueue = client.queue.get(msg.guild.id); if (!serverQueue) return;
        await msg.reply(client.functions.position(serverQueue.player.position))
    }
}