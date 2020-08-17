module.exports = {
  name: "prefix",
  category: "setup",
  async execute(client, msg) {
    let str = client.languages.get(msg.guild.language).commands.prefix
    if (!msg.member.permissions.toArray().includes("ADMINISTRATOR")) return msg.reply(`${msg.author.tag} ` + str.noPerms);
    if (!msg.args.join(' ')) return msg.reply(`${msg.author.tag} ` + str.noArgs)
    client.db.set("prefix." + msg.guild.id, msg.args.join(' '))
    msg.reply(`${msg.author.tag} ` + str.success
      .replace("{0}", msg.args.join(' ')))
  }
}