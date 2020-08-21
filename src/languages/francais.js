//dont touch this
function swap(json) {
    let ret = {};
    for (let key in json) {
        ret[json[key]] = key;
    }
    return ret;
}
let obj = {
    name: "francais",
    commands: {
        //do NOT touch string/command names, just translate the text after the :s
        avatar: {
            clickToDownload: "Clique [ici]({0}) pour télécharger cette pdp!" //{0}=avatar link
        },
        ban: {
            usage: "\nUtilisation: ``ban <@mention> [raison]``",
            noBanPerm: "Tu peux pas bannir, alors n'essaie meme pas de t'aider de moi pour le faire, nan mais...",
            botCantBan: "Ya un problème, je peux pas bannir dans ce serveur! Merci de m'en donner la permission.",
            noArgs: "Je peux pas bannir le vide... Mentionne moi quelqu'un à banir stp",
            noUser: "Je suis peut-être aveugle, mais je ne peux pas trouver cet utilisateur dans ce serveur.",
            serverOwner: "Pourquoi tu essaie de ban le créateur? Ca ne marchera pas...",
            notBannable: "Je ne peux pas le ban... Merci de faire en sorte qu'au moins un de mes rôles soit au dessus de son rôle le plus haut-gradé!",
            youreBanned: "Aïe, tu t'est fait bannir de **{0}** par **{1}**", //{0}=guild name  {1}=message author tag
            noReason: "Pas de raison",
            memberBanned: "OK, il est banni!"
        },
        bassboost: {
            invalidNumber: "Tu dois me donner un nombre entre -8 et 8 pour bassbooster! ATTENTION AUX OREILLES, C'EST PUISSANT",
            success: "Bassboosté! Attends quelques secondes le temps que ca s'applique!"
        },
        cat: {
            meow: "Miaou! Voici un chat (les chiens sont nuls)"
        },
        dog: {
            woof: "Ouaf! voici un chien (les chats sont les best)"
        },
        eval: {
            tokenLeak: "Une information de haute sécurité à été devoilée",
            tooLongText: "Trop long! Envoi des résultats dans la console...",
            success: "Code éxécuté!",
            failure: "Une erreur est survenue",
            input: "Entrée:",
            output: "Sortie:"
        },
        fox: {
            //this command oes not have any text, next
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
        hug: {
            hugs: "**{0}** fais un gros calin à **{1}**" //{0}=message author tag  {1}=mentioned user
        },
        kick: {
            usage: "\nUtilisaion: ``exclure <@mention> [raison]``",
            noKickPerm: "Nan, tu peux pas exclure quelqu'un, je ne vais pas t'aider",
            botCantKick: "Je ne peux pas exclure des gens ici! Merci de m'en donner la permission",
            noArgs: "Exclu personne.",
            noUser: "Je ne peux pas le trouver...",
            serverOwner: "tu essaie d'exclure le créateur? non",
            notKickable: "Je ne peux pas l'exclure... Merci de faire en sorte qu'au moins un de mes rôles soit au dessus de son rôle le plus haut-gradé!",
            youreKicked: "Aïe, tu t'est fait exclure de **{0}** par **{1}**", //{0}=guild name  {1}=message author tag
            noReason: "Pas de raison",
            memberKicked: "OK, il n'est plus ici!"
        },
        kiss: {
            kisses: "**{0}** fait un gros bisou à **{1}** OwO"//{0}=message author tag  {1}=mentioned user
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
        meme: {
            imgurl: "[Lien]({0})" //{0}=image url
        },
        neko: {
            heresANeko: "Voici une neko pour **{0}**", //{0}=msg.author
            grabbedVia: "Neko obtenue grâce à weebs4life.ga"
        },
        nowplaying: {
            //no string on this one, next
        },
        pat: {
            pats: "**{0}** est en train de faire un pat à **{1}**"//{0}=message author tag  {1}=mentioned user
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
        purge: {
            noPerms: "LJe ne peux pas suprimmer des messages ici...",
            noArgs: "Suprimmé 0 messages! Utilisation: ``purge <number between 2 and 99>``",
            invalidAmount: "Nombre invanile! Utilisation: ``purge <number between 2 and 99>``",
            success: "C'est un succés!"
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
        serverinfo: {
            name: "Nom du serveur",
            id: "ID du serveur",
            region: "Région du serveur",
            membercount: "Nombre de membres",
            owner: "créateur",
            createdat: "Créé le",
            info: "Informations sur le serveur"
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
        slap: {
            slaps: "**{0}** mets une gifle à **{1}**"
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
        tag: {
            noPerms: "Tu dois pouvoir gérer le serveur pour faire ca!",
            create: {
                noTitle: "Tu dois fournir un titre! (pas d'espaces)",
                noDesc: "Tu dois fournir une description!",
                descTooBig: "Je ne supporte pas les tags de plus de 2000 caractères!",
                success: "Tag créé!"
            },
            delete: {
                noName: "Donne-moi le nom d'un tag a suprimmer",
                invalidTag: "Ce tag n''xiste pas",
                success: "Tag suprimmé!"
            },
            list: {
                noTag: "Aucun tag n'a été créé dans ce serveur",
                list: "Liste des tags de ce serveur!"
            },
            usage: "Utilisation: `tag <create/delete/list>`"
        },
        userinfo: {
            usage: "Utilisation: ``userinfo [@mention]",
            tag: "Non/Tag",
            badges: "Badges",
            id: "ID",
            nick: "Surnom",
            noNick: "Pas de surnom",
            bot: "Bot?",
            yes: "Oui",
            no: "Non",
            joined: "A rejoint le",
            boost: "Booste?",
            boostSince: "Booste depuis le",
            notBoosting: "Ne booste pas",
            perms: "Permissions",
            roles: "Liste des roles",
            noRoles: "Pas de roles",
            tooMuchRoles: "Trop de roles! Essaie ``userinfo @user role list``!",
            tooMuchRoles2: "Trop de roles!",
            info: "Infos a propos de..."
        },
        volume: {
            current: "Volume: **{0}**",
            noArgs: "Donne-moi un nouveau volume, mais sous forme de chiffres stp",
            invalid: "Tu dois me donner un volume entre 1 et 250!",
            success: "Volume changé à **{0}**!"
        },
        weather: {
            usage: "Utilisation: ``météo <C/F> <Nom de la ville>``",
            for: "Météo pour **{0}**",
            timezone: "Fuseau horaire",
            type: "Type de température",
            temp: "Température",
            feels: "Ressenti",
            wind: "Vents",
            hum: "Humiditée"
        }
    },
    msgevent: {
        //used in src/events/msg.js
        prefix: "Mon préfixe dans ce serveur est **{0}**, envoie ``{0}help`` pour obtenir mes commandes!", //{0}=prefix
        error: "Quelque chose ne s'est pas bien passé! Merci de contacter mon créateur pour qu'il résolve cette erreur"
    },
    aliases: {
        //"the alias you want:"the english command name"
        pdp: "avatar",
        av: "avatar",
        b: "ban",
        bb: "bassboost",
        h: "help",
        k: "kick",
        lang: "language",
        j: "play",
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
        cat: "chat",
        dog: "chien",
        eval: "eval",
        fox: "renard",
        help: "aide",
        hug: "calin",
        kiss: "bisou",
        kick: "exclure",
        language: "langue",
        loop: "répéter",
        meme: "meme",
        neko: "neko",
        nowplaying: "encours",
        ownerprefix: "ownerprefix",
        pat: "pat",
        pause: "pause",
        ping: "ping",
        play: "jouer",
        prefix: "préfixe",
        purge: "purge",
        queue: "queue",
        reload: "recharger",
        reminder: "reminder",
        restart: "redémarrer",
        resume: "reprendre",
        seek: "avancer",
        serverinfo: "serverinfo",
        serverlist: "serverlist",
        shell: "shell",
        shuffle: "désorganiser",
        skip: "passer",
        slap: "frapper",
        stats: "stats",
        stop: "stop",
        tag: "tag",
        userinfo: "userinfo",
        volume: "volume",
        weather: "météo"
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