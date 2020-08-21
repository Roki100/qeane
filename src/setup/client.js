const Discord = require('discord.js')
const fs = require('fs')
const config = require('../../config.json')
const autoload = require('auto-load')
const quick = require('quick.db-plus')
const ksoft = require('@ksoft/api')

/**
 * Setups the client
 * @param {Discord.Client} client - The client
 */
module.exports = function (client) {

  client.queue = new Discord.Collection()
  client.config = config
  client.functions = autoload('./src/functions')
  client.db = new quick.db('qeane')
  client.ksoft = new ksoft.KSoftClient(require('../../config.json').ksoft)
  client.commands = new Discord.Collection()
  client.version = require('../../package.json')["last-update"]
  client.languages = new Discord.Collection()

  const commandFiles = fs
    .readdirSync(`./src/commands`)
    .filter(file => file.endsWith('.js'));
  for (const file of commandFiles) {
    const command = require(`../commands/${file}`);
    client.commands.set(command.name, command);
    console.log(`==COMMANDS== Command succesfully loaded: ${command.name}`)
  }

  const languageFiles = fs
    .readdirSync("./src/languages")
    .filter(file => file.endsWith('.js'));
  for (const lang of languageFiles) {
    const language = require(`../languages/${lang}`);
    const langName = lang.split('.')[0]
    client.languages.set(langName, language)
    console.log(`===LANGUAGES=== Language succesfully loaded: ${lang}`)
  }

  console.log('==SETUP== client succesfully loaded!')
}