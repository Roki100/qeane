module.exports = {
    aliases: ["h"],
    category: "info",
    description: "This command",
    name: 'help',
    usage: "help [command]",
    async execute(client, msg) {
        if (!msg.args[0]) {
            let commands;
            if (!client.config.ownerID.includes(msg.author.id)) {
                commands = client.commands.filter(c => !c.ownerOnly)
            } else {
                commands = client.commands
            }
            let fields = [], owner = [], music = [], info = [], setup = []
            commands.forEach(c => {
                eval(`${c.category}.push("**${c.name}${c.aliases ? ` (${c.aliases.join(', ')})` : ""}**")\n${c.category}.sort()`)
            })
            fields.push({ name: "Info", value: info.join(', '), inline: true })
            if (client.config.ownerID.includes(msg.author.id)) fields.push({
                name: "Owner",
                value: owner.join(', '),
                inline: true
            })
            fields.push({ name: "Setup", value: setup.join(', '), inline: true })
            fields.push({ name: "Music", value: music.join(', '), inline: false })
            fields.push({
                name: "Links",
                value: `[Invite](https://discord.com/api/oauth2/authorize?client_id=742670668646055967&permissions=3238918&scope=bot) | [Support Server](https://discord.gg/nXg4Yh7) | [Vote](https://top.gg/bot/742670668646055967/vote) | [GitHub](https://github.com/lumap/qeane)`
            })
            await msg.reply({
                embed: {
                    color: client.functions.randomColor(),
                    author: {
                        icon_url: "https://cdn.discordapp.com/avatars/742670668646055967/1d3fe1524721d8ea17e12f2df2c0aa46.png?size=2048",
                        name: "Qeane's help menu"
                    },
                    description: "This is a list of my commands. To know something about a specific command, do ``help [command name]``.",
                    fields: fields,
                    footer: {
                        text: "Created by Lumap#0001. Thanks to all contributors for their help^^"
                    }
                }
            })

        } else {
            let commandName = msg.args[0]
            let command = client.commands.get(commandName) || client.commands.get(client.aliases.get(msg.args[0]))
            if (!command || command.ownerOnly && !client.config.owners.includes(msg.author.id)) return await msg.send(`Command not found!`)
            await msg.reply({
                embed: {
                    color: client.functions.randomColor(),
                    author: {
                        icon_url: "https://cdn.discordapp.com/avatars/742670668646055967/1d3fe1524721d8ea17e12f2df2c0aa46.png?size=2048",
                        name: "Qeane's help menu"
                    },
                    description: `Help for the ${command.name} command`,
                    fields: [
                        { name: "Aliases", value: command.aliases ? command.aliases.join(', ') : "None", inline: true },
                        { name: "Description", value: command.description, inline: true },
                        { name: "Category", value: command.category, inline: true },
                        { name: "Usage", value: command.usage, inline: true }
                    ]
                },
                footer: {
                    text: "Syntax: < > = required, [ ] = optional"
                }
            })
        }
    }
}
