//dont touch this
function swap(json) {
    var ret = {};
    for (var key in json) {
        ret[json[key]] = key;
    }
    return ret;
}
let obj = {
    name: "francais",
    commands: {
        //do NOT touch string/command names, just translate the text after the :s
        bassboost: {
            invalidNumber: "Tu dois me donner un nombre entre -8 et 8 pour bassbooster! ATTENTION AUX OREILLES, C'EST PUISSANT",
            success: "Bassboosté! Attends quelques secondes le temps que ca s'applique!"
        },
        eval: {
            tokenLeak: "Une information de haute sécurité à été devoilée",
            tooLongText: "Trop long! Envoi des résultats dans la console...",
            success: "Code éxécuté!",
            failure: "Une erreur est survenue",
            input: "Entrée:",
            output: "Sortie:"
        },
        help: {
            //categories names, they are only used in the help command lol
            fun: "Fun",
            help: "Aide",
            info: "Infos",
            owner: "Secret ;)",
            music: "Musique",
            moderation: "Modération",
            setup: "Setup",
            utility: "Utilité",
            //links is not a category
            links: "Liens importants",
            invite: "Invite moi!",
            support: "Serveur Discord",
            vote: "Vote pour Qeane",
            github: "GitHub",
            list: "Liste des commandes!",
            datsalist: "Voici une liste de mes commandes:",
            c: "Créé par Lumap#0001 | traduit en francais par Lumap#0001" //put your discord tag ofc
        },
        language: {
            usage: "__Utilisation:__\n-Pour obtenir la liste de mes langues: ``langues list``\n-Pour changer ma langue: ``langue <langue>``",
            lackOfPermissions: "Demande à tes admins si tu peux changer ma langue ici",
            invalidLanguage: "Cette langue n'existe pas ou je n'ai pas encore été traduit dans cette langue!",
            success: "Langue changée en **{0}**!" //{0}=language
        },
        loop: {
            types: {
                queue: "queue",
                track: "son",
                disable: "désactiver"
            },
            usage: "\n__Utilisation:__\n-Pour répéter la queue: ``répéter queue``\n-Pour répéter la chanson en cours: ``répéter chanson``\n-Pour désactiver la répétition: ``répéter désactiver``", //
            queue: "La queue (ne sortez pas ca de son contexte, petit chenapans) va maintenant se répéter!",
            track: "La chanson en cours va maintenant jouer en boucle!",
            disable: "Répétition désactivée"
        },
        nowplaying: {
            //no string on this one, next
        },
        pause: {
            alreadyPaused: "D'accord, le son en cours a été mis en pause (mais il etait déja en pause)",
            success: "Son mis en pause! Utilise la commande **reprendre** pour le reprendre! "
        },
        ping: {
            pong: "Ping? Pong! **{0}**ms!" //{0}=ws pings
        },
        play: {
            noSong: "Tu ne m'a pas donné de son à jouer",
            noSongFound: "Son introuvabe!",
            queueEmpty: "La queue (ne pas sortir de son contexte, bordel) est vide, j'ai donc quitté le salon vocal",
            playlist: {
                added: "Playlist ajoutée",
                desc: "Titre: **{0}**\nSons: **{1}**" //no explanation needed i guess
            },
            track: {
                added: "Son ajouté",
                desc: "Nom: **[{0}]({1})**\nLongeur: **{2}**\nArtiste: **{3}**"
            },
            player: {
                disconnect: "Merci de ne pas me déconnecter d'un salon vocal, la commande **stop** existe...",
                error: "Quelque chose ne s'est pas bien passé comme prévu: {0}",
                nodeDisconnect: "Ah, une node s'est déconnéctée. Merci de rejoindre mon serveur pour reporter cette erreur!"
            }
        },
        prefix: {
            noPerms: "Demande à tes admins si tu peux changer mon préfixe",
            noArgs: "Si tu veux changer mon préfixe, donne-en moi un!",
            success: "Préfixe changé! Maintenant, mon préfixe est **{0}**" //{0}=prefix
        },
        queue: {
            nothing: "Rien",
            desc: "**__Son en cours :__** \n[{0}]({1}) ([ici]({2}))\n\n**__Suivant(s) :__** \n**{3}**",
            more: "Encore {0} sons..."
        },
        reload: {
            noArgs: "Donne-moi une commande à recharger!",
            noCommand: "Commande pas trouvée!",
            success: "La commande **{0}** à été rechargée!"
        },
        restart: {
            restarting: "Redémarage de Qeane..."
        },
        resume: {
            alreadyPlaying: "Le son en cours n'est pas mis sur pause!",
            success: "Son redémarré!"
        },
        seek: {
            noArgs: "Utilisation: ``avancer <position (ex: 4m 2s)>``",
            success: "Position changée!"
        },
        serverlist: {
            sent: "Liste des serveurs envoyé en MP!"
        },
        shell: {
            noArgs: "Tu dois me donner une commande bash à executer!",
            tooBig: "Résultat trop grand! Je l'ai envoyé dans la console."
        },
        shuffle: {
            success: "L'arrangement de la queue a été rangé aléatoirement!"
        },
        skip: {
            success1: "Son en cours passé!",
            invalidAmount: "Le nombre des sons a passer que tu viens de me donner est invalide",
            success2: "SPassé {0} sons!"
        },
        stats: {
            collecting: "Collecte des statistiques...",
            stats: "Statistiques de Qeane",
            uptime: "Uptime:",
            servers: "Serveurs:",
            cores: "CPU Cores:",
            usage: "Utilisation du CPU:",
            ram: "Utilisation de la RAM:"
        },
        stop: {
            //no strings, next
        },
        volume: {
            current: "Volume: **{0}**",
            noArgs: "Donne-moi un nouveau volume, mais sous forme de chiffres stp",
            invalid: "Tu dois me donner un volume entre 1 et 250!",
            success: "Volume changé à **{0}**!"
        }
    },
    msgevent: {
        //used in src/events/msg.js
        prefix: "Mon préfixe dans ce serveur est **{0}**, envoie ``{0}help`` pour obtenir mes commandes!", //{0}=prefix
        error: "Quelque chose ne s'est pas bien passé! Merci de contacter mon créateur pour qu'il résolve cette erreur"
    },
    aliases: {
        //"the alias you want:"the english command name"
        bb: "bassboost",
        h: "help",
        lang: "language",
        j: "play",
        q: "queue",
        terminal: "shell",
        exec: "shell",
        ui: "userinfo",
        pa: "skip",
        st: "stop",
        q: "queue",
        enc: "nowplaying",
        vol: "volume"
    },
    commandInvertedNames: {
        //"translated name:"original name"
        bassboost: "bassboost",
        eval: "eval",
        help: "aide",
        language: "langue",
        loop: "répéter",
        nowplaying: "encours",
        ownerprefix: "ownerprefix",
        pause: "pause",
        ping: "ping",
        play: "jouer",
        prefix: "préfixe",
        queue: "queue",
        reload: "recharger",
        restart: "redémarrer",
        resume: "reprendre",
        seek: "avancer",
        serverlist: "serverlist",
        shell: "shell",
        shuffle: "désorganiser",
        skip: "passer",
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
        queueEmpty: "Aucun son est en cours dans ce serveur",
        noVc: "Va dans un salon vocal pour faire ca",
        notSameVc: "Va dans mon salon vocal pour faire ca",
        live: "Live",
        np: {
            title: "Son en cours:",
            desc: "Nom: **[{0}]({1})**\nTemps: **{2}**\nArtiste: **{3}**"
        }
    }
}
obj.commandNames = swap(obj.commandInvertedNames)
module.exports = obj