const Discord = require('discord.js')
/**
 * Setups the client
 * @param {Discord.Client} client - The client
 */
module.exports = function (client) {
    const fs = require('fs'), config = require('../../config.json'), autoload = require('auto-load'),
        quick = require('quick.db-plus'), ksoft = require('@ksoft/api')

    client.queue = new Discord.Collection()
    client.config = config
    client.functions = autoload('./src/functions')
    client.db = new quick.db('qeane')
    client.ksoft = new ksoft.KSoftClient(require('../../config.json').ksoft)
    client.commands = new Discord.Collection()
    client.version = require('../../package.json')["last-update"]
    client.languages = new Discord.Collection()

    var commandFiles = fs
        .readdirSync(`./src/commands`)
        .filter(file => file.endsWith('.js'));
    for (var file of commandFiles) {
        var command = require(`../commands/${file}`);
        client.commands.set(command.name, command);
        console.log(`==COMMANDS== Command succesfully loaded: ${command.name}`)
    }

    var languageFiles = fs
        .readdirSync("./src/languages")
        .filter(file => file.endsWith('.js'));
    for (var lang of languageFiles) {
        var language = require(`../languages/${lang}`);
        var langName = lang.split('.')[0]
        client.languages.set(langName, language)
        console.log(`===LANGUAGES=== Language succesfully loaded: ${lang}`)
    }

    console.log('==SETUP== client succesfully loaded!')
}