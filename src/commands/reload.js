module.exports = {
    name: 'reload',
    ownerOnly: true,
    category: "owner",
    async execute(client, msg) {
        let str = client.languages.get(msg.guild.language).commands.reload,
            commandStr = client.languages.get(msg.guild.language)
        if (!msg.args.join(' ')) return msg.reply(`${msg.author.tag}: ` + str.noArgs);
        let c;
        try {
            c = eval(`commandStr.commandNames.${msg.args[0]}`) || eval(`commandStr.aliases.${msg.args[0]}`)
        } catch {
            return;
        }
        if (!c) return msg.reply(`${msg.author.tag}: ` + str.noCommand);
        c = client.commands.get(c)
        delete require.cache[require.resolve(`./${c.name}.js`)];
        client.commands.delete(c.name)
        client.commands.set(c.name, require(`./${c.name}.js`))
        msg.reply(`${msg.author.tag}: ` + str.success
            .replace("{0}", c.name))
    }
}