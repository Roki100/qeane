module.exports = function (client) {
    const Discord = require('discord.js-light')
    client.events = require('auto-load')('./src/events')
    client.setup = require('auto-load')('./src/setup')
    client.config = require('../config.json')
    const guildWebhook = new Discord.WebhookClient(client.config.webhooks.guild.id, client.config.webhooks.guild.token)
    const errorWebhook = new Discord.WebhookClient(client.config.webhooks.errors.id, client.config.webhooks.errors.token)
    const logs = new Discord.WebhookClient(client.config.webhooks.logs.id, client.config.webhooks.logs.token)
    client.errorWebhook = errorWebhook
    client.logs = logs
    client.queue = new Map()

    client.on('guildCreate', async guild => {
        if (guild.id === '538361750651797504') return guild.leave()
        guildWebhook.send(`==JOINED SERVER==\n\nName: **${guild.name}**\nID: **${guild.id}**\nNew server count: **${client.guilds.cache.size}**`)
    })

    client.on("guildDelete", async guild => {
        guildWebhook.send(`==LEFT SERVER==\n\nName: **${guild.name}**\nID: **${guild.id}**\nNew server count: **${client.guilds.cache.size}**`)
    })

    client.on('ready', async () => {
        await client.user.setPresence({
            status: "online",
            activity: { name: "high quality music~ | qeane help", type: "LISTENING" }
        })
        setInterval(function () {
            client.user.setPresence({
                status: "online",
                activity: { name: "high quality music~ | qeane help", type: "LISTENING" }
            })
        }, 1800000);

        console.log("=====___==========================")
        console.log("=== / _ \\  ___  __ _ _ __   ___ ===")
        console.log("===| | | |/ _ \\/ _` | '_ \\ / _ \\===")
        console.log("===| |_| |  __/ (_| | | | |  __/===")
        console.log("=== \\__\\_\\\\___|\\__,_|_| |_|\\___|===")
        console.log("===================================")
        try {
            client.setup.client(client)
            client.setup.sliceEvery()
            if (client.user.id === "742670668646055967") {
                client.setup.dbl(client)
                client.setup.webhooks(client)
            }
            console.log("Qeane is ready!")
        } catch (e) {
            console.log(e)
            client.errorWebhook.send("ERROR: " + e)
        }
        client.logs.send(`Qeane has started at ${new Date(Date.now())}`)
    })

    client.on("reconnecting", () => {
        console.log("Reconnecting!");
    });

    client.on("disconnect", () => {
        console.log("Disconnect!");
    });


    client.on('message', async msg => {
        client.events.msg(client, msg)
    });


}