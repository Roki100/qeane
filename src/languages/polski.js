//dont touch this
function swap(json) {
    var ret = {};
    for (var key in json) {
        ret[json[key]] = key;
    }
    return ret;
}

let obj = {
    name: "polski",
    commands: {
        //do NOT touch string/command names, just translate the text after the :s
        dual: {
            artist: "Artysta",
            song: "Piosenka",
            presenter: "Prezenter",
            listenerpeak: "Najwięcej Słuchaczy",
            listeners: "Słuchacze"
        },
        bassboost: {
            invalidNumber: "Proszę podać prawidłową liczbę między -8 i 8\nUwaga Przester",
            success: "Podkręcono basa! Poczekaj chwilę, żeby efekt mógł zostać zastosowany..."
        },
        eval: {
            tokenLeak: "Ups token wykradziony!",
            tooLongText: "Tekst zbyt długi! Wysyłanie wyniku do konsoli...",
            success: "Eval został ukończony bez żadnych błędów!",
            failure: "Ups występuje błąd",
            input: "Wejście: ",
            output: "Wyjście: "
        },
        help: {
            //categories names, they are only used in the help command lol
            fun: "Zabawa",
            help: "Pomoc",
            info: "Info",
            owner: "Twórca",
            music: "Muzyka",
            moderation: "Moderacja",
            setup: "Ustawienia",
            utility: "Użyteczne",
            //links is not a category
            links: "Linki",
            invite: "Zaproszenie",
            support: "Serwer Wsparcia",
            vote: "Zagłosuj na Qeane",
            github: "Repozytorium na GitHub",
            list: "Lista komend Qeane",
            datsalist: "Oto mała lista moich komend",
            c: "Stworzone przez Lumap#0001 | Przetłumaczone na angielski przez Lumap#0001" //put your discord tag ofc
        },
        language: {
            usage: "__Użytkowanie:__\n-Aby zdobyć listę moich języków: ``język list``\n-Aby zmienić mój język: ``język <język>``",
            lackOfPermissions: "Prosze się spytać administratora czy możesz zmienić tutaj mój język",
            invalidLanguage: "Przepraszam ale ten język nie istnieje albo na razie nie jestem przetłumaczony na niego!",
            success: "Język zmieniony na **{0}**!" //{0}=language
        },
        loop: {
            types: {
                queue: "lista",
                track: "utwór",
                disable: "wyłącz"
            },
            usage: "\n__Użytkowanie:__\n-Aby zapętlić liste: ``pętla queue``\n-Aby zapętlić utwór: ``pętla track``\n-Aby wyłączyć zapętlanie: ``pętla disable``", //
            queue: "Od teraz lista będzie się zapętlać! Ciesz się muzyką~!",
            track: "Od teraz utwór będzie się zapętlać! Ciesz się muzyką~",
            disable: "Zapętlanie wyłączone!"
        },
        nowplaying: {
            //no string on this one, next
        },
        pause: {
            alreadyPaused: "Ups wygląda na to, że ten utwór już jest zapauzowany!",
            success: "Pomyślnie zapauzowano utwór! Użyj komendy **wznów** aby odpauzować utwór!"
        },
        ping: {
            pong: "Ping? Pong! **{0}**ms!" //{0}=ws pings
        },
        play: {
            noSong: "Mogę być głupi, ale nie dałeś mi żadnej piosenki do odtworzenia...",
            noSongFound: "Prawdopodobnie jestem ślepy, ale nie mogłem znaleźć tego utworu!",
            queueEmpty: "Lista jest pusta, opuszczam kanał głosowy...",
            playlist: {
                added: "Playlista dodana!",
                desc: "Tytuł: **{0}**\nPiosenki: **{1}**" //no explanation needed i guess
            },
            track: {
                added: "Utwór dodany",
                desc: "Utwór: **[{0}]({1})**\nDługość: **{2}**\nArtysta: **{3}**"
            },
            player: {
                disconnect: "Proszę nie rozłączać mnie z kanału głosowego jeśli możesz użyć komendy do zatrzymania muzyki. Czyszczenie listy...",
                error: "Cóż wygląda na to, że coś poszło bardzo źle: {0}",
                nodeDisconnect: "Ups nie mogę grać muzyki bo mój node został rozłączony. Proszę się skontaktować z moim właścicielem, żeny mógł naprawić ten błąd!"
            }
        },
        prefix: {
            noPerms: "Proszę zapytaj się administratora czy możesz zmienić mój prefix tutaj",
            noArgs: "Proszę napisz jaki chcesz prefix mieć. Użytkowanie: ``prefix <nowy prefix>``",
            success: "Prefix zmieniony na **{0}** dla tego serwera!" //{0}=prefix
        },
        queue: {
            nothing: "Nic",
            desc: "**__Teraz gra :__** \n[{0}]({1}) ([tutaj]({2}))\n\n**__Następny utwór :__** \n**{3}**",
            more: "{0} więcej utworów..."
        },
        reload: {
            noArgs: "Proszę podać komende do przeładowania",
            noCommand: "Komenda nie znaleziona!",
            success: "Udało się przeładować komende **{0}** !"
        },
        restart: {
            restarting: "Restartowanie Qeane..."
        },
        resume: {
            alreadyPlaying: "Aktualny utwór nadal gra!",
            success: "Udało się przeładować piosenke!"
        },
        seek: {
            noArgs: "Użytkowanie: ``przeszukaj <miejsce (przykład: 4m 2s)>``",
            success: "Udało się przejść na daną minutę!"
        },
        serverlist: {
            sent: "Lista Serwera wysłana do dm!"
        },
        shell: {
            noArgs: "Musisz podać komende bash do wykonania!",
            tooBig: "Wynik jest zbyt długi, żeby wysłać przez discorda! Wysyłanie do konsoli..."
        },
        shuffle: {
            success: "Lista przetasowana"
        },
        skip: {
            success1: "Muzyka pomyślnie pominięta",
            invalidAmount: "Nieprawidłowa liczba piosenek do pominięcia!",
            success2: "Pomyślnie pominięto {0} piosenek!"
        },
        stats: {
            collecting: "Zbieranie informacji proszę czekać...",
            stats: "Statystyki Qeane",
            uptime: "Online przez:",
            servers: "Serwery:",
            cores: "Rdzenie CPU:",
            usage: "Używane CPU",
            ram: "Używany RAM"
        },
        stop: {
            //no strings, next
        },
        volume: {
            current: "Obecna głośność: **{0}**",
            noArgs: "Musisz podać nową głośność",
            invalid: "Musisz podać nową głośność pomiędzy 1 i 250!",
            success: "Głośność ustawiona na **{0}**!"
        },
    },
    msgevent: {
        //used in src/events/msg.js
        prefix: "Mój prefix na serwerze to **{0}**, wpisz ``{0}pomoc`` aby zdobyć listę komend!", //{0}=prefix
        error: "Upsi dupsi, coś poszło nie tak! Możesz znaleźć błąd poniżej. Jeśli nie wiesz jak obejść ten problem pójdź na mój serwer wsparcia i zgłoś problem!"
    },
    aliases: {
        //"the alias you want:"the english command name"
        bb: "bassboost",
        p: "help",
        jęz: "language",
        tg: "nowplaying",
        gr: "play",
        l: "queue",
        terminal: "shell",
        exec: "shell",
        gł: "volume"
    },
    commandInvertedNames: {
        //"translated name:"original name"
        ban: "ban",
        bassboost: "bassboost",
        eval: "eval",
        help: "pomoc",
        language: "język",
        loop: "pętla",
        nowplaying: "terazgra",
        ownerprefix: "prefixwłaściciela",
        pause: "pauza",
        ping: "ping",
        play: "graj",
        prefix: "prefix",
        queue: "lista",
        reload: "przeładuj",
        restart: "restartuj",
        resume: "wznów",
        seek: "przeszukuj",
        shell: "powłoka",
        shuffle: "tasowanie",
        skip: "pomiń",
        stop: "stop",
        volume: "głośność",
        invite: "invite",
        support: "support",
        vote: "vote",
        github: "github"
    },
    music: {
        //these strings are used for several commands, so i put it here so you dont have to translate these strings 1k times
        queueEmpty: "Ups nic teraz nie gra!",
        noVc: "Ups musisz być na kanale głosowym!",
        notSameVc: "Ups musisz być na moim kanale głosowym!",
        live: "Transmisja na Żywo",
        np: {
            title: "Teraz gra:",
            desc: "Utwór: **[{0}]({1})**\nCzas Trwania: **{2}**\nArtysta: **{3}**"
        }
    }
}
obj.commandNames = swap(obj.commandInvertedNames)
module.exports = obj