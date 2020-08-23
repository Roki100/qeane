module.exports = {
    name: "bassboost",
    category: "music",
    async execute(client, msg) {
        client.functions.musicCheck(client, msg); let serverQueue = client.queue.get(msg.guild.id);

        let gain = parseInt(msg.args[0])
        if (isNaN(gain)) return msg.reply(`${msg.author.tag}: ` + msg.str.invalidNumber)
        if (gain < -8 || gain > 8) return msg.reply(`${msg.author.tag}: ` + msg.str.invalidNumber);
        serverQueue.bassboost = gain
        await serverQueue.player.setEqualizer(client.functions.getEq(serverQueue.bassboost));
        await msg.reply(`${msg.author.tag}: ` + msg.str.success)
    }
}