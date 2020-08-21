module.exports = {
  name: "serverinfo",
  aliases: ['si'],
  category: "info",
  async execute(client, msg) {
    let str = client.languages.get(msg.guild.language).commands.serverinfo
    let args = msg.args
    let guild = msg.guild
    let owner = await guild.members.fetch({ id: guild.ownerID })

    let fields = [
      { name: str.name, value: guild.name, inline: true },
      { name: str.id, value: guild.id, inline: true },
      { name: str.region, value: guild.region, inline: true },
      { name: str.membercount, value: guild.memberCount, inline: true },
      { name: str.owner, value: owner.nickname ? `${owner.nickname} (${owner.user.tag})` : owner.user.tag, inline: true },
      { name: str.createdat, value: guild.createdAt, inline: true },
    ]

    if (args.join(' ')) {
      args = args.join(' ').toLowerCase()
      for (let i = 0; i < fields.length; i++) {
        let f = fields[i]
        if (args === f.name.toLowerCase()) {

          return msg.reply(`${msg.author.tag}: ` + "", { embed: { title: f.name, description: f.value } })

        }
      }
    }
    await msg.reply(`${msg.author.tag}: ` + "", {
      embed: {
        title: str.info,
        thumbnail: { url: guild.iconURL({ dynamic: true }) },
        fields: fields
      }
    })
  }
}
