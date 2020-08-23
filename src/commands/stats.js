async function cpuUsage(time) {
<<<<<<< HEAD
    let startTime = process.hrtime();
    let startCPU = process.cpuUsage();
    await new Promise(r => setTimeout(r, time));
    let elapsedTime = process.hrtime(startTime);
    let elapsedCPU = process.cpuUsage(startCPU);
    let milliseconds = elapsedTime[0] * 1000 + elapsedTime[1] / 1000000;
    let timings = elapsedCPU.user / 1000 + elapsedCPU.system / 1000;
    let percentage = 100 * timings / milliseconds;
    return percentage;
=======
  let startTime = process.hrtime();
  let startCPU = process.cpuUsage();
  await new Promise(r => setTimeout(r, time));
  let elapsedTime = process.hrtime(startTime);
  let elapsedCPU = process.cpuUsage(startCPU);
  let milliseconds = elapsedTime[0] * 1000 + elapsedTime[1] / 1000000;
  let timings = elapsedCPU.user / 1000 + elapsedCPU.system / 1000;
  return 100 * timings / milliseconds;
>>>>>>> 0887b14624475e70c72a460e25b13d989dc7938d
}

module.exports = {
    name: 'stats',
    category: "info",
    async execute(client, msg) {
        let str = client.languages.get(msg.guild.language).commands.stats
        let m = await msg.reply(`${msg.author.tag}: ` + "", {embed: {description: str.collecting}})
        let totalSeconds = (client.uptime / 1000);
        let days = Math.floor(totalSeconds / 86400);
        let hours = Math.floor(totalSeconds / 3600);
        hours %= 24;
        totalSeconds %= 3600;
        let minutes = Math.floor(totalSeconds / 60);
        let seconds = totalSeconds % 60;
        let cpuusage = cpuUsage(2000)
        let desc = `
    ${str.uptime} **${days}d, ${hours}h, ${minutes}m, ${Math.round(seconds)}s**
    ${str.servers} **${client.guilds.cache.size}**
    ${str.cores} **${require('os').cpus().length}**
    ${str.usage} **${await cpuusage}%**
    ${str.ram} **${Math.round(process.memoryUsage().heapUsed / 1024 / 1024) + 'MB'}/${Math.round(require('os').totalmem() / 1000000000) + 'GB'}**
    `


<<<<<<< HEAD
        m.edit("", {
            embed: {
                title: str.stats,
                description: desc,
                color: client.functions.randomColor()
            }
        })
=======
    await m.edit("", {
      embed: {
        title: str.stats,
        description: desc,
        color: client.functions.randomColor()
      }
    })
>>>>>>> 0887b14624475e70c72a460e25b13d989dc7938d


    },
};
