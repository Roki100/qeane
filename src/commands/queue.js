module.exports = {
    name: "queue",
    aliases: ['q'],
    category: "music",
    async execute(client, msg) {
        let str = client.languages.get(msg.guild.language).commands.queue,
            musicStr = client.languages.get(msg.guild.language).music
        let serverQueue = client.queue.get(msg.guild.id)
        if (!serverQueue) return msg.reply(`${msg.author.tag}: ` + musicStr.queueEmpty);
        const output = []
        for (let i = 1; i < Math.min(serverQueue.songs.length, 11); i++) {
            output[i] = [
                `${i}- [${serverQueue.songs[i].info.title}](${serverQueue.songs[i].info.uri})\n`
            ].join('\n');
        }
        if (!output[1]) output[1] = str.nothing

        const Discord = require('discord.js')
        let queueemb = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setDescription(str.desc
                .replace("{0}", serverQueue.songs[0].info.title)
                .replace("{1}", serverQueue.songs[0].info.uri)
                .replace("{2}", serverQueue.linkToNpmsg)
                .replace("{3}", output.join(' '))
            )
        if (serverQueue.songs.length > 11) {
            queueemb.setFooter(str.more
                .replace("{0}", serverQueue.songs.length - 11))
        }
        msg.reply(`${msg.author.tag}: ` + "", queueemb)
    }
<<<<<<< HEAD
=======
    await msg.reply(`${msg.author.tag}: ` + "", queueemb)
  }
>>>>>>> 0887b14624475e70c72a460e25b13d989dc7938d
}