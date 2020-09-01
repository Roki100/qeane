module.exports = async (client, msg) => {
  if (msg.content === '' || !msg.guild || msg.channel.type === "dm" || msg.author.bot || msg.webhookID) return;
  if (!client.db) return;
  let prefix = client.db.get(`${msg.guild.id}.prefix`) || client.config.prefix
  if (msg.content === `<@!${client.user.id}>` || msg.content === `<@${client.user.id}>`) return msg.send(`${msg.author.tag}: Hi! I am Qeane, a cool music bot with a lot of useful features! My prefix here is **${prefix.replace("\\", "\\\\")}**, so type **${prefix.replace("\\", "\\\\")}help** to get a command list!`)
  if (msg.content.startsWith(`<@!${client.user.id}>`)) prefix = `<@!${client.user.id}>`
  if (msg.content.startsWith(`<@${client.user.id}>`)) prefix = `<@${client.user.id}>`
  if (!msg.content.toLowerCase().startsWith(prefix.toLowerCase())) return;
  const commandName = msg.content.slice(prefix.length).trim().split(' ')[0].toLowerCase()
  msg.args = msg.content.slice(prefix.length).trim().split(' ').slice(1).join(' ').trim().split(' ')
  const c = client.commands.get(commandName) || client.commands.get(client.aliases.get(commandName))
  if (!c) return;
  if (c.ownerOnly) {
    if (!client.config.ownerID.includes(msg.author.id)) return;
  }
  try {
    client.logs.send(`Command ${c.name} executed in ${msg.guild.name} (${msg.guild.id}) by ${msg.author.tag} (${msg.author.id}).${msg.args[0] ? `\nArgs: ${msg.args.join(' ')}` : "\nNo args"}`)
    await c.execute(client, msg)
  } catch (err) {
    let error = {
      embed: {
        color: client.functions.randomColor(),
        description: "Something terribly wrong happened!",
        fields: [{ name: 'Error :', value: `\`\`\`js\n${err}\`\`\`` }]
      }
    }

    msg.send(`${msg.author.tag}: `, error)
    console.error(err)
    client.errorWebhook.send("ERROR: " + err)
  }

}
