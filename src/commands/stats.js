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
    category: "info",
    description: "Gives random stats about Qeane",
    name: 'stats',
    usage: "stats",
    async execute(client, msg) {
        let m = await msg.reply(``, { embed: { description: "Collecting stats, please wait..." } })
        let totalSeconds = (client.uptime / 1000);
        let days = Math.floor(totalSeconds / 86400);
        let hours = Math.floor(totalSeconds / 3600);
        hours %= 24;
        totalSeconds %= 3600;
        let minutes = Math.floor(totalSeconds / 60);
        let seconds = totalSeconds % 60;
        let cpuusage = cpuUsage(2000)
        let desc = `
    Uptime: **${days}d, ${hours}h, ${minutes}m, ${Math.round(seconds)}s**
    Servers: **${client.guilds.cache.size}**
    Players: **${client.queue.size}**
    CPU cores: **${require('os').cpus().length}**
    CPU Usage: **${await cpuusage}%**
    RAM Usage: **${Math.round(process.memoryUsage().heapUsed / 1024 / 1024) + 'MB'}/${Math.round(require('os').totalmem() / 1000000000) + 'GB'}**
    `
        await m.edit("", {
            embed: {
                title: "Some random stats about Qeane",
                description: desc,
                color: client.functions.randomColor()
            }
        })


    },
};
