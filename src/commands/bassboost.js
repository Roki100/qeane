module.exports = {
    aliases: ["bb"],
    category: "music",
    description: "Sets the bassboost level (default: 0)",
    name: "bassboost",
    usage: "bassboost <level of bassboost between -8 and 8>",
    async execute(client, msg) {
        client.functions.musicCheck(client, msg); let serverQueue = client.queue.get(msg.guild.id);
        let gain = parseInt(msg.args[0])
        if (isNaN(gain)) return await msg.reply(`${msg.author.tag}: Usage: ${this.usage}`)
        if (gain < -8 || gain > 8) return await msg.reply(`${msg.author.tag}: Usage: ${this.usage}`);
        serverQueue.bassboost = gain
        await serverQueue.player.setEqualizer(client.functions.getEq(serverQueue.bassboost));
        await msg.reply(`${msg.author.tag}: BassBoost level successfully set to **${gain}**! Please wait a few seconds for the effect to apply`)
    }
}