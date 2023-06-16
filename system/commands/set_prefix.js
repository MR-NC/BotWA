module.exports = {
    commands: ["setprefix"],
    cooldown: 13,
    isSewa: true,
    isOwner: true,
    callback: async ({ m }) => {
        if (m.args[0] == "prefix" || m.args[0] == "1") {
        if (m.setPrefix == "prefix") return m.reply("Sudah active")
        db.settings[m.botNumber].setprefix = "prefix"
        await m.reply("Success mengganti prefix ke prefix")
        } else if (m.args[0] == "noprefix" || m.args[0] == "2") {
        if (m.setPrefix == "noprefix") return m.reply("Sudah active")
        db.settings[m.botNumber].setprefix = "noprefix"
        await m.reply("Success mengganti prefix ke noprefix")
        } else if (m.args[0] == "allprefix" || m.args[0] == "3") {
        if (m.setPrefix == "allprefix") return m.reply("Sudah active")
        db.settings[m.botNumber].setprefix = "allprefix"
        await m.reply("Success mengganti prefix ke allprefix")
        } else {
        m.reply("\`\`\`「 SETTINGS PREFIX BOT 」\`\`\`\n\n1. prefix\n2. noprefix\n3. allprefix")
        }
    }
}
