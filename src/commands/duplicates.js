module.exports = {
    name: "duplicates",
    category: "music",
    async execute(client, msg) {
        client.functions.musicCheck(client, msg); let serverQueue = client.queue.get(msg.guild.id);
        let newSongs = [];
        const firstSong = serverQueue.songs.shift()
        for (const song of serverQueue.songs) {
            if (newSongs.includes(song)) continue;
            else newSongs.push(song)
        }
        serverQueue.songs = [firstSong, ...newSongs]
        await msg.reply("") //add language thing here ig
    }
}