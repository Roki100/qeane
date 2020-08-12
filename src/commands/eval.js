const dual = require('@tafina/dualfm2')

module.exports = {
  name: 'eval',
  ownerOnly: true,
  category: "owner",
  async execute(client, msg) {
    let str = client.languages.get(msg.guild.language).commands.eval
    try {
      const code = msg.args.join(" ");
      let evaled = require('util').inspect(eval(code));
      if (evaled instanceof Promise) evaled = await evaled;
      if (typeof evaled !== "string") evaled = require("util").inspect(evaled);
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
