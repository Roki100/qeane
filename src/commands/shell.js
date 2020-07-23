let exec = require("child_process").exec

module.exports = {
  name: "shell",
  ownerOnly: true,
  aliases: ['terminal', 'exec'],
  category: "owner",
  async execute(client,msg) {
if (!msg.args.join(' ')) return msg.channel.send('No command to execute provided, time to do nothing...')
 
  exec(msg.args.join(" "), function (err, stdout, stderr) {
    if (!err) err = "-"
    if (!stdout) stdout = "-"
    if (!stderr) stderr = "-"
    if (err.length + stdout.length + stderr.length > 1024) {
      msg.channel.send(`The output is too big sending it to the js console insted!\nThe output is ${err.length + stdout.length + stderr.length} / 1024 long!`)
      console.log(`${err}\n${stdout}\n${stderr}`);
    } else {
      const embed = {color: client.functions.randomColor(),
        fields: [
          {name: "**err**", value: err + "** **"},
          {name: "**stdout**", value: stdout + "** **"},
          {name: "**stderr**", value: stderr + "** **"}
        ]
      }
     
      msg.reply("",{embed:embed});
    };
  });

},
};