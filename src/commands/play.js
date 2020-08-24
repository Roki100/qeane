module.exports = {
    name: "play",
    category: "music",
    async execute(client, msg) {
        const musicStr = client.languages.get(msg.guild.language).music
        const { channel } = msg.member.voice
        if (!channel) return await msg.reply(`${msg.author.tag}: ` + musicStr.noVc)
        await channel.fetch()
        if (client.queue.get(msg.guild.id)) {
            if (client.queue.get(msg.guild.id).voiceChannel.id !== channel.id) return await msg.reply(`${msg.author.tag}: ` + musicStr.notSameVc)
        }
        if (!msg.args[0]) return await msg.reply(`${msg.author.tag}: ` + msg.str.noSong)
        const node = client.shoukaku.getNode();
        let data;
        if (require('is-a-url')(msg.args.join(' '))) {
            data = await node.rest.resolve(msg.args.join(' '))
        } else {
            data = await node.rest.resolve(msg.args.join(' '), "youtube")
        }
        if (!data) return await msg.reply(`${msg.author.tag}: ` + msg.str.noSongFound);
        if (client.shoukaku.getPlayer(msg.guild.id)) {
            let serverQueue = client.queue.get(msg.guild.id)
            switch (data.type) {
                case "PLAYLIST":
                    serverQueue.songs.push(...data.tracks)
                    msg.reply(`${msg.author.tag}: ` + "", {
                        embed: {
                            color: client.functions.randomColor(),
                            title: msg.str.playlist.added,
                            description: msg.str.playlist.desc
                                .replace("{0}", data.playlistName)
                                .replace("{1}", data.tracks.length)
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
                    msg.reply(`${msg.author.tag}: ` + "", {
                        embed: {
                            color: client.functions.randomColor(),
                            title: msg.str.track.added,
                            description: msg.str.track.desc
                                .replace("{0}", track.info.title)
                                .replace("{1}", track.info.uri)
                                .replace("{2}", track.info.ismsg.str.eam ? musicStr.livemsg.str.eam : time)
                                .replace("{3}", track.info.author)
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
                    msg.reply(`${msg.author.tag}: ` + "", {
                        embed: {
                            color: client.functions.randomColor(),
                            title: msg.str.playlist.added,
                            description: msg.str.playlist.desc
                                .replace("{0}", data.playlistName)
                                .replace("{1}", data.tracks.length)
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
                    msg.reply(`${msg.author.tag}: ` + "", {
                        embed: {
                            color: client.functions.randomColor(),
                            title: msg.str.track.added,
                            description: msg.str.track.desc
                                .replace("{0}", track.info.title)
                                .replace("{1}", track.info.uri)
                                .replace("{2}", track.info.isstream ? musicStr.livestream : time)
                                .replace("{3}", track.info.author)
                        }

                    }).then(msg2 => {
                        msg2.delete({ timeout: 15000 })
                    })
                    break;
            }
            client.queue.set(msg.guild.id, serverQueue)
            player.on('end', () => {
                play(serverQueue, client, player, msg.str, musicStr)
            });
            player.on('closed', () => {
                serverQueue.textChannel.send(msg.str.player.disconnect)
                player.disconnect()
                client.queue.delete(msg.guild.id)
            });
            player.on('error', (e) => {
                serverQueue.textChannel.send(msg.str.player.console.error
                    .replace("{0}", e))
                player.disconnect()
                client.queue.delete(msg.guild.id)
            });
            player.on('nodeDisconnect', () => {
                serverQueue.textChannel.send(msg.str.player.nodeDisconnect)
                player.disconnect()
                client.queue.delete(msg.guild.id)
            });
            await play(serverQueue, client, player, msg.str, musicStr)
        }
    }
}

async function play(serverQueue, client, player, str, musicStr) {
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
        serverQueue.textChannel.send(str.queueEmpty)
        player.disconnect()
        client.queue.delete(serverQueue.textChannel.guild.id)
        return;
    }
    let track = serverQueue.songs[0]
    await player.playTrack(track)
    await player.setEqualizer(client.functions.getEq(serverQueue.bassboost))
    let time = client.functions.duration(track.info.length)
    let m = await serverQueue.textChannel.send({
        embed: {
            color: client.functions.randomColor(),
            title: musicStr.np.title,
            description: musicStr.np.desc
                .replace("{0}", track.info.title)
                .replace("{1}", track.info.uri)
                .replace("{2}", track.info.isstream ? musicStr.livestream : `${client.functions.progressBar(serverQueue.player.position, track.info.length)}\n${client.functions.duration(serverQueue.player.position)}/${time}`)
                .replace("{3}", track.info.author),
        }

    })
    serverQueue.npmsg = m
    serverQueue.linkToNpmsg = `https://canary.discordapp.com/channels/${m.guild.id}/${m.channel.id}/${m.id}`
    //https://canary.discordapp.com/channels/264445053596991498/265156286406983680/738433000811003995
}
