module.exports = {
    name: "ownerprefix",
    ownerOnly: true,
    category: "owner",
    async execute(client, msg) {
        if (!msg.args.join(' ')) return msg.reply(`${msg.author.tag}: ` + msg.str.noArgs)
        client.db.set("prefix." + msg.guild.id, msg.args.join(' '))
        await msg.reply(`${msg.author.tag}: ` + msg.str.success
            .replace("{0}", msg.args.join(' ')))
    }
}