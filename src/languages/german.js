//dont touch this
function swap(json) {
    let ret = {};
    for (let key in json) {
        ret[json[key]] = key;
    }
    return ret;
}

let obj = {
    name: "german",
    commands: {
        //do NOT touch string/command names, just translate the text after the :s
        avatar: {
            clickToDownload: "Clicke [hier]({0}) um diesen wunderbaren avatar herunterzuladen!" //{0}=avatar link
        },
        ban: {
            usage: "\nVerwendung: ``ban <member> [grund]``",
            noBanPerm: "Versuch garnicht erst jemanden zu bannen ohne rechte!",
            botCantBan: "Ich kann keine member bannen, bitte gebe mir die BAN_MEMBERS rechte.",
            noArgs: "Ich kann die luft nicht bannen... Erwähne einen nutzer!",
            noUser: "Velleicht bin ich blind, Aber diesen nutzer kann ich nicht finden.",
            serverOwner: "Du wolltest doch nicht versuchen den server eigentümer zu bannen... oder?",
            notBannable: "Ich kann diesen nutzer nicht bannen. Stelle sicher das meine rolle über seine steht!",
            youreBanned: "**{1}** hat dich von **{0}** gebannt", //{0}=guild name  {1}=message author tag
            noReason: "Du musst einen grund angeben!",
            memberBanned: "Nutzer wurde vom server geworfen!"
        },
        bassboost: {
            invalidNumber: "Bitte gebe mir eine nummer zwischen -8 and 8\nEARRAPE WARNING",
            success: "Bass geboosted! Bitte warte einige sekunden bis der effekt aktiv ist..."
        },
        cat: {
            meow: "Miau! Hier ist ein katzen bild (Katzen sind die besten, vertraue hunde nicht)"
        },
        dog: {
            woof: "Wau! Hier ist ein hunde bid (katzen sind besser)"
        },
        eval: {
            tokenLeak: "Ups, token wurde gesendet",
            tooLongText: "Text ist zu lang! Ergebnis wird in die konsole gesendet...",
            success: "Die evulation war erfolgreich ohne probleme!",
            failure: "Ups, ein error ist aufgetreten.",
            input: "Eingabe: ",
            output: "Ausgabe: "
        },
        fox: {
            //this command oes not have any text, next
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
            vote: "Stimme für Qeane",
            github: "GitHub Repo",
            list: "Qeane's Liste an commands",
            datsalist: "Hier ist meine liste an commmands",
            c: "Erstellt von Lumap#0001 | Übersetzt zu Deutsch von Link#0069" //put your discord tag ofc
        },
        hug: {
            hugs: "**{0}** Umarmt **{1}**" //{0}=message author tag  {1}=mentioned user
        },
        kick: {
            usage: "\nAnwendung: ``kick <member> [grund]``",
            noKickPerm: "Versuche garnicht erst jemanden zu kicken durch mich, solange du keine rechte hast!",
            botCantKick: "Mir fehlen die KICK_MEMBERS rechte...",
            noArgs: "Die luft kann ich nicht kicken, bitte erwähne einen nutzer...",
            noUser: "Tut mir leid aber ich kann diesen nutzer nicht finden...",
            serverOwner: "Tut mir leid das sagen zu müssen, aber den owner kann man nicht kicken...",
            notKickable: "Es sieht so aus als könnte ich diesen nutzer nicht kicken, stelle sicher das meine rolle über ihn ist",
            youreKicked: "Du wurdest gekickt von **{0}** von **{1}**", //{0}=guild name  {1}=message author tag
            noReason: "Du musst einen grund angeben",
            memberKicked: "Den nutzer wurde erfolgreich in den hintern getretten!"
        },
        kiss: {
            kisses: "**{0}** küsst **{1}** OwO" //{0}=message author tag  {1}=mentioned user
        },
        language: {
            usage: "__Anwendung:__\n-Um die liste der sprachen zu kriegen: ``language list``\n-Um die sprache zu ändern: ``language <LANG>``",
            lackOfPermissions: "Bitte frage die Administratoren wenn du die sprache hier ändern willst",
            invalidLanguage: "Sorry, aber diese sprache existiert nicht oder wurde noch nicht übersetzt!",
            success: "Sprache geändert zu **{0}**!" //{0}=language
        },
        loop: {
            types: {
                queue: "queue",
                track: "track",
                disable: "disable"
            },
            usage: "\n__Anwendung:__\n-Um die warteschlange zu wiederholen: ``loop queue``\n-Um das jetztige lied zu wiederholen: ``loop track``\n-Um das wiederholen auszuschalten: ``loop disable``", //
            queue: "Die warteschlange wird wiederholt! Habe spaß mit deiner Musik~!",
            track: "Das jetzige lied wird wiederholt! Habe spaß zu viben~",
            disable: "Wiederholen ausgeschaltet!"
        },
        meme: {
            imgurl: "[Link zu diesen wundervollen meme]({0})" //{0}=image url
        },
        neko: {
            heresANeko: "Hier ist ein neko für **{0}**", //{0}=msg.author
            grabbedVia: "Neko bild geholt von weebs4life.ga api (es ist sfw)"
        },
        nowplaying: {
            //no string on this one, next
        },
        pat: {
            pats: "**{0}** streichelt **{1}**" //{0}=message author tag  {1}=mentioned user
        },
        pause: {
            alreadyPaused: "Ups, sieht so aus als wäre der song schon pausiert!",
            success: "Song wurde pausiert! nutze den **resume** command um zu unpausieren."
        },
        ping: {
            pong: "Ping? Pong! **{0}**ms!" //{0}=ws pings
        },
        play: {
            noSong: "Velleicht bin ich dumm, aber ich glaube du hast mir nix zum suchen gegeben...",
            noSongFound: "Ich bin velleicht blind, aber ich konnte dieses lied nicht finden!",
            queueEmpty: "Warteschlange ist leer, verlasse den voice channel...",
            playlist: {
                added: "Playlist hinzugefügt",
                desc: "Titel: **{0}**\nLieder: **{1}**" //no explanation needed i guess
            },
            track: {
                added: "Lied hinzugefügt",
                desc: "Lied: **[{0}]({1})**\nLänge: **{2}**\nArtist: **{3}**"
            },
            player: {
                disconnect: "Bitte werfe mich nicht aus den voice channel wenn du den stop command nutzen kannst...",
                error: "Sieht so aus als wäre etwas schief gegangen: {0}",
                nodeDisconnect: "Ups, Ich kann keine musik spielen weil meine node wurde disconnected. Bitte kontaktiere meinen owner damit er es beheben kann!"
            }
        },
        prefix: {
            noPerms: "Bitte frage die adminstratoren wenn du den prefix ändern wilst",
            noArgs: "Bitte gebe mir einen neuen prefix. Anwendung: ``prefix <new prefix>``",
            success: "Prefix geändert zu **{0}** für diesen server!" //{0}=prefix
        },
        purge: {
            noPerms: "Sieht so aus als könntest du keine nachrichten löschen... Bitte versuche es wieder wenn du rechte hast.",
            noArgs: "Ich kann luft nicht löschen. Anwendung: ``purge <nummer zwischen 2 und 99>``",
            invalidAmount: "Du must mir eine richtige zahl geben! Usage: ``purge <nummer zwischen 2 und 99>``",
            success: "Erfolg!"
        },
        queue: {
            nothing: "Nichts",
            desc: "**__Jetzt am abspielen :__** \n[{0}]({1}) ([here]({2}))\n\n**__Danach :__** \n**{3}**",
            more: "{0} mehr lieder..."
        },
        reload: {
            noArgs: "Bitte gebe mir ein command zum reloaden.",
            noCommand: "Command nicht gefunden!",
            success: "Command **{0}** wurde erfolgreich reloaded!"
        },
        restart: {
            restarting: "Qeane wird neugestartet..."
        },
        resume: {
            alreadyPlaying: "Der jetzige song ist immernoch am spielen!",
            success: "Song erfolgreich geladen!"
        },
        seek: {
            noArgs: "Awendung: ``seek <position (ex: 4m 2s)>``",
            success: "Erfolgreich gesucht!"
        },
        serverinfo: {
            name: "Server Name",
            id: "Server ID",
            region: "Server Region",
            membercount: "Member Anzahl",
            owner: "Server Owner",
            createdat: "Erstellt am",
            info: "Server Info"
        },
        serverlist: {
            sent: "Server list gesendet in dm!"
        },
        shell: {
            noArgs: "Du musst mir einen bash command geben!",
            tooBig: "Das ergebnis ist zu lang für discord! Senden zu der konsole..."
        },
        shuffle: {
            success: "Warteschlange gemischt!"
        },
        skip: {
            success1: "Musik erfolgreich geskipped!",
            invalidAmount: "Die zahl an lieder die du angeben hast sind nicht richtig!",
            success2: "Erfolgreich {0} songs geskipped!"
        },
        slap: {
            slaps: "**{0}** gibt **{1} Ohrfeigen**"
        },
        stats: {
            collecting: "Sammle daten, bitte warten...",
            stats: "Qeane's statistiken",
            uptime: "Betriebszeit:",
            servers: "Servers:",
            cores: "CPU Kerne:",
            usage: "CPU Benutzung",
            ram: "RAM Benutzung"
        },
        stop: {
            //no strings, next
        },
        tag: {
            noPerms: "Du brauchst die MANAGE_GUILD rechte um das zu machen!",
            create: {
                noTitle: "Du brauchst einen Etikett namen! (nur ein wort, keine leerzeichen)",
                noDesc: "Du brauchst einen Etikett content!",
                descTooBig: "Sorry, aber dieser Etikett content muss kleiner als 2k characters sein!",
                success: "Etikett  erfolgreich erstellt!"
            },
            delete: {
                noName: "Du musst mir einen Etikket namen geben damit ich es löschen kann!",
                invalidTag: "Dieser Etikett existiert nicht!",
                success: "Etikett erfolgreich gelöscht!"
            },
            list: {
                noTag: "Kein Etikett!",
                list: "Listen an Etiketten von diesen server:"
            },
            usage: "Anwendung: `tag <create/delete/list>`"
        },
        userinfo: {
            usage: "Anwendung: ``userinfo [@erwähnung]",
            tag: "Name/Tag",
            badges: "Orden",
            id: "Nutzer ID",
            nick: "Nickname",
            noNick: "Kein nickname",
            bot: "Bot?",
            yes: "Ja",
            no: "Nein",
            joined: "Beigetreten am",
            boost: "Boostet?",
            boostSince: "Boostet seit",
            notBoosting: "Boostet nicht",
            perms: "Rechte",
            roles: "Rolen liste",
            noRoles: "Keine rollen",
            tooMuchRoles: "Zu viele rollen um sie anzuzeigen! Versuche ``userinfo @nutzer role list``!",
            tooMuchRoles2: "Dieser nutzer hat zu viele rollen um sie anzuzeigen!",
            info: "nutzer Info"
        },
        volume: {
            current: "Volumen: **{0}**",
            noArgs: "Du musst mir einen neuen volumen geben",
            invalid: "Du musst mir einen volumen zwischen 1 und 250 geben!",
            success: "Volumen gesetzt auf **{0}**!"
        },
        weather: {
            usage: "Anwendung: ``weather <C/F> <stadt name>``",
            for: "Wetter für **{0}**",
            timezone: "Zeitzone",
            type: "Temperatur anzeige",
            temp: "Temperatur",
            feels: "Fühlt sich an wie",
            wind: "Wind",
            hum: "Feuchtigkeit"
        }
    },
    msgevent: {
        //used in src/events/msg.js
        prefix: "Mein prefix ist **{0}**, tippe ``{0}help`` um eine liste an commands zu kriegen!", //{0}=prefix
        error: "Ups schwups, etwas ist schief gegangen! Du siehst den error hier darunter. Wenn du nicht weist wie du an diesen error vorbei kommst, kontaktiere den bot owner!"
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
        //"translated name:"original name"
        avatar: "avatar",
        ban: "ban",
        bassboost: "bassboost",
        cat: "cat",
        dog: "dog",
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
        queueEmpty: "Ups, nichts ist in der warteschlange!",
        noVc: "Freund, du musst in einen voice channel gehen.",
        notSameVc: "Ups, du bist nicht im selben voice channel!",
        live: "Live stream",
        np: {
            title: "Jetzt am spielen:",
            desc: "Lied: **[{0}]({1})**\nZeit: **{2}**\nArtist: **{3}**"
        }
    }
}
obj.commandNames = swap(obj.commandInvertedNames)
module.exports = obj