module.exports = {
  aliases: ["e"],
  category: "owner",
  description: "Evals code",
  name: 'eval',
  ownerOnly: true,
  usage: "eval <code>",
  async execute(client, msg) {
    if (!msg.args.join(" ")) return await msg.send(`I can't eval the air!`)
    try {
      let evaled = require('util').inspect(await eval(msg.args.join(" ")));
      let options = {}
      if (evaled) {
        if (evaled.length > 2000) evaled = evaled.sliceEvery(2000)[0]
        //if (evaled.includes(client.token)) evaled = evaled.replace(/client.token/g, "no plz, dont leak token")
        if (!evaled.toString().includes("```js\n")) options = { code: "js" }
      }

      await msg.reply(evaled, options)


    } catch (err) {
      console.log(err)
      await msg.reply(err)
    }

  },
};
