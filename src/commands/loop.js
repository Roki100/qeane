module.exports = {
    name: "loop",
    category: "music",
    async execute(client, msg) {
        client.functions.musicCheck(client, msg); let serverQueue = client.queue.get(msg.guild.id);
        if (!msg.args[0]) return await msg.reply(`${msg.author.tag}: ` + msg.str.noArgs)
        let type = msg.args[0].toLowerCase()
        let types = [
            msg.str.types.queue,
            msg.str.types.track,
            msg.str.types.disable
        ];
        if (!types.includes(type)) return await msg.reply(`${msg.author.tag}: ` + msg.str.usage)
        switch (msg.args[0]) {
            case msg.str.types.queue:
                serverQueue.loopType = 2
                await msg.reply(`${msg.author.tag}: ` + msg.str.queue)
                return;
            case msg.str.types.track:
                serverQueue.loopType = 1
                await msg.reply(`${msg.author.tag}: ` + msg.str.track)
                return;
            case msg.str.types.disable:
                serverQueue.loopType = 0
                await msg.reply(`${msg.author.tag}: ` + msg.str.disabled)
                return;
        }
    }
}
