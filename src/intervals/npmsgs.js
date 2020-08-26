module.exports = (client) => {
    setInterval(() => {
        if (client.queue.size > 0) {
            client.queue.forEach(q => {
                if (!q.songs[0].info.isStream && q.npmsg) {
                    let track = q.songs[0]
                    let time = client.functions.duration(track.info.length)
                    q.npmsg.edit({
                        embed: {
                            color: q.npmsg.embeds[0].color,
                            title: "Now Playing",
                            description: `Name: **${track.info.title}**\nURL: ${track.info.uri}\nTime: **${client.functions.progressBar(q.player.position, track.info.length)}\n${client.functions.duration(q.player.position)}/${time}**\nAuthor: **${track.info.author}**`
                        }
                    }) //
                }
            })
        }
    }, 5000)
}