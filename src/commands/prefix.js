module.exports = {
  category: "setup",
  description: "Changes the prefix for this server",
  name: "prefix",
  usage: "prefix <new prefix>",
  async execute(client, msg) {
    if (!client.config.ownerID.includes(msg.author.id) && !msg.member.permissions.toArray().includes("ADMINISTRATOR")) return await msg.reply(`You need to be Administrator to do this!`);
    if (!msg.args.join(' ')) return await msg.reply(`Usage: ${this.usage}`)
    client.db.set(`${msg.guild.id}.prefix`, msg.args.join(' '))
    await msg.reply(`Prefix succesfully changed to **${msg.args.join(' ')}**`)
  }
}