
let exec = require("child_process").exec

module.exports = {
  name: "restart",
  ownerOnly: true,
  category: "owner",
  async execute(_client,msg) {
  msg.channel.send('Never gonna give you up, never gonna let you down, never gonna run around and restart! see u later :3').then(() => {
  exec('pm2 restart Qeane', function () {
    return;
  });
});
},
};