module.exports = {
    name: 'slap',
    category: "fun",
    async execute(client, msg) {
        require('axios').get('https://weebs4life.ga/api/slap').then(res => {
            let member;
            if (msg.args.join(' ')) {
                member = msg.mentions.members.first() || client.functions.findByID(msg.guild, msg.args.join(' '))
            } else { member = { user: client.user } }
            let title = client.languages.get(msg.guild.language).commands.slap.slaps
                .replace("{0}", msg.author.tag)
                .replace("{1}", member.user.tag)
            msg.reply(`${msg.author.tag}: ` + "", { embed: { image: { url: res.data.url }, title: title } })
        })
    }
}