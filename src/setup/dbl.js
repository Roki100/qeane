module.exports = async (client) => {
    const DBL = require("dblapi.js");
    const dbl = new DBL(require('../../config.json').dbl, { webhookPort: 4001, webhookAuth: 'bestpasswdever' });
    dbl.webhook.on('ready', hook => {
        console.log(`Webhook running at http://${hook.hostname}:${hook.port}${hook.path}`);
    });
    dbl.webhook.on('vote', async vote => {
        client.logs.send(`User with id ${vote.user} just voted!`)
        client.db.set(`votes.${vote.user}`, Date.now() + 43200000)
        //if (!client.db.get(msg.author.id) || client.db.get(msg.author.id)< Date.now()) return msg.reply("In order to use this command, you need to vote for me! https://top.gg/bot/742670668646055967/vote")
        let user = client.users.cache.get(vote.user) || await client.users.fetch(vote.user)
        await user.send("Thanks you for voting for Qeane :3")
    })
    await dbl.postStats(client.guilds.cache.size, client.options.shards[0], client.ws.shards.size);
    setInterval(() => {
        dbl.postStats(client.guilds.cache.size, client.options.shards[0], client.ws.shards.size);
    }, 1800000);
    dbl.on('posted', () => {
        console.log('Server count posted!');
    })

    dbl.on('error', e => {
        console.log(`Oops! ${e}`);
    })

    client.dbl = dbl

    console.log('==SETUP== dbl succesfully loaded!')
}