module.exports = {
    aliases: ["p"],
    category: "music",
    description: "Plays a song from YouTube",
    name: "play",
    usage: "play <song url/name/playlist url>",
    async execute(client, msg) {
        const { channel } = msg.member.voice
        if (!channel) return await msg.reply(`${msg.author.tag}: You need to be connected to a voice channel to do that!`)
        await channel.fetch()
        if (client.queue.get(msg.guild.id)) {
            if (client.queue.get(msg.guild.id).voiceChannel.id !== channel.id) return await msg.reply(`${msg.author.tag}: You need to be in my voice channel to do that!`)
        }
        if (!msg.args[0]) return await msg.reply(`${msg.author.tag}: Usage: ${this.usage}`)
        const node = client.shoukaku.getNode();
        let data;
        if (require('is-a-url')(msg.args.join(' '))) {
            data = await node.rest.resolve(msg.args.join(' '))
        } else {
            data = await node.rest.resolve(msg.args.join(' '), "youtube")
        }
        if (!data) return await msg.reply(`${msg.author.tag}: It seems that I can not find that song, sorry :(`);
        if (client.shoukaku.getPlayer(msg.guild.id)) {
            let serverQueue = client.queue.get(msg.guild.id)
            switch (data.type) {
                case "PLAYLIST":
                    serverQueue.songs.push(...data.tracks)
                    await msg.reply(`${msg.author.tag}: `, {
                        embed: {
                            color: client.functions.randomColor(),
                            title: "Playlist added",
                            description: `Name: **${data.playlistName}**\nSongs: **${data.tracks.length}**`
                        }
                    }).then(msg2 => {
                        msg2.delete({ timeout: 15000 })
                    })
                    break;
                case "SEARCH":
                case "TRACK":
                    serverQueue.songs.push(data.tracks[0])
                    let track = data.tracks[0]
                    time = client.functions.duration(track.info.length)
                    await msg.reply(`${msg.author.tag}: `, {
                        embed: {
                            color: client.functions.randomColor(),
                            title: "Track added",
<<<<<<< HEAD
                            description: `Name: **${track.info.title}**\nURL: ${track.info.uri}\nLength: **${track.info.isStream ? "Stream" : time}**\nAuthor: **${track.info.author}**`
=======
                            description: `Name: **${track.info.title}**\nURL: ${track.info.uri}`
>>>>>>> 80ca20c3942c0294a3747186825f678371024c2a
                        }
                    }).then(msg2 => {
                        msg2.delete({ timeout: 15000 })
                    })
                    break;
            }
        } else {
            const player = await node.joinVoiceChannel({
                guildID: msg.guild.id,
                voiceChannelID: msg.member.voice.channelID
            });
            let serverQueue = {
                songs: ["song"],
                loopType: 0, //0 none, 1 track, 2 queue
                volume: 100,
                textChannel: msg.channel,
                voiceChannel: channel,
                npmsg: null,
                player: player,
                bassboost: 0,
                npmsginterval: null
            }
            switch (data.type) {
                case "PLAYLIST":
                    serverQueue.songs.push(...data.tracks)
                    await msg.reply(`${msg.author.tag}: `, {
                        embed: {
                            color: client.functions.randomColor(),
                            title: "Playlist added",
                            description: `Name: **${data.playlistName}**\nSongs: **${data.tracks.length}**`
                        }
                    }).then(msg2 => {
                        msg2.delete({ timeout: 15000 })
                    })
                    break;
                case "SEARCH":
                case "TRACK":
                    serverQueue.songs.push(data.tracks[0])
                    let track = data.tracks[0]
                    time = client.functions.duration(track.info.length)
                    await msg.reply(`${msg.author.tag}: `, {
                        embed: {
                            color: client.functions.randomColor(),
                            title: "Track added",
                            description: `Name: **${track.info.title}**\nURL: ${track.info.uri}\nLength: **${track.info.isStream ? "Stream" : time}**\nAuthor: **${track.info.author}**`
                        }
                    }).then(msg2 => {
                        msg2.delete({ timeout: 15000 })
                    })
                    break;
            }
            client.queue.set(msg.guild.id, serverQueue)
            player.on('end', async () => {
                await play(serverQueue, client, player)
            });
            player.on('closed', async () => {
                await serverQueue.textChannel.send("Please do not disconnect me from a voice channel when the stop command exists...")
                player.disconnect()
                client.queue.delete(msg.guild.id)
            });
            player.on('error', async (e) => {
                await serverQueue.textChannel.send(`Looks like something terrible happened: ${e}`)
                player.disconnect()
                client.queue.delete(msg.guild.id)
            });
            player.on('nodeDisconnect', async () => {
                await serverQueue.textChannel.send(`Looks like something terrible happened: The node disconnected. Please contact my owner about this!`)
                player.disconnect()
                client.queue.delete(msg.guild.id)
            });
            await play(serverQueue, client, player)
        }
    }
}

async function play(serverQueue, client, player) {
    switch (serverQueue.loopType) {
        case 0:
            serverQueue.songs.shift()
            break;
        case 1:
            //just repeating the same track over and over again, no need to touch the queue
            break;
        case 2:
            let son = serverQueue.songs[0]
            serverQueue.songs.shift()
            serverQueue.songs = [...serverQueue.songs, son]
            break;
    }
    if (serverQueue.npmsg) {
        serverQueue.npmsg.delete()
    }
    await serverQueue.voiceChannel.fetch()
    if (!serverQueue.songs[0]) {
        serverQueue.textChannel.send("Looks like the queue is empty. Leaving the voice channel...")
        player.disconnect()
        client.queue.delete(serverQueue.textChannel.guild.id)
        return;
    }
    let track = serverQueue.songs[0]
    await player.playTrack(track)
    await player.setEqualizer(client.functions.getEq(serverQueue.bassboost))
    let m = await serverQueue.textChannel.send({
        embed: {
            color: client.functions.randomColor(),
<<<<<<< HEAD
            title: "Track added",
            description: `Name: **${track.info.title}**\nURL: ${track.info.uri}\nLength: **${track.info.isStream ? "Stream" : `${client.functions.progressBar(serverQueue.player.position, track.info.length)}**\n${client.functions.duration(serverQueue.player.position)}/${time}`}\nAuthor: **${track.info.author}**`
=======
            title: "Now Playing",
            description: `**[${track.info.title}](${track.info.uri})**`
>>>>>>> 80ca20c3942c0294a3747186825f678371024c2a
        }
    })
    serverQueue.npmsg = m
    serverQueue.linkToNpmsg = `https://canary.discordapp.com/channels/${m.guild.id}/${m.channel.id}/${m.id}`
    //https://canary.discordapp.com/channels/264445053596991498/265156286406983680/738433000811003995
}
