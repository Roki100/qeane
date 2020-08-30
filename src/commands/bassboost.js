module.exports = {
    aliases: ["bb"],
    category: "music",
    description: "Sets the bassboost level (default: 0)",
    name: "bassboost",
    usage: "bassboost <level of bassboost between -8 and 8>",
    async execute(client, msg) {
        client.functions.musicCheck(client, msg); let serverQueue = client.queue.get(msg.guild.id); if (!serverQueue) return;
        let gain = parseInt(msg.args[0])
        if (isNaN(gain)) return await msg.react("🛑")
        if (gain < -8 || gain > 8) return await msg.react("🛑")
        serverQueue.bassboost = gain
        await serverQueue.player.setEqualizer(client.functions.getEq(serverQueue.bassboost));
        await msg.react("👍")
    }
}