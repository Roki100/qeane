module.exports = {
<<<<<<< HEAD
    name: "prefix",
    category: "setup",
    async execute(client, msg) {
        let str = client.languages.get(msg.guild.language).commands.prefix
        if (!msg.member.permissions.toArray().includes("ADMINISTRATOR")) return msg.reply(`${msg.author.tag}: ` + str.noPerms);
        if (!msg.args.join(' ')) return msg.reply(`${msg.author.tag}: ` + str.noArgs)
        client.db.set("prefix." + msg.guild.id, msg.args.join(' '))
        msg.reply(`${msg.author.tag}: ` + str.success
            .replace("{0}", msg.args.join(' ')))
    }
=======
  name: "prefix",
  category: "setup",
  async execute(client, msg) {
    let str = client.languages.get(msg.guild.language).commands.prefix
    if (!msg.member.permissions.toArray().includes("ADMINISTRATOR")) return msg.reply(`${msg.author.tag}: ` + str.noPerms);
    if (!msg.args.join(' ')) return msg.reply(`${msg.author.tag}: ` + str.noArgs)
    client.db.set("prefix." + msg.guild.id, msg.args.join(' '))
    await msg.reply(`${msg.author.tag}: ` + str.success
      .replace("{0}", msg.args.join(' ')))
  }
>>>>>>> 0887b14624475e70c72a460e25b13d989dc7938d
}