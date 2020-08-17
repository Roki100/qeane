
module.exports = {
  name: 'avatar',
  category: "utility",
  async execute(client, msg) {
    let user;
    if (msg.args.join(' ')) {
      user = await msg.mentions.users.first()
    } else { user = msg.author }
    let avatar = client.functions.avatar(user)
    msg.reply(`${msg.author.tag}: ` + "", {
      embed: {
        color: client.functions.randomColor(),
        image: {
          url: avatar
        },
        description: client.languages.get(msg.guild.language).commands.avatar.clickToDownload
          .replace("{0}", avatar)
      }
    })
  },
};
