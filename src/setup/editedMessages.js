module.exports = () => {
    const { Structures } = require("discord.js-light");

    Structures.extend("Message", M => class Message extends M {
        async send(content, options) {
            if (typeof content === "string") {
                if (!options) { options = {}; }
                options.content = content;
            } else {
                options = content;
            }
            let sent;
            let previous = this.client.responses.get(this.id);
            if (previous) {
                let msg = typeof this.channel.messages.forge === "function" ? this.channel.messages.forge(previous.id) : await this.channel.messages.fetch(previous.id, false);
                if (previous.attachments || options.files) {
                    await msg.delete().catch(() => { });
                    sent = await this.channel.send(options);
                } else {
                    if (previous.embeds && !options.embed) {
                        options.embed = null;
                    }
                    sent = await msg.edit(options);
                }
            } else {
                sent = await this.channel.send(options);
            }
            this.client.responses.set(this.id, {
                id: sent.id,
                attachments: Boolean(sent.attachments.size),
                embeds: Boolean(sent.embeds.length),
                timestamp: Date.now()
            });
            return sent;
        }
        async reply(content, options) {
            if (typeof content === "string") {
                if (!options) { options = {}; }
                content = `${this.author.tag}: ${content}`
            } else {
                options = content;
                content = `${this.author.tag}: ${options.content ? options.content : ""}`
            }

            return await this.send(content, options)
        }
    });


    console.log("==SETUP== editedMessages succesfully loaded!")
}