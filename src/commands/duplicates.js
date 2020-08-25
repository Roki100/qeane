module.exports = {
    aliases: ["dupes"],
    category: "music",
    description: "Removes duplicate songs from the queue",
    name: "duplicates",
    usage: "duplicates",
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
        if (serverQueue.songs === [firstSong, ...newSongs]) return msg.reply(`${msg.author.tag}: There was no duplicates`)
        const dupes = serverQueue.songs.length - newSongs.length + 1
        serverQueue.songs = [firstSong, ...newSongs]
        await msg.reply(`${msg.author.tag}: Succesfully removed **${dupes} duplicate songs!`)
    }
}