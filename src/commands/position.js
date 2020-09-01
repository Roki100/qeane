module.exports = {
    aliases: ["pos"],
    category: "music",
    description: "Shows the current position",
    name: "position",
    usage: "position",
    async execute(client, msg) {
        client.functions.musicCheck(client, msg); let serverQueue = client.queue.get(msg.guild.id); if (!serverQueue) return;
        await msg.reply(client.functions.position(serverQueue.player.position))
    }
}