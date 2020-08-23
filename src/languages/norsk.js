//dont touch this
function swap(json) {
    var ret = {};
    for (var key in json) {
        ret[json[key]] = key;
    }
    return ret;
}

let obj = {
    name: "norsk",
    commands: {
        //do NOT touch string/command names, just translate the text after the :s
        avatar: {
            clickToDownload: "Klikk [her]({0}) for å laste ned avataren!" //{0}=avatar link
        },
        ban: {
            usage: "\nBruk: ``banlys <medlem> [grunn]``",
            noBanPerm: "Du burde virkelig ikke prøve å banlyse noen.",
            botCantBan: "Ok, så jeg kan ikke banlyse folk. Jeg trenger `BAN_MEMBERS` tilgang.",
            noArgs: "Jeg kommer ikke til å banlyse luft. Gi meg et medlem å banlyse istedet.",
            noUser: "Det er mulig jeg er blinn, men jeg ser ikke det medlemet.",
            serverOwner: "EIEREN!? HAR DU GÅTT FRA VETTET!?",
            notBannable: "Jeg kan ikke banlyse dem. Sørg for at min høyeste role er over demmes.",
            youreBanned: "Du har blitt banlyse i **{0}** av **{1}**", //{0}=guild name  {1}=message author tag
            noReason: "Ubegrunnet",
            memberBanned: "Medlemt suksessfullt banlyst fra denne serveren.!"
        },
        bassboost: {
            invalidNumber: "Vennligst gi meg et tall fra -8 til +8 \nEARRAPE ADVARSEL",
            success: "Bass Styrket! Vennligst vent noen sekunder for at det skal ta effect."
        },
        cat: {
            meow: "Meow! Her er et katte bilde! (SÅ SØTE!!!)"
        },
        dog: {
            woof: "Woof! Her er et hunde bilde! (Flink bisk!)"
        },
        eval: {
            tokenLeak: "Oops, token leket.",
            tooLongText: "Tekst for langt! Sender til consolen!",
            success: "Eval ble ferdig uten feil!",
            failure: "Oida! En error!",
            input: "In: ",
            output: "Ut: "
        },
        fox: {
            //this command oes not have any text, next
            // does*
        },
        help: {
            //categories names, they are only used in the help command lol
            fun: "Moro",
            help: "Hjelp",
            info: "Info",
            owner: "Eier",
            music: "Musikk",
            moderation: "Moderering",
            setup: "Oppstart",
            utility: "Nytte",
            //links is not a category
            links: "Linker",
            invite: "Inviter",
            support: "Support server",
            premium: "Skaff Premium",
            vote: "Stem for Qeane",
            github: "GitHub Repo",
            list: "Qeane's Liste over Kommandoer",
            datsalist: "Her er en liste over mine Kommandoer",
            c: "Laget my Lumap#0001 | Oversettet til Norsk av Aprixia#1033" //put your discord tag ofc
        },
        hug: {
            hugs: "**{0}**klemmer **{1}**" //{0}=message author tag  {1}=mentioned user
        },
        kick: {
            usage: "\nBruk: ``spark <medlem> [grunn]``",
            noKickPerm: "Ikke prøv deg! Jeg lar deg ikke få sparke ut medlemer før du har `KICK_MEMBERS` tilgang.",
            botCantKick: "Hmm... Det virker som at jeg ikke kan sparke ut folk. Jeg trenger `KICK_MEMBERS` tilgang.",
            noArgs: "Ja, jeg skjønner at du vil sparke noen, men hvem!?",
            noUser: "Jeg tror ikke de er her.",
            serverOwner: "Du prøver å sparke eieren? Det er ikke snilt. Si unnskyld!",
            notKickable: "Hvirker som at jeg ikke kan sparke dem. Sørg for at min høyeste role er høyere en demmes.",
            youreKicked: "Du har blit sparket ut av **{0}** av **{1}**", //{0}=guild name  {1}=message author tag
            noReason: "Ubegrunnet",
            memberKicked: "Medlem suksessfullt kasta ut!"
        },
        kiss: {
            kisses: "**{0}** kysser **{1}** OwO"//{0}=message author tag  {1}=mentioned user
        },
        language: {
            usage: "__Bruk:__\n-For å få en liste over språkene mine, kjør: ``språk list``\n-For å bytte språket mitt, kjør: ``språk <SPRÅK>``",
            lackOfPermissions: "Vennligst spør administratorene for å bytte språket her.",
            invalidLanguage: "Det språke eksisterer ikke, eller jeg er ikke oversatt til det.",
            success: "Språk byttet til **{0}**!" //{0}=language
        },
        loop: {
            types: {
                queue: "kø",
                track: "spor",
                disable: "skruav"
            },
            usage: "\n__Bruk:__\n-For å loope køen: ``loop kø``\n-For å loope sporet: ``loop spor``\n-For å skru av looped: ``loop skruav``", //
            queue: "Køen vil nå repeteres. Nyt musikken!",
            track: "Sporet vil nå repeteres. Nyt musikken!",
            disable: "Loop skrud av."
        },
        meme: {
            imgurl: "[Link til memen]({0})" //{0}=image url
        },
        neko: {
            heresANeko: "Her er en neko! **{0}**", //{0}=msg.author
            grabbedVia: "Neko skaffet fra weebs4life.ga api (det er sfw)"
        },
        nowplaying: {
            //no string on this one, next
        },
        pat: {
            pats: "**{0}** klapper **{1}**"//{0}=message author tag  {1}=mentioned user
        },
        pause: {
            alreadyPaused: "Oisan! Virker som at sporet er alerede på pause!",
            success: "Suksessfullt pausa sporet! Bruk **start** kommandoen for å fortsette.!"
        },
        ping: {
            pong: "Ping? Pong! **{0}**ms!" //{0}=ws pings
        },
        play: {
            noSong: "Det er mulig jeg er dom, men jeg tror ikke du ga meg en sang...",
            noSongFound: "Jeg søkte så langt øye kunne se, men jeg fant desverre ikke en sang. :pensive:",
            queueEmpty: "Queue is tom, forlatter kanallen...",
            playlist: {
                added: "Spilleliste lagt til",
                desc: "Tittel: **{0}**\nSanger: **{1}**" //no explanation needed i guess
            },
            track: {
                added: "Spor lagt til",
                desc: "Spor: **[{0}]({1})**\nLengde: **{2}**\nArtist: **{3}**"
            },
            player: {
                disconnect: "Vennligst ikke forlat kanallen mens jeg spiller musik for deg. Renser listen...",
                error: "Virker som at noe gikk galt: {0}",
                nodeDisconnect: "Oisan! Jeg kan ikke spille av musik fordi min node tilkobling ble frakoblet."
            }
        },
        prefix: {
            noPerms: "Vennligst spør administratorene hvis du vil bytte prefixen her.",
            noArgs: "Vennligst gi meg en ny prefix. Bruk: ``prefix <ny prefix>``",
            success: "Prefix byttet til **{0}** for denne serveren!" //{0}=prefix
        },
        purge: {
            noPerms: "Ser ut som at du ikke kan styrre meldinger her.",
            noArgs: "Slettet ingenting. Bruk: ``purge <tall mellom 2 og 99>``",
            invalidAmount: "Ugyldig antall meldinger. Bruk: ``purge <tall mellom 2 og 99>``",
            success: "Suksess!"
        },
        queue: {
            nothing: "Ingenting",
            desc: "**__Nå spiller :__** \n[{0}]({1}) ([her]({2}))\n\n**__Neste :__** \n**{3}**",
            more: "{0} flere sanger..."
        },
        reload: {
            noArgs: "Vennligst gi en kommando å omlaste.",
            noCommand: "Kommando ikke funnet!",
            success: "Omlastet kommando **{0}** suksessfullt!"
        },
        restart: {
            restarting: "Omstarter Qeane... (Lumap er søt)"
        },
        resume: {
            alreadyPlaying: "Sangen spiller ennå...",
            success: "Startet opp sangen igjen!"
        },
        seek: {
            noArgs: "Bruk: ``seek <position (ex: 4m 2s)>``",
            success: "Suksessfull seek!"
        },
        serverinfo: {
            name: "Server Nvn",
            id: "Server ID",
            region: "Server Region",
            membercount: "Antal Medlemer",
            owner: "Server Eier",
            createdat: "Skapt",
            info: "Server Info"
        },
        serverlist: {
            sent: "Server list sent i dm!"
        },
        shell: {
            noArgs: "You need to provide a bash command to execute! (I don't feel a need to edit this as it's owner commands. Lumap is cute though. - Aprixia)",
            tooBig: "The result is too big to be sent via discord! Sending it in the console..."
        },
        shuffle: {
            success: "Queue tilfeldig!"
        },
        skip: {
            success1: "Sang skippet!",
            invalidAmount: "Antallet sanger å skippe er ugyldig.",
            success2: "Skippet {0} sanger!"
        },
        slap: {
            slaps: "**{0}** klasker **{1}**"
        },
        stats: {
            collecting: "Sammler stats, vennligst vent...",
            stats: "Qeane's stats",
            uptime: "Opptid:",
            servers: "Servers:",
            cores: "CPU Kjerner:",
            usage: "CPU Bruk:",
            ram: "RAM Bruk:"
        },
        stop: {
            //no strings, next
        },
        tag: {
            noPerms: "Du trenger `MANAGE_MESSAGES` for å gjøre dette.",
            create: {
                noTitle: "Hva skal vi kalle den da? (bare ett ord, ikke noe mellomrom tilatt)",
                noDesc: "Og hva er kontentet?",
                descTooBig: "Sorry, men det er for stort. Det må være mindre en 2,000 bokstaver.",
                success: "Tag laget!"
            },
            delete: {
                noName: "Hvilken tag?",
                invalidTag: "Denne taggen eksisterer ikke.",
                success: "Tag slettet!"
            },
            list: {
                noTag: "Denne serveren har ingen tags.",
                list: "En liste over tags i dene serveren:"
            },
            usage: "Bruk: `tag <create/delete/list>`"
        },
        userinfo: {
            usage: "Bruk: ``userinfo [@mention]",
            tag: "Navn/Tag",
            badges: "Badger",
            id: "Bruker ID",
            nick: "Kallenavn",
            noNick: "Intet kallenavn",
            bot: "Bot?",
            yes: "Ja",
            no: "Nei",
            joined: "Ble med",
            boost: "Booster?",
            boostSince: "Booster siden",
            notBoosting: "Booster ikke",
            perms: "Tilganger",
            roles: "Role liste",
            noRoles: "Ingent roler",
            tooMuchRoles: "For mange roler til å vise det her! Prøv ``userinfo @user role list`` istedet!",
            tooMuchRoles2: "Denne brukeren har for mange roler til å vise.",
            info: "Bruker Info"
        },
        volume: {
            current: "Volum: **{0}**",
            noArgs: "Hvor høyt?",
            invalid: "Du må gi et tall melom 0 og 250!",
            success: "Volum sat til **{0}**!"
        },
        weather: {
            usage: "Bruk: ``weather <C/F> <city name>``",
            for: "Vær for **{0}**",
            timezone: "Tidszone",
            type: "Grade type",
            temp: "Temperatur",
            feels: "Føles like",
            wind: "Vind",
            hum: "Human"
        }
    },
    msgevent: {
        //used in src/events/msg.js
        prefix: "Min prefix i dene serveren er **{0}**, skriv ``{0}hjelp`` for å få en kommando liste!", //{0}=prefix
        error: "Oisan! En feil opsto! Den er rett unnenfor her. Vennligst rapporter den til min support server!"
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
    commandNames: {
        //"translated name:"original name"
        avatar: "avatar",
        banlys: "ban",
        bassboost: "bassboost",
        kat: "cat",
        hund: "dog",
        eval: "eval",
        rev: "fox",
        hjelp: "help",
        klem: "hug",
        kyss: "kiss",
        spark: "kick",
        språk: "language",
        loop: "loop",
        meme: "meme",
        neko: "neko",
        nåspiller: "nowplaying",
        eierprefix: "ownerprefix",
        klap: "pat",
        pause: "pause",
        ping: "ping",
        spill: "play",
        prefix: "prefix",
        purge: "purge",
        kø: "queue",
        reload: "reload",
        reminder: "reminder",
        restart: "restart",
        start: "resume",
        seek: "seek",
        serverinfo: "serverinfo",
        serverlist: "serverlist",
        shell: "shell",
        tilfeldig: "shuffle",
        skip: "skip",
        klask: "slap",
        stats: "stats",
        stop: "stop",
        tag: "tag",
        userinfo: "userinfo",
        volum: "volume",
        vær: "weather"
    },
    music: {
        //these strings are used for several commands, so i put it here so you dont have to translate these strings 1k times
        queueEmpty: "Oisan! Det er ingen sanger i køen nå!",
        noVc: "Kompis, gå i en kanal før du kjører dette.",
        notSameVc: "Oisan! Du må være i den samme kanallen som meg!",
        live: "Live stream",
        np: {
            title: "Nå Spiller:",
            desc: "Spor: **[{0}]({1})**\nTid: **{2}**\nArtist: **{3}**"
        }
    }
}
obj.commandInvertedNames = swap(obj.commandNames)
module.exports = obj
