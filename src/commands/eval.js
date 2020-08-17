module.exports = {
  name: 'eval',
  ownerOnly: true,
  category: "owner",
  async execute(client, msg) {
    let str = client.languages.get(msg.guild.language).commands.eval
    if (!msg.args.join(" ")) return msg.reply(`${msg.author.tag}: ` + "plz send args")
    let evaled;
    try {
      evaled = await eval(msg.args.join(" "))
      if (evaled) {
        if (evaled.length > 1950) evaled = require('util').inspect(evaled);
        if (evaled.length > 1950) evaled = evaled.sliceEvery(1950)[0]
        if (evaled.includes(client.token)) evaled = evaled.replace(client.token, "no plz, dont leak token")

      }
      msg.reply(`${msg.author.tag}: ` + evaled, { code: "js" })
    } catch (err) {
      console.log(err)
      msg.reply(`${msg.author.tag}: ` + err)
    };

  },
};
