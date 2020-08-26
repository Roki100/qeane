const Discord = require('discord.js')
/**
 * Setups the client
 * @param {Discord.Client} client - The client
 */
module.exports = function (client) {
  const fs = require('fs'), config = require('../../config.json'), autoload = require('auto-load'),
    quick = require('quick.db-plus')

  client.queue = new Discord.Collection()
  client.config = config
  client.functions = autoload('./src/functions')
  client.db = new quick.db('qeane')
  client.commands = new Discord.Collection()
  client.version = require('../../package.json')["last-update"]
  client.aliases = new Discord.Collection()

  const commandFiles = fs
    .readdirSync(`./src/commands`)
    .filter(file => file.endsWith('.js'));
  for (const file of commandFiles) {
    const command = require(`../commands/${file}`);
    client.commands.set(command.name, command);
    if (command.aliases) client.aliases.forEach(a => { client.aliases.set(a, command.name) })
    console.log(`==COMMANDS== Command succesfully loaded: ${command.name}`)
  }
  console.log('==SETUP== client succesfully loaded!')
}