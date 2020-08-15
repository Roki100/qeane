module.exports = {
    name: 'purge',
    category: "moderation",
    async execute(client, msg) {
        let str = client.languages.get(msg.guild.language).commands.purge
        if (!msg.member.permissions.has("MANAGE_MESSAGES")) return msg.reply(str.noPerms)
        if (!msg.args.join(' ')) return msg.reply(str.noArgs)

        let amount = msg.args[0]
        if (isNaN(amount)) return msg.reply(str.invalidAmount)
        amount = Number(amount)
        if (!amount || amount < 2 || amount > 100) return msg.reply(str.invalidAmount)
        const fetched = await msg.channel.messages.fetch({
            limit: amount,
        });
        msg.channel.bulkDelete(fetched)
        msg.reply(str.success).then(m => m.delete({ timeout: 5000 }))
    },
}
