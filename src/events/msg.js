module.exports = async (client, msg) => {
  if (msg.content === '' || !msg.guild || msg.channel.type === "dm" || msg.author.bot || msg.webhookID) return;
  let prefix = client.db.get("prefix." + msg.guild.id) || client.config.prefix
  let language = client.db.get(`language.${msg.guild.id}`)
  if (!language) {
    client.db.set(`language.${msg.guild.id}`, "english")
    language = "english"
  }
  msg.guild.language = language

  if (msg.content === `<@!${client.user.id}>`) return msg.reply(`${msg.author.tag}: ` + client.languages.get(msg.guild.language).msgevent.prefix
    .replace("{0}", prefix)
    .replace("{0}", prefix))
  if (msg.content.startsWith(`<@!${client.user.id}>`)) prefix = `<@!${client.user.id}>`
  if (!msg.content.toLowerCase().startsWith(prefix.toLowerCase())) return;
  const commandName = msg.content.slice(prefix.length).trim().split(' ')[0].toLowerCase()
  msg.args = msg.content.slice(prefix.length).trim().split(' ').slice(1).join(' ').trim().split(' ')
  if (client.db.has(`tags.${msg.guild.id}.${commandName}`)) {
    if (!client.config.ownerID.includes(msg.author.id)) {
      if (!msg.member.permissions.has("MANAGE_GUILD")) return;
    }
    if (msg.mentions.members.first()) {
      if (msg.args.includes("-d")) msg.delete()
      let x = await msg.reply(`${msg.author.tag}: ` + "", {
        embed: {
          description: client.db.get(`tags.${msg.guild.id}.${commandName}`),
          color: 0xe74c3c
        }
      })
      x.edit(`<@!${msg.mentions.members.first().user.id}>`, {
        embed: x.embeds[0]
      })
    } else {
      if (msg.args.includes("-d")) msg.delete()
      msg.reply(`${msg.author.tag}: ` + "", {
        embed: {
          description: client.db.get(`tags.${msg.guild.id}.${commandName}`),
          color: 0xe74c3c
        }
      })
    }
  }
  let str = client.languages.get(language)
  try {
    var c = eval(`str.commandNames.${commandName}`) || eval(`str.aliases.${commandName}`)
  } catch {
    return;
  }
  if (!c) return;
  const command = client.commands.get(c)
  if (command.ownerOnly) {
    if (!client.config.ownerID.includes(msg.author.id)) return;
  }
  eval(`msg.str = str.commands.${command.name}`)
  try {
    client.logs.send(`Command ${command.name} executed in ${msg.guild.name} (${msg.guild.id}) by ${msg.author.tag} (${msg.author.id}).${msg.args[0] ? `\nArgs: ${msg.args.join(' ')}` : "\nNo args"}`)
    await command.execute(client, msg)
  } catch (err) {
    let error = {
      embed: {
        color: client.functions.randomColor(),
        description: client.languages.get(msg.guild.language).msgevent.error,
        fields: [{ name: 'Error :', value: `\`\`\`js\n${err}\`\`\`` }]
      }
    }

    msg.reply(`${msg.author.tag}: ` + "", error)
    console.error(err)
    client.errorWebhook.send("ERROR: " + err)
  }

}
