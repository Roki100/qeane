
const RadioBrowser = require('radio-browser');

module.exports = {
    aliases: ["r"],
    category: "music",
    description: "Plays a radio station",
    name: "radio",
    usage: "radio <radio station name>",
    async execute(client, msg) {
        if (!client.db.get(msg.author.id) || client.db.get(msg.author.id) < Date.now()) return msg.reply("In order to use this command, you need to vote for me! https://top.gg/bot/742670668646055967/vote")
        const { channel } = msg.member.voice
        if (!channel) return await msg.reply(`You need to be connected to a voice channel to do that!`)
        await channel.fetch()
        if (client.queue.get(msg.guild.id)) {
            if (client.queue.get(msg.guild.id).voiceChannel.id !== channel.id) return await msg.reply(`You need to be in my voice channel to do that!`)
        }
        if (!msg.args[0]) return await msg.reply(`Usage: ${this.usage}`)
        const node = client.shoukaku.getNode();
        const filter = {
            limit: 1,
            by: 'name',
            searchterm: msg.args.join(" "),
        };
        let str = '';
        const stations = await RadioBrowser.getStations(filter)
        stations.forEach(item => {
            str += item.url;
        })
        //gonna make this async so it happens in order
        if (str.length === 0) return msg.reply(`No radio found!`)
        let data = await node.rest.resolve(str)
        if (!data) return await msg.reply(`No radio found!`)
        if (client.shoukaku.getPlayer(msg.guild.id)) {
            let serverQueue = client.queue.get(msg.guild.id)
            serverQueue.songs.push(data.tracks[0])
            let track = data.tracks[0]
            msg.reply("", {
                embed: {
                    color: client.functions.randomColor(),
                    title: "Radio Station added",
                    description: `Name: **${track.info.title}**\nURL: ${track.info.uri}`
                }
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
    let son;
    switch (serverQueue.loopType) {
        case 0:
            serverQueue.songs.shift()
            break;
        case 1:
            //just repeating the same track over and over again, no need to touch the queue
            break;
        case 2:
            son = serverQueue.songs[0]
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
            author: {
                icon_url: "https://cdn.discordapp.com/avatars/742670668646055967/1d3fe1524721d8ea17e12f2df2c0aa46.png?size=128",
                name: "| Now Playing"
            },
            description: `**[${track.info.title}](${track.info.uri})**`
        }
    })
    serverQueue.npmsg = m
}
