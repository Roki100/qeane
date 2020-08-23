async function cpuUsage(time) {
    let startTime = process.hrtime();
    let startCPU = process.cpuUsage();
    await new Promise(r => setTimeout(r, time));
    let elapsedTime = process.hrtime(startTime);
    let elapsedCPU = process.cpuUsage(startCPU);
    let milliseconds = elapsedTime[0] * 1000 + elapsedTime[1] / 1000000;
    let timings = elapsedCPU.user / 1000 + elapsedCPU.system / 1000;
    return 100 * timings / milliseconds;
}

module.exports = {
    name: 'stats',
    category: "info",
    async execute(client, msg) {
        let m = await msg.reply(`${msg.author.tag}: ` + "", { embed: { description: msg.str.collecting } })
        let totalSeconds = (client.uptime / 1000);
        let days = Math.floor(totalSeconds / 86400);
        let hours = Math.floor(totalSeconds / 3600);
        hours %= 24;
        totalSeconds %= 3600;
        let minutes = Math.floor(totalSeconds / 60);
        let seconds = totalSeconds % 60;
        let cpuusage = cpuUsage(2000)
        let desc = `
    ${msg.str.uptime} **${days}d, ${hours}h, ${minutes}m, ${Math.round(seconds)}s**
    ${msg.str.servers} **${client.guilds.cache.size}**
    ${msg.str.cores} **${require('os').cpus().length}**
    ${msg.str.usage} **${await cpuusage}%**
    ${msg.str.ram} **${Math.round(process.memoryUsage().heapUsed / 1024 / 1024) + 'MB'}/${Math.round(require('os').totalmem() / 1000000000) + 'GB'}**
    `
        await m.edit("", {
            embed: {
                title: msg.str.stats,
                description: desc,
                color: client.functions.randomColor()
            }
        })


    },
};
