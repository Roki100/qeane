module.exports = {
    name: "userinfo",
    category: "info",
    async execute(client, msg) {
        let str = client.languages.get(msg.guild.language).commands.userinfo
        let args = msg.args
        let member;
        if (args.join(' ')) {
            member = msg.mentions.members.first()
        } else {
            member = msg.member
        }

        if (!member) return msg.reply(`${msg.author.tag}: ` + str.usage)
        let user = member.user
        user = await client.users.fetch({ id: user.id })
        let badges = require('../functions/badges')(member)
        let roles = member.roles.cache.filter(r => r.id !== msg.guild.id).map(r => r).join(', ')
        if (!roles[0]) roles = str.noRole
        let permissions = member.permissions.toArray().map(p => p).join(', ')
        let fields = [
            { name: str.tag, value: user.tag, inline: true },
            { name: str.badges, value: badges, inline: true },
            { name: str.id, value: user.id, inline: true },
            { name: str.nick, value: member.nickname || str.noNick, inline: true },
            { name: str.bot, value: user.bot ? str.yes : str.no, inline: true },
            { name: str.joined, value: new Date(member.joinedTimestamp), inline: true },
            { name: str.boost, value: member.premiumSinceTimestamp ? str.yes : str.no, inline: true },
            { name: str.boostSince, value: member.premiumSinceTimestamp ? new Date(member.premiumSinceTimestamp) : stop.notBoosting, inline: true },
            { name: str.perms, value: permissions, inline: false },
            { name: str.roles, value: roles.length > 1024 ? str.tooMuchRoles : roles, inline: roles.length > 1024 ? true : false },
        ]

        if (args[1]) {
            args = args.slice(1).join(' ').toLowerCase()
            for (let i = 0; i < fields.length; i++) {
                let f = fields[i]
                if (args === f.name.toLowerCase()) {
                    if (args === str.roles) {
                        return msg.reply(`${msg.author.tag}: ` + "", { embed: { title: f.name, description: roles.length > 2000 ? str.tooMuchRoles2 : roles } })
                    } else { return msg.reply(`${msg.author.tag}: ` + "", { embed: { title: f.name, description: f.value } }) }
                }
            }
        }
        msg.reply(`${msg.author.tag}: ` + "", { embed: { title: str.info, fields: fields, thumbnail: { url: member.user.avatarURL({ size: 2048, format: "png" }) } } })
    }
}
