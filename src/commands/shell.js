let exec = require("child_process").exec

module.exports = {
    name: "shell",
    ownerOnly: true,
    aliases: ['terminal', 'exec'],
    category: "owner",
    async execute(client, msg) {
        let str = client.languages.get(msg.guild.language).commands.shell
        if (!msg.args.join(' ')) return msg.reply(`${msg.author.tag}: ` + str.noArgs)

<<<<<<< HEAD
        exec(msg.args.join(" "), function (err, stdout, stderr) {
            if (!err) err = "-"
            if (!stdout) stdout = "-"
            if (!stderr) stderr = "-"
            if (err.length + stdout.length + stderr.length > 1024) {
                msg.reply(`${msg.author.tag}: ` + str.tooBig)
                console.log(`${err}\n${stdout}\n${stderr}`);
            } else {
                const embed = {
                    color: client.functions.randomColor(),
                    fields: [
                        {name: "**err**", value: err + "** **"},
                        {name: "**stdout**", value: stdout + "** **"},
                        {name: "**stderr**", value: stderr + "** **"}
                    ]
                }

                msg.reply(`${msg.author.tag}: ` + "", {embed: embed});
            }
=======
    exec(msg.args.join(" "), async function (err, stdout, stderr) {
      if (!err) err = "-"
      if (!stdout) stdout = "-"
      if (!stderr) stderr = "-"
      if (err.length + stdout.length + stderr.length > 1024) {
        await msg.reply(`${msg.author.tag}: ` + str.tooBig)
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
>>>>>>> 0887b14624475e70c72a460e25b13d989dc7938d

        });

    },
};
