const axios = require("axios");

module.exports = {
    name: "dualfm",
    category: "music",
    async execute(_client, msg) {
        const { data } = axios.get("https://tafina.xyz/api/dualfm")
        let fields = [
            { name: 'Song', value: `${data.now.song}`, inline: true },
            { name: 'Artist', value: `${data.now.artist}`, inline: true },
            { name: 'Presenter', value: `${data.presenter.username}`, inline: true },
            { name: 'Listeners', value: `${data.listeners.current}`, inline: true }
        ]

        await msg.reply("", {
            embed: {
                title: 'DualFM',
                fields,
                color: client.functions.randomColor()
            }
        })

    }
}