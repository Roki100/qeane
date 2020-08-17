module.exports = {
  name: 'weather',
  category: "utility",
  async execute(client, msg) {
    let str = client.languages.get(msg.guild.language).commands.weather
    const Discord = require('discord.js')

    if (!msg.args.join(' ') || !msg.args[1]) return msg.reply(`${msg.author.tag}: ` + str.usage)

    var weather = require('weather-js')
    let degreetype = msg.args[0]
    let city = msg.args.slice(1).join(' ')
    if (!city) return msg.reply(`${msg.author.tag}: ` + str.usage)
    weather.find({ search: city, degreeType: degreetype }, function (err, result) {
      if (err) console.log(err);



      var current = result[0].current;
      var location = result[0].location;

      const embed = new Discord.MessageEmbed()
        .setDescription(current.skytext)
        .setAuthor(str.for
          .replace("{0}", current.observationpoint))
        .setThumbnail(current.imageUrl)
        .setColor(0xffd700)
        .addFields(
          { name: str.timetone, value: `UTC${location.timezone}`, inline: true },
          { name: str.type, value: location.degreetype, inline: true },
          { name: str.temp, value: `${current.temperature} degrees`, inline: true },
          { name: str.feels, value: `${current.feelslike} degrees`, inline: true },
          { name: str.wind, value: current.winddisplay, inline: true },
          { name: str.hum, value: `${current.humidity}%`, inline: true }
        )

      msg.reply(`${msg.author.tag}: ` + "", embed);
    });



  },
};
