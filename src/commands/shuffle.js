module.exports = {
    name: "shuffle",
    category: "music",
    async execute(client, msg) {
        client.functions.musicCheck(client, msg); let serverQueue = client.queue.get(msg.guild.id);

        function shuffle(a) {
            for (let i = a.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [a[i], a[j]] = [a[j], a[i]];
            }
            return a;
        }

        serverQueue.songs = [serverQueue.songs[0], ...shuffle(serverQueue.songs)]
        await msg.reply(`${msg.author.tag}: ` + msg.str.success)
    }
}