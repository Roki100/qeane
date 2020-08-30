module.exports = {
    aliases: ["inv"],
    category: "info",
    description: "Gives my invite link",
    name: 'invite',
    usage: "invite",
    async execute(_client, msg) {
        await msg.reply(`https://discord.com/api/oauth2/authorize?client_id=742670668646055967&permissions=3238918&scope=bot`)
    }
}
