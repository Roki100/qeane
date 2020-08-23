//dont touch this
function swap(json) {
    var ret = {};
    for (var key in json) {
        ret[json[key]] = key;
    }
    return ret;
}

let obj = {
    name: "english",
    commands: {
        //do NOT touch string/command names, just translate the text after the :s
        dual: {
            artist: "Artist",
            song: "Song",
            presenter: "Presenter",
            listenerpeak: "Listener Peak",
            listeners: "Listeners"
        },
        bassboost: {
            invalidNumber: "Please provide a valid number between -8 and 8\nEARRAPE WARNING",
            success: "Bass boosted! Please wait a few seconds for the effect to apply..."
        },
        eval: {
            tokenLeak: "Woops, token leaked",
            tooLongText: "Text too long! Sending result into the console...",
            success: "The eval succesfully finished without any error!",
            failure: "Woops, an error occurs",
            input: "Input: ",
            output: "Output: "
        },
        help: {
            //categories names, they are only used in the help command lol
            fun: "Fun",
            help: "Help",
            info: "Info",
            owner: "Owner",
            music: "Music",
            moderation: "Moderation",
            setup: "Setup",
            utility: "Utility",
            //links is not a category
            links: "Links",
            invite: "Invite",
            support: "Support server",
            vote: "Vote for Qeane",
            github: "GitHub Repo",
            list: "Qeane's List of Commands",
            datsalist: "Here is a list of my commands",
            c: "Created by Lumap#0001 | Translated to English by Lumap#0001" //put your discord tag ofc
        },
        language: {
            usage: "__Usage:__\n-To get the list of my languages: ``language list``\n-To change my language: ``language <LANG>``",
            lackOfPermissions: "Please ask your administrators if you wanna change my language here",
            invalidLanguage: "Sorry, but this lang does not exist or i'm not translated into this language yet!",
            success: "Language changed to **{0}**!" //{0}=language
        },
        loop: {
            types: {
                queue: "queue",
                track: "track",
                disable: "disable"
            },
            usage: "\n__Usage:__\n-To loop the queue: ``loop queue``\n-To loop the current track: ``loop track``\n-To disable the loop: ``loop disable``", //
            queue: "The queue will now repeat! Enjoy your music~!",
            track: "The current track will now repeat! Enjoy vibing~",
            disable: "Loop disabled!"
        },
        nowplaying: {
            //no string on this one, next
        },
        pause: {
            alreadyPaused: "Woops, it seems like the current track is already paused!",
            success: "Successfully paused the current track! Use the **resume** command to resume it!"
        },
        ping: {
            pong: "Ping? Pong! **{0}**ms!" //{0}=ws pings
        },
        play: {
            noSong: "I might be dumb, but you didnt gave me any song to play...",
            noSongFound: "I'm probably blind, but i wasn't able to find that song!",
            queueEmpty: "Queue is empty, leaving the voice channel...",
            playlist: {
                added: "Playlist added",
                desc: "Title: **{0}**\nSongs: **{1}**" //no explanation needed i guess
            },
            track: {
                added: "Track added",
                desc: "Track: **[{0}]({1})**\nDuration: **{2}**\nArtist: **{3}**"
            },
            player: {
                disconnect: "Please do not disconnect me from a voice channel if you can use the stop command. Clearing the queue...",
                error: "Looks like something went terribly wrong: {0}",
                nodeDisconnect: "Woops, I can not play music because my node was disconnected. Please contact my owner so it can fix this error!"
            }
        },
        prefix: {
            noPerms: "Please ask your administrators if you wanna change my prefix here",
            noArgs: "Please provide a new prefix. Usage: ``prefix <new prefix>``",
            success: "Prefix changed to **{0}** for this server!" //{0}=prefix
        },
        queue: {
            nothing: "Nothing",
            desc: "**__Now playing :__** \n[{0}]({1}) ([here]({2}))\n\n**__Incoming :__** \n**{3}**",
            more: "{0} more songs..."
        },
        reload: {
            noArgs: "Please provide a command to reload",
            noCommand: "Command no found!",
            success: "Reloaded command **{0}** succesfully!"
        },
        restart: {
            restarting: "Restarting Qeane..."
        },
        resume: {
            alreadyPlaying: "The current song is still playing!",
            success: "Succesfully reloaded the song!"
        },
        seek: {
            noArgs: "Usage: ``seek <position (ex: 4m 2s)>``",
            success: "Succesfully seeked!"
        },
        serverlist: {
            sent: "Server list sent in dm!"
        },
        shell: {
            noArgs: "You need to provide a bash command to execute!",
            tooBig: "The result is too big to be sent via discord! Sending it in the console..."
        },
        shuffle: {
            success: "Queue shuffled!"
        },
        skip: {
            success1: "Music succesfully skipped!",
            invalidAmount: "The number of songs to skip you provided is invalid!",
            success2: "Succesfulyl skipped {0} songs!"
        },
        stats: {
            collecting: "Collecting stats, please wait...",
            stats: "Qeane's stats",
            uptime: "Uptime:",
            servers: "Servers:",
            cores: "CPU Cores:",
            usage: "CPU Usage",
            ram: "RAM Usage"
        },
        stop: {
            //no strings, next
        },
        volume: {
            current: "Current volume: **{0}**",
            noArgs: "You need to provide a new volume",
            invalid: "You need to provide a new volume between 1 and 250!",
            success: "Volume set to **{0}**!"
        }
    },
    msgevent: {
        //used in src/events/msg.js
        prefix: "My prefix in this server is **{0}**, type ``{0}help`` to get a command list!", //{0}=prefix
        error: "Woopsie doopsie, something went wrong! You can find the error right below. If you can't figure how to get around this issue, please go to my support server and report this error!"
    },
    aliases: {
        //"the alias you want:"the english command name"
        bb: "bassboost",
        dual: "dualfm",
        e: "eval",
        h: "help",
        lang: "languages",
        l: "loop",
        np: "nowplaying",
        pa: "pause",
        p: "play",
        q: "queue",
        r: "resume",
        se: "seek",
        exec: "shell",
        sh: "shuffle",
        sk: "skip",
        st: "stop",
        vol: "volume"
    },
    commandInvertedNames: {
        bassboost: "bassboost",
        dualfm: "dualfm",
        eval: "eval",
        help: "help",
        language: "language",
        loop: "loop",
        meme: "meme",
        nowplaying: "nowplaying",
        ownerprefix: "ownerprefix",
        pause: "pause",
        ping: "ping",
        play: "play",
        prefix: "prefix",
        queue: "queue",
        reload: "reload",
        restart: "restart",
        resume: "resume",
        seek: "seek",
        serverlist: "serverlist",
        shell: "shell",
        shuffle: "shuffle",
        skip: "skip",
        stats: "stats",
        stop: "stop",
        volume: "volume",
        invite: "invite",
        support: "support",
        vote: "vote",
        github: "github"
    },
    music: {
        //these strings are used for several commands, so i put it here so you dont have to translate these strings 1k times
        queueEmpty: "Woops, nothing is playing right now!",
        noVc: "Mate, go in a channel before running this.",
        notSameVc: "Woops, you have to be in my voice channel!",
        live: "Live stream",
        np: {
            title: "Now Playing:",
            desc: "Track: **[{0}]({1})**\nTime: **{2}**\nArtist: **{3}**"
        }
    }
}
obj.commandNames = swap(obj.commandInvertedNames)
module.exports = obj