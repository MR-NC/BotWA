module.exports = {
    commands: ["setnamagc"],
    cooldown: 13,
    minArgs: 1,
    expectedArgs: "<teks>",
    example: "{prefix}{command} Pencoli handal",
    isSewa: true,
    isGroup: true,
    isAdmin: true,
    isBotAdmin: true,
    callback: async ({ sock, m, groupName }) => {
        if (m.text == groupName) return m.reply("Coba pakai nama lain")
        await sock.groupUpdateSubject(m.chat, m.text)
        setTimeout(() => {
        m.reply("Success mengganti nama group")
        }, 1000)
    }
}
