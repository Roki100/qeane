module.exports = {
    name: "duplicates",
    category: "music",
    async execute(client, msg) {
        client.functions.musicCheck(client, msg); let serverQueue = client.queue.get(msg.guild.id);
        let newSongs = [];
        const firstSong = serverQueue.songs[0]
        serverQueue.songs = serverQueue.songs.shift()
        for (const song of serverQueue.songs) {
            if (newSongs.includes(song)) {
                continue;
            }
            else {
                newSongs.push(song)
            }
        }
        serverQueue.songs = [firstSong, ...newSongs]
        await msg.reply(`${msg.author.tag}: ` + msg.str.success)
    }
}