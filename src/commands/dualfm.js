const fetch = require('node-fetch');
const { MessageEmbed } = require('discord.js')

module.exports = {
    name: "dualfm",
    category: "music",
    async execute(client, msg) {
        fetch("https://api.dualfm.net/stats").then(res => res.json()).then(res => {
            let fields = [
                { name: 'Song', value: `${res.now.song}`, inline: true },
                { name: 'Artist', value: `${res.now.artist}`, inline: true },
                { name: 'Presenter', value: `${res.presenter.username}`, inline: true },
                { name: 'Listeners', value: `${res.listeners.current}`, inline: true }
            ]
            const embed = new MessageEmbed()
                .setTitle('DualFM')
                .addFields(fields)
                .setColor('#cf6fcb')

            msg.reply("", embed)

        });
    }
}