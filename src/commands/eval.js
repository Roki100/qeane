module.exports = {
  name: 'eval',
  ownerOnly: true,
  category: "owner",
  async execute(client, msg) {
    if (!msg.args.join(" ")) return msg.reply(`${msg.author.tag}: ` + "plz send args")
    try {
      if (msg.args[0] === "inspect") {
        let evaled = require('util').inspect(await eval(msg.args.slice(1).join(" ")));
        if (evaled) {
          if (evaled.length > 2000) evaled = evaled.sliceEvery(2000)[0]
          if (evaled.includes(client.token)) evaled = evaled.replace(client.token, "no plz, dont leak token")
        }
        msg.reply(evaled, { code: "js" })
      } else {
        let evaled = await eval(msg.args.join(" "));
        if (evaled) {
          if (evaled.length > 2000) evaled = evaled.sliceEvery(2000)[0]
          if (evaled.includes(client.token)) evaled = evaled.replace(client.token, "no plz, dont leak token")
        }
        msg.reply(`${msg.author.tag}: ` + evaled)
      }
      z

    } catch (err) {
      console.log(err)
      msg.reply(`${msg.author.tag}: ` + err)
    };

  },
};
