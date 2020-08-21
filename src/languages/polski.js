//dont touch this
function swap(json) {
    let ret = {};
    for (let key in json) {
        ret[json[key]] = key;
    }
    return ret;
}
let obj = {
    name: "polski",
    commands: {
        //do NOT touch string/command names, just translate the text after the :s
        avatar: {
            clickToDownload: "Kliknij[tutaj]({0}) aby pobrać ten świetny awatar!" //{0}=avatar link
        },
        ban: {
            usage: "\nZastosowanie: ``ban <member> [reason]``",
            noBanPerm: "Eh! Nie próbuj banować jeśli nie możesz!",
            botCantBan: "Erm, Nie mogę banować członków, proszę daj mi uprawnienie BAN_MEMBERS!",
            noArgs: "Nie mogę zbanować powietrza... Musisz dać wzmiankę kogo chcesz zbanować",
            noUser: "Mogę być ślepy, ale nie mogę znaleźć tego użytkownika!",
            serverOwner: "Dlaczego próbujesz zbanować właściciela serwera!?",
            notBannable: "Ah, nie mogę go zbanować... Upewnij się, że jedna z moich ról jest wyższa od osoby, którą chcesz zbanować.",
            youreBanned: "Właśnie zostałeś zbanowany **{0}** przez **{1}**", //{0}=guild name  {1}=message author tag
            noReason: "Brak powodu",
            memberBanned: "Użytkownik pomyślnie wyrzucony z serwera!"
        },
        bassboost: {
            invalidNumber: "Proszę podać prawidłową liczbę między -8 i 8\nUwaga Przester",
            success: "Podkręcono basa! Poczekaj chwilę, żeby efekt mógł zostać zastosowany..."
        },
        cat: {
            meow: "Miał! Oto zdjęcie kota (koty są najlepsze nie ufaj psą)"
        },
        dog: {
            woof: "Hau! Oto zdjęcie psa (eh, koty lepsze)"
        },
        eval: {
            tokenLeak: "Ups token wykradziony!",
            tooLongText: "Tekst zbyt długi! Wysyłanie wyniku do konsoli...",
            success: "Eval został ukończony bez żadnych błędów!",
            failure: "Ups występuje błąd",
            input: "Wejście: ",
            output: "Wyjście: "
        },
        fox: {
            //this command oes not have any text, next
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
        hug: {
            hugs: "**{0}**przytula **{1}**" //{0}=message author tag  {1}=mentioned user
        },
        kick: {
            usage: "\nUżytkowanie: ``kick <member> [reason]``",
            noKickPerm: "Nawet nie próbuj wyrzucać użytkowników. Dzięki mnie nie możesz wyrzucać użytkowników samemu...",
            botCantKick: "Wygląda na to, że nie mogę wyrzucać użytkowników. Proszę daj mi uprawnienie KICK_MEMEBERS.",
            noArgs: "Nie mogę wyrzucić nikogo. Proszę uwzględnij kogoś, kogo chcesz wyrzucić...",
            noUser: "Przepraszam, ale nie mogę go znaleźć...",
            serverOwner: "Próbujesz wyrzucić właściciela? Niezła próba ale to tak nie działa.",
            notKickable: "Nie wygląda na to, że mogę go wyrzucić. Upewnij się, że jedna z moich ról jest wyżej od najwyższej roli tego użytkownika.",
            youreKicked: "Właśnie zostałeś wyrzucony **{0}**przez **{1}**", //{0}=guild name  {1}=message author tag
            noReason: "Brak powodu",
            memberKicked: "Użytkownik pomyślnie z tąd wyrzucony!"
        },
        kiss: {
            kisses: "**{0}** całuje **{1}** OwO"//{0}=message author tag  {1}=mentioned user
        },
        language: {
            usage: "__Użytkowanie:__\n-Aby zdobyć listę moich języków: ``language list``\n-Aby zmienić mój język: ``language <język>``",
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
            usage: "\n__Użytkowanie:__\n-Aby zapętlić liste: ``loop queue``\n-Aby zapętlić utwór: ``loop track``\n-Aby wyłączyć zapętlanie: ``loop disable``", //
            queue: "Od teraz lista będzie się zapętlać! Ciesz się muzyką~!",
            track: "Od teraz utwór będzie się zapętlać! Ciesz się muzyką~",
            disable: "Zapętlanie wyłączone!"
        },
        meme: {
            imgurl: "[Link do tego świetnego mema]({0})" //{0}=image url
        },
        neko: {
            heresANeko: "Oto neko dla **{0}**", //{0}=msg.author
            grabbedVia: "Neko wzięte z weebs4life.ga api (jest sfw)"
        },
        nowplaying: {
            //no string on this one, next
        },
        pat: {
            pats: "**{0}** głaszcze **{1}**"//{0}=message author tag  {1}=mentioned user
        },
        pause: {
            alreadyPaused: "Ups wygląda na to, że ten utwór już jest zapauzowany!",
            success: "Pomyślnie zapauzowano utwór! Użyj komendy **resume** aby odpauzować utwór!"
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
        purge: {
            noPerms: "Wygląda na to, że nie możesz zarządzać wiadomościami tutaj... Proszę spróbuj ponownie kiedy będziesz mógł",
            noArgs: "Nie mogę usunąć niczego. Użytkowanie: ``purge <liczba między 2 i 99>``",
            invalidAmount: "Niepoprawna ilość wiadomości! Użytkowanie: ``purge <liczba między 2 i 99>``",
            success: "Udało się!"
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
            noArgs: "Użytkowanie: ``seek <miejsce (przykład: 4m 2s)>``",
            success: "Udało się przejść na daną minutę!"
        },
        serverinfo: {
            name: "Nazwa Serwera",
            id: "ID Serwera",
            region: "Region Serwera",
            membercount: "Liczba Użytkowników",
            owner: "Właściciel Serwera",
            createdat: "Stworzony w",
            info: "Info Serwera"
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
        slap: {
            slaps: "**{0}** uderza **{1}**"
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
        tag: {
            noPerms: "Potrzebujesz uprawnienia MANAGE_GUILD, żeby to zrobić",
            create: {
                noTitle: "Musisz podać tytuł tagu! (jedno słowo bez spacji)",
                noDesc: "Musisz podać co będzie w tagu!",
                descTooBig: "Przepraszam, ale ilość znaków w tagu musi być mniejsza od 2 tyś. znaków",
                success: "Tag pomyślnie stworzony!"
            },
            delete: {
                noName: "Musisz podać nazwe tagu aby go usunąć!",
                invalidTag: "Ten tag nie istnieje!",
                success: "Tag pomyślnie usunięty!"
            },
            list: {
                noTag: "Żaden tag nie został stworzony na tym serwerze!",
                list: "Lista tagów na tym serwerze:"
            },
            usage: "Użytkowanie: `tag <create/delete/list>`"
        },
        userinfo: {
            usage: "Użytkowanie: ``userinfo [@wzmianka]",
            tag: "Nazwa/Tag",
            badges: "Odznaki",
            id: "ID użytkownika",
            nick: "Nick",
            noNick: "Brak Nicku",
            bot: "Bot?",
            yes: "Tak",
            no: "Nie",
            joined: "Dołączył w",
            boost: "Boostuje serwer",
            boostSince: "Boostuje serwer od",
            notBoosting: "Nie boostuje",
            perms: "Uprawnienia",
            roles: "Lista ról",
            noRoles: "Brak ról",
            tooMuchRoles: "Za dużo ról do wyświetlenia spróbuj: ``userinfo @użytkownik role list``!",
            tooMuchRoles2: "Ten użytkownik ma zbyt dużo ról do wyświetlenia!",
            info: "Info o Użytkowniku"
        },
        volume: {
            current: "Obecna głośność: **{0}**",
            noArgs: "Musisz podać nową głośność",
            invalid: "Musisz podać nową głośność pomiędzy 1 i 250!",
            success: "Głośność ustawiona na **{0}**!"
        },
        weather: {
            usage: "Użytkowanie: ``weather <C/F> <nazwa miasta>``",
            for: "Pogoda dla **{0}**",
            timezone: "Strefa czasowa",
            type: "Typ jednostki",
            temp: "Temperatura",
            feels: "Odczuwalna",
            wind: "Wiatry",
            hum: "Wilgotność"
        }
    },
    msgevent: {
        //used in src/events/msg.js
        prefix: "Mój prefix na serwerze to **{0}**, wpisz ``{0}pomoc`` aby zdobyć listę komend!", //{0}=prefix
        error: "Upsi dupsi, coś poszło nie tak! Możesz znaleźć błąd poniżej. Jeśli nie wiesz jak obejść ten problem pójdź na mój serwer wsparcia i zgłoś problem!"
    },
    aliases: {
        //"the alias you want:"the english command name"
        pfp: "avatar",
        av: "avatar"
    },
    commandInvertedNames: {
        //"translated name:"original name"
        avatar: "avatar",
        ban: "ban",
        bassboost: "bassboost",
        cat: "kot",
        dog: "pies",
        eval: "eval",
        fox: "lis",
        help: "pomoc",
        hug: "przytul",
        kiss: "pocałuj",
        kick: "wyrzuć",
        language: "język",
        loop: "pętla",
        meme: "mem",
        neko: "neko",
        nowplaying: "terazgra",
        ownerprefix: "prefixwłaściciela",
        pat: "głaskanie",
        pause: "pauza",
        ping: "ping",
        play: "graj",
        prefix: "prefix",
        purge: "wyczyść",
        queue: "lista",
        reload: "przeładuj",
        reminder: "reminder",
        restart: "restartuj",
        resume: "wznów",
        seek: "przeszukuj",
        serverinfo: "infoserwera",
        serverlist: "listaserwerów",
        shell: "powłoka",
        shuffle: "tasowanie",
        skip: "pomiń",
        slap: "walnij",
        stats: "statystyki",
        stop: "stop",
        tag: "tag",
        userinfo: "infoużytkownika",
        volume: "głośność",
        weather: "pogoda"
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