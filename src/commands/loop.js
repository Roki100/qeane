module.exports = {
    aliases: ["l"],
    category: "music",
    description: "Enables the loop",
    name: "loop",
    usage: "loop <disable/track/queue>",
    async execute(client, msg) {
        client.functions.musicCheck(client, msg); let serverQueue = client.queue.get(msg.guild.id); if (!serverQueue) return;
        if (!msg.args[0]) return await msg.react("🛑")
        let type = msg.args[0].toLowerCase()
        let types = ["disable", "loop", "track"];
        if (!types.includes(type)) return await msg.react("🛑")
        switch (type) {
            case "queue":
                serverQueue.loopType = 2
                await msg.react("🔄")
                return;
            case "track":
                serverQueue.loopType = 1
                await msg.react("🔁")
                return;
            case "disable":
                serverQueue.loopType = 0
                await msg.react("👍")
                return;
        }
    }
}
