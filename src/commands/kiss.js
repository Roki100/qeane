module.exports = {
    name: 'kiss',
    category: "fun",
    async execute(client, msg) {
        require('axios').get('https://weebs4life.ga/api/kiss').then(async res => {
            let member;
            if (msg.args.join(' ')) {
                member = msg.mentions.members.first()
            } else { member = { user: client.user } }
            let title = client.languages.get(msg.guild.language).commands.kiss.kisses
                .replace("{0}", msg.author.tag)
                .replace("{1}", member.user.tag)
            await msg.reply(`${msg.author.tag}: ` + "", { embed: { image: { url: res.data.url }, title: title } })
        })
    }
}