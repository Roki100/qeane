let exec = require("child_process").exec

module.exports = {
  category: "owner",
  description: "Fully restarts the bot",
  name: "restart",
  ownerOnly: true,
  usage: "restart",
  async execute(_client, msg) {
    msg.reply(`Restarting Qeane...`).then(() => {
      exec('pm2 restart Qeane', function () { });
    });
  },
};
