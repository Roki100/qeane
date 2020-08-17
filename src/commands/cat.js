module.exports = {
    name: 'cat',
    category: "fun",
    async execute(client, msg) {
        require('axios').get('https://api.thecatapi.com/v1/images/search').then(res => msg.reply(`${msg.author.tag}: ` + "", { embed: { description: client.languages.get(msg.guild.language).commands.cat.meow, image: { url: res.data[0].url } } }))
    }
}