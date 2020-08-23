module.exports = {
    name: 'invite',
    category: "info",
    async execute(_client, msg) {
        msg.reply(`${msg.author.tag}: https://discord.com/api/oauth2/authorize?client_id=742670668646055967&permissions=3238918&scope=bot`)


    }
}
