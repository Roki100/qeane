module.exports = {
    aliases: ["dfm", "dual"],
    category: "music",
    description: "Shows the song currently playing on DualFM",
    name: "dualfm",
    usage: "dualfm",
    async execute(client, msg) {
        const { data } = await require('axios').get("https://tafina.xyz/api/dualfm")
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