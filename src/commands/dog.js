module.exports = {
    name: 'dog',
    category: "fun",
    async execute(_client,msg) {
        require('axios').get('https://api.thedogapi.com/v1/images/search').then(res => msg.reply("",{embed:{description: "Woof!",image: {url: res.data[0].url}}}))
    }
}