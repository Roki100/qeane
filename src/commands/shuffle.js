module.exports = {
    aliases: ["sh"],
    category: "music",
    description: "Shuffles the queue",
    name: "shuffle",
    usage: "shuffle",
    async execute(client, msg) {
        client.functions.musicCheck(client, msg); let serverQueue = client.queue.get(msg.guild.id); if (!serverQueue) return;
        if (!serverQueue.songs[3]) return await msg.react("🛑")
        function shuffle(a) {
            for (let i = a.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [a[i], a[j]] = [a[j], a[i]];
            }
            return a;
        }

        serverQueue.songs = [serverQueue.songs[0], ...shuffle(serverQueue.songs)]
        await msg.react("🔀")
    }
}