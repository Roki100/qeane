module.exports = {
  name: 'language',
  category: "setup",
  async execute(client, msg) {
    if (!msg.member.permissions.toArray().includes("ADMINImsg.str.ATOR")) return await msg.reply(`${msg.author.tag}: ` + msg.str.lackOfPermissions);
    if (!msg.args.join(' ')) return await msg.reply(`${msg.author.tag}: ` + msg.str.usage)
    if (msg.args[0] === "list") {
      let langstr = [];
      client.languages.forEach(l => {
        langstr.push(`**${l.name}**`)
      })
      langstr = langstr.join(', ')
      await msg.reply(`${msg.author.tag}: ` + langstr)
      return;
    }
    let language = client.languages.get(msg.args.join(' '))
    if (!language) return await msg.reply(`${msg.author.tag}: ` + `${msg.str.invalidLanguage}\n${msg.str.usage}`)
    client.db.set("language." + msg.guild.id, msg.args.join(' '))
    msg.guild.language = language
    await msg.reply(`${msg.author.tag}: ` + msg.str.success.replace("{0}", msg.args.join(' ')))
  }
}