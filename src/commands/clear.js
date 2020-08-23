module.exports = {
    name: "clear",
    category: "music",
    async execute(client, msg) {
        client.functions.musicCheck(client, msg); let serverQueue = client.queue.get(msg.guild.id);
        if (!serverQueue.songs[1]) return await msg.reply(`${msg.auther.tag}: ` + msg.str.emptyQueue)
        serverQueue.songs = [serverQueue.songs[0]]
        await msg.reply(`${msg.auther.tag}: ` + msg.str.cleared)
    } //i cleared a few pkgs
} 