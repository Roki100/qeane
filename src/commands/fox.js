module.exports = {
    name: 'fox',
    category: "fun",
    async execute(client, msg) {
        const { url } = await client.ksoft.images.random('fox');
        msg.reply(`${msg.author.tag} ` + "", { embed: { image: { url: url } } }); // discord.js
    }
}