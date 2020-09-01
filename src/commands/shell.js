let exec = require("child_process").exec

module.exports = {
  aliases: ['terminal', 'exec'],
  category: "owner",
  description: "Executes a bash command",
  name: "shell",
  ownerOnly: true,
  usage: "shell <code>",
  async execute(client, msg) {
    if (!msg.args.join(' ')) return await msg.reply(`Please provide something to execute!`)
    exec(msg.args.join(" "), async function (err, stdout, stderr) {
      if (!err) err = "-"
      if (!stdout) stdout = "-"
      if (!stderr) stderr = "-"
      if (err.length + stdout.length + stderr.length > 1024) {
        await msg.reply(`EEE, output too big! Sent it in the console...`)
        console.log(`${err}\n${stdout}\n${stderr}`);
      } else {
        const embed = {
          color: client.functions.randomColor(),
          fields: [
            { name: "**err**", value: err },
            { name: "**stdout**", value: stdout },
            { name: "**stderr**", value: stderr }
          ]
        }

        await msg.reply(``, { embed: embed });
      }
    });

  },
};
