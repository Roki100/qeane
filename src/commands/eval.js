const dual = require('@tafina/dualfm2')

const l = dual.listeners();
const lp = dual.listeners_peak();
const now = dual.nowplaying();
const artist = dual.artist();

const nowp = dual.nowplaying() + ' - ' + dual.artist()
const bobby = "DJ Bobby - https://dualfm.net"
module.exports = {
  name: 'eval',
  ownerOnly: true,
  category: "owner",
  async execute(client, msg) {
    let str = client.languages.get(msg.guild.language).commands.eval
    try {
      if (msg.args[0] === "inspect") {
        let evaled = require('util').inspect(await eval(msg.args.slice(1).join(" ")));
        if (evaled.length > 2000) evaled = evaled.sliceEvery(2000)[0]
        if (evaled.includes(client.token)) evaled = evaled.replace(client.token, "no plz, dont leak token")
        msg.reply(`${msg.author.tag}: ` + evaled, { code: "js" })
      } else {
        let evaled = await eval(msg.args.join(" "));
        if (evaled.length > 2000) evaled = evaled.sliceEvery(2000)[0]
        if (evaled.includes(client.token)) evaled = evaled.replace(client.token, "no plz, dont leak token")
        msg.reply(`${msg.author.tag}: ` + evaled)
      }


    } catch (err) {
      console.log(err)
      msg.reply(`${msg.author.tag}: ` + err)
    };

  },
};
