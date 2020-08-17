const fetch = require('node-fetch');
const { MessageEmbed } = require('discord.js')

module.exports = {
    name: "dualfm",
    category: "music",
    async execute(client, msg) {

        return msg.channel.send('Coming soon! OwO. \ndualfm.net')
        // const artist = client.languages.get(msg.guild.language).commands.dual.artist
        // const song = client.languages.get(msg.guild.language).commands.dual.song
        // const presenter = client.languages.get(msg.guild.language).commands.dual.presenter
        // const listener_peak = client.languages.get(msg.guild.language).commands.dual.listenerpeak
        // const listeners = client.languages.get(msg.guild.language).commands.dual.listeners
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

            msg.reply(`${msg.author.tag} ` + "", embed)

        });
    }
}