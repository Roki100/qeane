module.exports = {
  name: 'meme',
  aliases: ['memes'],
  category: "fun",
  async execute(client, msg) {
    const meme = await client.ksoft.images.meme({ nsfw: false });
    msg.reply(`${msg.author.tag} ` + "", {
      embed: {
        color: client.functions.randomColor(),
        image: { url: meme.url },
        description: client.languages.get(msg.guild.language).commands.meme.imgurl
          .replace("{0}", meme.url)
      }
    })

  }
};

