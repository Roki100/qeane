module.exports = (client) => {
    setInterval(() => {
        if (client.queue.size > 0) {
            client.queue.forEach(q => {
                if (!q.songs[0].info.isStream && q.npmsg) {
                    let track = q.songs[0]
                    let musicStr = client.languages.get(q.textChannel.guild.language).music
                    let time = client.functions.duration(track.info.length)
                    q.npmsg.edit({
                        embed: {
                            color: q.npmsg.embeds[0].color,
                            title: musicStr.np.title,
                            description: musicStr.np.desc
                                .replace("{0}", track.info.title)
                                .replace("{1}", track.info.uri)
                                .replace("{2}", `${client.functions.progressBar(q.player.position, track.info.length)}\n${client.functions.duration(q.player.position)}/${time}`)
                                .replace("{3}", track.info.author)
                        }
                    })
                }
            })
        }
    }, 5000)
}