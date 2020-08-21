//dont touch this
function swap(json) {
    let ret = {};
    for (let key in json) {
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
        avatar: {
            clickToDownload: "Click [here]({0}) to download this awesome avatar!" //{0}=avatar link
        },
        ban: {
            usage: "\nUsage: ``ban <member> [reason]``",
            noBanPerm: "Eh! Don't even try to ban if you can't!",
            botCantBan: "Erm, I cannot ban members, please give me the BAN_MEMBERS permissions!",
            noArgs: "I can't ban the air... Please mention the user to ban",
            noUser: "I might be blind, but I cannot find this user!",
            serverOwner: "Why are you trying to ban the server owner!?",
            notBannable: "Ah, I can't ban him... Make sure one of my role is above this member's highest role.",
            youreBanned: "You just got banned from **{0}** by **{1}**", //{0}=guild name  {1}=message author tag
            noReason: "No reason",
            memberBanned: "Member succesfully yeeted from this server!"
        },
        bassboost: {
            invalidNumber: "Please provide a valid number between -8 and 8\nEARRAPE WARNING",
            success: "Bass boosted! Please wait a few seconds for the effect to apply..."
        },
        cat: {
            meow: "Meow! Here's a cat picture (cats are the best, don't trust dogs)"
        },
        dog: {
            woof: "Woof! Here's a dog picture (ew, cats better)"
        },
        eval: {
            tokenLeak: "Woops, token leaked",
            tooLongText: "Text too long! Sending result into the console...",
            success: "The eval succesfully finished without any error!",
            failure: "Woops, an error occurs",
            input: "Input: ",
            output: "Output: "
        },
        fox: {
            //this command does not have any text, next
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
        hug: {
            hugs: "**{0}** hugs **{1}**" //{0}=message author tag  {1}=mentioned user
        },
        kick: {
            usage: "\nUsage: ``kick <member> [reason]``",
            noKickPerm: "Don't even try to kick members thanks to me, you can't kick members yourself...",
            botCantKick: "It seems that I can't kick members, please give me the KICK_MEMBERS permission.",
            noArgs: "I can't kick no one, please mention someone to kick...",
            noUser: "Sorry, I cannot find him...",
            serverOwner: "Are you trying to kick the owner? Nice try bud.",
            notKickable: "It doesnt seems that I can kick him. Make sure one of my role is above this member's highest role.",
            youreKicked: "You just got kicked from **{0}**by **{1}**", //{0}=guild name  {1}=message author tag
            noReason: "No reason",
            memberKicked: "Member succesfully kicked out of here!"
        },
        kiss: {
            kisses: "**{0}** kisses **{1}** OwO"//{0}=message author tag  {1}=mentioned user
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
        meme: {
            imgurl: "[Link to dat awesome meme]({0})" //{0}=image url
        },
        neko: {
            heresANeko: "Here's a neko for **{0}**", //{0}=msg.author
            grabbedVia: "Neko grabbed via the weebs4life.ga api (its sfw)"
        },
        nowplaying: {
            //no string on this one, next
        },
        pat: {
            pats: "**{0}** pats **{1}**"//{0}=message author tag  {1}=mentioned user
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
        purge: {
            noPerms: "Looks like you cannot manage messages here... Please retry when you will be able to",
            noArgs: "I can't delete nothing. Usage: ``purge <number between 2 and 99>``",
            invalidAmount: "Invalid amount of messages! Usage: ``purge <number between 2 and 99>``",
            success: "Success!"
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
        serverinfo: {
            name: "Server Name",
            id: "Server ID",
            region: "Server Region",
            membercount: "Member Count",
            owner: "Server Owner",
            createdat: "Created at",
            info: "Server Info"
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
        slap: {
            slaps: "**{0}** slaps **{1}**"
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
        tag: {
            noPerms: "You need the MANAGE_GUILD permission to do this!",
            create: {
                noTitle: "You need to provide a tag title! (only one word, no spaces allowed)",
                noDesc: "You need to provide a tag content!",
                descTooBig: "Sorry, but the tag content needs to be smaller than 2k characters!",
                success: "Tag succesfully created!"
            },
            delete: {
                noName: "You need to provide a tag name in order to delete it!",
                invalidTag: "This tag does't exist!",
                success: "Tag succesfully deleted!"
            },
            list: {
                noTag: "No tag has been created so far in this server!",
                list: "List of tags in this server:"
            },
            usage: "Usage: `tag <create/delete/list>`"
        },
        userinfo: {
            usage: "Usage: ``userinfo [@mention]",
            tag: "Name/Tag",
            badges: "Badges",
            id: "User ID",
            nick: "Nickname",
            noNick: "No nickname",
            bot: "Bot?",
            yes: "Yes",
            no: "No",
            joined: "Joined at",
            boost: "Boosting?",
            boostSince: "Boosting since",
            notBoosting: "Not boosting",
            perms: "Permissions",
            roles: "Role list",
            noRoles: "No roles",
            tooMuchRoles: "Too much roles to display here! Try doing ``userinfo @user role list``!",
            tooMuchRoles2: "This user has too many roles to display",
            info: "User Info"
        },
        volume: {
            current: "Current volume: **{0}**",
            noArgs: "You need to provide a new volume",
            invalid: "You need to provide a new volume between 1 and 250!",
            success: "Volume set to **{0}**!"
        },
        weather: {
            usage: "Usage: ``weather <C/F> <city name>``",
            for: "Weather for **{0}**",
            timezone: "Timezone",
            type: "Degree type",
            temp: "Temperature",
            feels: "Feels like",
            wind: "Winds",
            hum: "Humidity"
        }
    },
    msgevent: {
        //used in src/events/msg.js
        prefix: "My prefix in this server is **{0}**, type ``{0}help`` to get a command list!", //{0}=prefix
        error: "Woopsie doopsie, something went wrong! You can find the error right below. If you can't figure how to get around this issue, please go to my support server and report this error!"
    },
    aliases: {
        //"the alias you want:"the english command name"
        pfp: "avatar",
        av: "avatar",
        b: "ban",
        bb: "bassboost",
        h: "help",
        k: "kick",
        lang: "language",
        np: "nowplaying",
        p: "play",
        q: "queue",
        si: "serverinfo",
        terminal: "shell",
        exec: "shell",
        ui: "userinfo",
        vol: "volume"
    },
    commandInvertedNames: {
        avatar: "avatar",
        ban: "ban",
        bassboost: "bassboost",
        cat: "cat",
        dog: "dog",
        dualfm: "dualfm",
        eval: "eval",
        fox: "fox",
        help: "help",
        hug: "hug",
        kiss: "kiss",
        kick: "kick",
        language: "language",
        loop: "loop",
        meme: "meme",
        neko: "neko",
        nowplaying: "nowplaying",
        ownerprefix: "ownerprefix",
        pat: "pat",
        pause: "pause",
        ping: "ping",
        play: "play",
        prefix: "prefix",
        purge: "purge",
        queue: "queue",
        reload: "reload",
        reminder: "reminder",
        restart: "restart",
        resume: "resume",
        seek: "seek",
        serverinfo: "serverinfo",
        serverlist: "serverlist",
        shell: "shell",
        shuffle: "shuffle",
        skip: "skip",
        slap: "slap",
        stats: "stats",
        stop: "stop",
        tag: "tag",
        userinfo: "userinfo",
        volume: "volume",
        weather: "weather"
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