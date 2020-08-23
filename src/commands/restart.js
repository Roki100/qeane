let exec = require("child_process").exec

module.exports = {
<<<<<<< HEAD
    name: "restart",
    ownerOnly: true,
    category: "owner",
    async execute(client, msg) {
        msg.reply(`${msg.author.tag}: ` + client.languages.get(msg.guild.language).commands.restart.restarting).then(() => {
            exec('pm2 restart Qeane', function () {

            });
        });
    },
=======
  name: "restart",
  ownerOnly: true,
  category: "owner",
  async execute(client, msg) {
    msg.reply(`${msg.author.tag}: ` + client.languages.get(msg.guild.language).commands.restart.restarting).then(() => {
      exec('pm2 restart Qeane', function () {});
    });
  },
>>>>>>> 0887b14624475e70c72a460e25b13d989dc7938d
};
