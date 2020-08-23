module.exports = {
    name: 'reload',
    ownerOnly: true,
    category: "owner",
    async execute(client, msg) {
        let commandstr = client.languages.get(msg.guild.language)
        if (!msg.args.join(' ')) return await msg.reply(`${msg.author.tag}: ` + msg.str.noArgs);
        let c;
        try {
            c = eval(`commandstr.commandNames.${msg.args[0]}`) || eval(`commandstr.aliases.${msg.args[0]}`)
        } catch {
            return;
        }
        if (!c) return await msg.reply(`${msg.author.tag}: ` + msg.str.noCommand);
        c = client.commands.get(c)
        delete require.cache[require.resolve(`./${c.name}.js`)];
        client.commands.delete(c.name)
        client.commands.set(c.name, require(`./${c.name}.js`))
        await msg.reply(`${msg.author.tag}: ` + msg.str.success
            .replace("{0}", c.name))
    }
}