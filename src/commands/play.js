module.exports = {
    aliases: ["p"],
    category: "music",
    description: "Plays a song from YouTube",
    name: "play",
    usage: "play <song url/name/playlist url>",
    async execute(client, msg) {
        const { channel } = msg.member.voice
        if (!channel) return await msg.reply(`You need to be connected to a voice channel to do that!`)
        await channel.fetch()
        if (client.queue.get(msg.guild.id)) {
            if (client.queue.get(msg.guild.id).voiceChannel.id !== channel.id) return await msg.reply(`You need to be in my voice channel to do that!`)
        }
        if (!msg.args[0]) return await msg.reply(`Usage: ${this.usage}`)
        const node = client.shoukaku.getNode();
        let data;
        if (require('is-a-url')(msg.args.join(' '))) {
            data = await node.rest.resolve(msg.args.join(' '))
        } else {
            data = await node.rest.resolve(msg.args.join(' '), "youtube")
        }
        if (!data) return await msg.reply(`It seems that I can not find that song, sorry :(`);
        if (client.shoukaku.getPlayer(msg.guild.id)) {
            let serverQueue = client.queue.get(msg.guild.id)
            switch (data.type) {
                case "PLAYLIST":
                    serverQueue.songs.push(...data.tracks)
                    await msg.reply(``, {
                        embed: {
                            color: client.functions.randomColor(),
                            title: "Playlist added",
                            description: `Name: **${data.playlistName}**\nSongs: **${data.tracks.length}**`
                        }
                    })
                    break;
                case "SEARCH":
                case "TRACK":
                    serverQueue.songs.push(data.tracks[0])
                    let track = data.tracks[0]
                    time = client.functions.duration(track.info.length)
                    await msg.reply(``, {
                        embed: {
                            color: client.functions.randomColor(),
                            title: "Track added",
                            description: `Name: **${track.info.title}**\nURL: ${track.info.uri}`
                        }
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
                case "SEARCH":
                case "TRACK":
                    serverQueue.songs.push(data.tracks[0])
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
            author: {
                icon_url: "https://cdn.discordapp.com/avatars/742670668646055967/1d3fe1524721d8ea17e12f2df2c0aa46.png?size=128",
                name: "Now Playing"
            },
            description: `**[${track.info.title}](${track.info.uri})**`
        }
    })
    serverQueue.npmsg = m
    serverQueue.linkToNpmsg = `https://canary.discordapp.com/channels/${m.guild.id}/${m.channel.id}/${m.id}`
    //https://canary.discordapp.com/channels/264445053596991498/265156286406983680/738433000811003995
}
