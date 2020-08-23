let exec = require("child_process").exec

module.exports = {
  name: "shell",
  ownerOnly: true,
  aliases: ['terminal', 'exec'],
  category: "owner",
  async execute(client, msg) {
    if (!msg.args.join(' ')) return await msg.reply(`${msg.author.tag}: ` + msg.str.noArgs)
    exec(msg.args.join(" "), async function (err, stdout, stderr) {
      if (!err) err = "-"
      if (!stdout) stdout = "-"
      if (!stderr) stderr = "-"
      if (err.length + stdout.length + stderr.length > 1024) {
        await msg.reply(`${msg.author.tag}: ` + msg.str.tooBig)
        console.log(`${err}\n${stdout}\n${stderr}`);
      } else {
        const embed = {
          color: client.functions.randomColor(),
          fields: [
            { name: "**err**", value: err + "** **" },
            { name: "**stdout**", value: stdout + "** **" },
            { name: "**stderr**", value: stderr + "** **" }
          ]
        }

        await msg.reply(`${msg.author.tag}: ` + "", { embed: embed });
      }
    });

  },
};
