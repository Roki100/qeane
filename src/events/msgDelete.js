module.exports = async (client, msg) => {
    let serverQueue = client.queue.get(msg.guild.id)
    if (!serverQueue) return;
    let interval = serverQueue.npmsginterval
    if (interval) {
        clearInterval(interval)
        serverQueue.npmsginterval = null
    }
}