const dual = require('@tafina/dualfm2')

const l = dual.listeners();
const lp = dual.listeners_peak();
const now = dual.nowplaying();
const artist = dual.artist();

const nowp = dual.nowplaying() + ' - ' + dual.artist()

module.exports = {
  name: 'eval',
  ownerOnly: true,
  category: "owner",
  async execute(client, msg) {
    let str = client.languages.get(msg.guild.language).commands.eval
    try {
      const evaled = require('util').inspect(await eval(msg.args.join(" ")));
      if (evaled.length > 2000) {
        console.log(evaled)
        return msg.reply(str.tooLongText)
      } else {
        msg.reply(evaled, { code: "js" })
      };
    } catch (err) {
      console.log(err)
      msg.reply(err)
    };

  },
};
