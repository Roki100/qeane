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
        var evaled = require('util').inspect(await eval(msg.args.slice(1).join(" ")));
      } else {
        var evaled = await eval(msg.args.join(" "));
      }
      if (evaled.length > 2000) evaled = evaled.sliceEvery(2000)[0]
      msg.reply(evaled.startsWith("```js") ? evaled : evaled, { code: "js" })

    } catch (err) {
      console.log(err)
      msg.reply(err)
    };

  },
};
