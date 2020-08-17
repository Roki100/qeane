module.exports = {
	name: 'ban',
	category: "moderation",
	async execute(client, msg) {
		const str = client.languages.get(msg.guild.language).commands.ban
		if (!msg.member.permissions.has("BAN_MEMBERS")) return msg.reply(`${msg.author.tag}: ` + str.noBanPerm + str.usage)
		if (!msg.guild.me.permissions.has("BAN_MEMBERS")) return msg.reply(`${msg.author.tag}: ` + str.botCantBan + str.usage)
		if (!msg.args.join(' ')) return msg.reply(`${msg.author.tag}: ` + str.noArgs + str.usage)
		let member = msg.mentions.members.first()
		if (!member) {
			return msg.reply(`${msg.author.tag}: ` + st.noUser + str.usage);
		}
		if (member.id === msg.guild.id) return msg.reply(`${msg.author.tag}: ` + str.serverOwner + str.usage)
		if (!member.bannable) return msg.reply(`${msg.author.tag}: ` + str.notBannable + str.usage)
		member.user.send(str.youreBanned
			.replace("{0}", msg.guild.name)
			.replace("{1}", msg.author.tag))
		member.ban({ days: 7, reason: msg.args.slice(1).join(' ') || str.noReason })
		msg.reply(`${msg.author.tag}: ` + str.memberBanned)
	},
};
