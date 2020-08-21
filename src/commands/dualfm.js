const fetch = require('node-fetch');

module.exports = {
    name: "dualfm",
    category: "music",
    async execute(client, msg) {
        fetch("https://tafina.xyz/api/dualfm").then(res => res.json()).then(async res => {
            let fields = [
                { name: 'Song', value: `${res.now.song}`, inline: true },
                { name: 'Artist', value: `${res.now.artist}`, inline: true },
                { name: 'Presenter', value: `${res.presenter.username}`, inline: true },
                { name: 'Listeners', value: `${res.listeners.current}`, inline: true }
            ]
            // const embed = new MessageEmbed()
            //     .setTitle('DualFM')
            //     .addFields(fields)
            //     .setColor('#cf6fcb')

            await msg.reply("", {
                embed: {
                    title: 'DualFS',
                    fields,
                    color: 13594571
                }
            })

        });
    }
}