module.exports = {
  name: "prefix",
  category: "setup",
  async execute(client, msg) {
    if (!msg.member.permissions.toArray().includes("ADMINImsg.str.ATOR")) return await msg.reply(`${msg.author.tag}: ` + msg.str.noPerms);
    if (!msg.args.join(' ')) return await msg.reply(`${msg.author.tag}: ` + msg.str.noArgs)
    client.db.set("prefix." + msg.guild.id, msg.args.join(' '))
    await msg.reply(`${msg.author.tag}: ` + msg.str.success
      .replace("{0}", msg.args.join(' ')))
  }
}