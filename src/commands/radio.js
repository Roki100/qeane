
const RadioBrowser = require('radio-browser');

module.exports = {
    aliases: ["r"],
    category: "music",
    description: "Plays a radio station",
    name: "radio",
    usage: "radio <radio station name>",
    async execute(client, msg) {
        const { channel } = msg.member.voice
        if (!channel) return await msg.reply(`${msg.author.tag}: You need to be connected to a voice channel to do that!`)
        await channel.fetch()
        if (client.queue.get(msg.guild.id)) {
            if (client.queue.get(msg.guild.id).voiceChannel.id !== channel.id) return await msg.reply(`${msg.author.tag}: You need to be in my voice channel to do that!`)
        }
        if (!msg.args[0]) return await msg.reply(`${msg.author.tag}: Usage: ${this.usage}`)
        const node = client.shoukaku.getNode();
        const filter = {
            limit: 1,
            by: 'name',
            searchterm: msg.args.join(" "),
        };
        let str = '';
        const stations = await RadioBrowser.getStations(filter)
        stations.forEach(item => {
            str = item.url;
        })
        //gonna make this async so it happens in order
        if (str.length === 0) return message.channel.send(`${msg.author.tag}: ` + client.languages.get(msg.guild.language).commands.radio.notFound)
        let data = client.music.search(str)
        if (client.shoukaku.getPlayer(msg.guild.id)) {
            let serverQueue = client.queue.get(msg.guild.id)
            serverQueue.songs.push(data.tracks[0])
            let track = data.tracks[0]
            time = client.functions.duration(track.info.length)
            msg.reply(`${msg.author.tag}: ` + "", {
                embed: {
                    color: client.functions.randomColor(),
                    title: "Radie Station added",
                    description: `Name: **${track.info.title}**\nURL: ${track.info.uri}\nLength: ****${track.info.isStream ? "Stream" : time}\nAuthor: **${track.info.author}**`
                }
            }).then(msg2 => {
                msg2.delete({ timeout: 15000 })
            })
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
            serverQueue.songs.push(data.tracks[0])
            let track = data.tracks[0]
            time = client.functions.duration(track.info.length)
            await msg.reply(`${msg.author.tag}: ` + "", {
                embed: {
                    color: client.functions.randomColor(),
                    title: "Radio Station added",
                    description: `Name: **${track.info.title}**\nURL: ${track.info.uri}\nLength: ****${track.info.isStream ? "Stream" : time}\nAuthor: **${track.info.author}**`
                }
            }).then(msg2 => {
                msg2.delete({ timeout: 15000 })
            })
            client.queue.set(msg.guild.id, serverQueue)
            player.on('end', () => {
                await play(serverQueue, client, player)
            });
            player.on('closed', () => {
                await serverQueue.textChannel.send("Please do not disconnect me from a voice channel when the stop command exists...")
                player.disconnect()
                client.queue.delete(msg.guild.id)
            });
            player.on('error', (e) => {
                await serverQueue.textChannel.send(`Looks like something terrible happened: ${e}`)
                player.disconnect()
                client.queue.delete(msg.guild.id)
            });
            player.on('nodeDisconnect', () => {
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
    let time = client.functions.duration(track.info.length)
    let m = await serverQueue.textChannel.send({
        embed: {
            color: client.functions.randomColor(),
            title: "Track added",
            description: `Name: **${track.info.title}**\nURL: ${track.info.uri}\nLength: ****${track.info.isStream ? "Stream" : `${client.functions.progressBar(serverQueue.player.position, track.info.length)}\n${client.functions.duration(serverQueue.player.position)}/${time}`}\nAuthor: **${track.info.author}**`
        }
    })
    serverQueue.npmsg = m
    serverQueue.linkToNpmsg = `https://canary.discordapp.com/channels/${m.guild.id}/${m.channel.id}/${m.id}`
    //https://canary.discordapp.com/channels/264445053596991498/265156286406983680/738433000811003995
}
