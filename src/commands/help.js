module.exports = {
    name: 'help',
    category: "info",
    async execute(client, msg) {
        let commandNames = client.languages.get(msg.guild.language).commandInvertedNames
        let commands;
        if (!client.config.ownerID.includes(msg.author.id)) {
            commands = client.commands.filter(c => !c.ownerOnly)
        } else {
            commands = client.commands
        }
        let fields = [], owner = [], music = [], info = [], setup = []
        commands.forEach(c => {
            eval(`${c.category}.push("**${eval(`commandNames.${c.name}`)}**")\n${c.category}.sort()`)
        })
        fields.push({ name: msg.str.info, value: info.join(', '), inline: true })
        if (client.config.ownerID.includes(msg.author.id)) fields.push({
            name: msg.str.owner,
            value: owner.join(', '),
            inline: true
        })
        fields.push({ name: msg.str.music, value: music.join(', '), inline: true })
        fields.push({ name: msg.str.setup, value: setup.join(', '), inline: true })
        fields.push({
            name: msg.str.links,
            value: `[${msg.str.invite}](https://discord.com/api/oauth2/authorize?client_id=742670668646055967&permissions=3238918&scope=bot) | [${msg.str.support}](https://discord.gg/nXg4Yh7) | [${msg.str.vote}](https://top.gg/bot/742670668646055967/vote) | [${msg.str.github}](https://github.com/lumap/qeane)`
        })
        msg.reply(`${msg.author.tag}: ` + "", {
            embed: {
                color: client.functions.randomColor(),
                author: {
                    icon_url: client.functions.avatar(msg.guild.me),
                    name: msg.str.list
                },
                description: msg.str.datsalist,
                fields: fields,
                footer: {
                    text: msg.str.c
                }
            }
        })


    }
}
