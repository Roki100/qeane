module.exports = {
  name: 'language',
  category: "setup",
  async execute(client, msg) {
    let str = client.languages.get(msg.guild.language).commands.language
    if (!msg.member.permissions.toArray().includes("ADMINISTRATOR")) return msg.reply(`${msg.author.tag} ` + str.lackOfPermissions);
    if (!msg.args.join(' ')) return msg.reply(`${msg.author.tag} ` + str.usage)
    if (msg.args[0] === "list") {
      let langstr = [];
      client.languages.forEach(l => {
        langstr.push(`**${l.name}**`)
      })
      langstr = langstr.join(', ')
      msg.reply(`${msg.author.tag} ` + langstr)
      return;
    }
    let language = client.languages.get(msg.args.join(' '))
    if (!language) return msg.reply(`${msg.author.tag} ` + `${str.invalidLanguage}\n${str.usage}`)
    client.db.set("language." + msg.guild.id, msg.args.join(' '))
    msg.guild.language = language
    msg.reply(`${msg.author.tag} ` + str.success.replace("{0}", msg.args.join(' ')))
  }
}