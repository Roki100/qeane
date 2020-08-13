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
      if (evaled.length > 2000) evaled = evaled.sliceEvery(2000)[0]
      msg.reply(evaled, { code: "js" })

    } catch (err) {
      console.log(err)
      msg.reply(err)
    };

  },
};
