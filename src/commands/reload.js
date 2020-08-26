module.exports = {
    category: "owner",
    description: "Reloads a command",
    name: 'reload',
    ownerOnly: true,
    usage: "reload <command name>",
    async execute(client, msg) {
        if (!msg.args.join(' ')) return await msg.reply(`${msg.author.tag}: Please provide a command name!`);
        let c = client.commands.get(msg.args[0]) || client.commands.get(client.aliases.get(msg.args[0]))
        if (!c) return await msg.reply(`${msg.author.tag}: Command not found!`);
        delete require.cache[require.resolve(`./${c.name}.js`)];
        client.commands.delete(c.name)
        client.commands.set(c.name, require(`./${c.name}.js`))
        await msg.react("👍")
    }
}