module.exports = {
    name: 'dog',
    category: "fun",
    async execute(client, msg) {
        require('axios').get('https://api.thedogapi.com/v1/images/search').then(res => msg.reply(`${msg.author.tag} ` + "", { embed: { description: client.languages.get(msg.guild.language).commands.dog.woof, image: { url: res.data[0].url } } }))
    }
}