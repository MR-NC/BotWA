module.exports = {
    commands: ["setwelcome"],
    cooldown: 13,
    isSewa: true,
    isOwner: true,
    callback: async (sock, m, { setWelcome, setReply }) => {
        if (m.args[0] == "viewonce" || m.args[0] == "1") {
        if (setWelcome == "viewonce") return setReply("Sudah active")
        db.settings[m.botNumber].setwelcome = "viewonce"
        setReply("Success mengganti welcome bot ke viewonce")
        } else if (m.args[0] == "image" || m.args[0] == "2") {
        if (setWelcome == "image") return setReply("Sudah active")
        db.settings[m.botNumber].setwelcome = "image"
        setReply("Success mengganti welcome bot ke image")
        } else if (m.args[0] == "gif" || m.args[0] == "3") {
        if (setWelcome == "gif") return setReply("Sudah active")
        db.settings[m.botNumber].setwelcome = "gif"
        setReply("Success mengganti welcome bot ke gif")
        } else if (m.args[0] == "video" || m.args[0] == "4") {
        if (setWelcome == "video") return setReply("Sudah active")
        db.settings[m.botNumber].setwelcome = "video"
        setReply("Success mengganti welcome bot ke video")
        } else if (m.args[0] == "document" || m.args[0] == "5") {
        if (setWelcome == "document") return setReply("Sudah active")
        db.settings[m.botNumber].setwelcome = "document"
        setReply("Success mengganti welcome bot ke document")
        } else if (m.args[0] == "context" || m.args[0] == "6") {
        if (setWelcome == "context") return setReply("Sudah active")
        db.settings[m.botNumber].setwelcome = "context"
        setReply("Success mengganti welcome bot ke context")
        } else {
        setReply("\`\`\`「 SETTINGS WELCOME BOT 」\`\`\`\n\n1. viewonce\n2. image\n3. gif\n4. video\n5. document\n6. context") 
        }
    }
}
