module.exports = {
    commands: ["autobackup"],
    cooldown: 13,
    isSewa: true,
    isOwner: true,
    callback: async (sock, m, { autoBackup, setReply }) => {
        if (m.args[0] == "on" || m.args[0] == "1") {
        if (autoBackup == true) return setReply("Sudah active")
        db.settings[m.botNumber].autobackup = true
        setReply("Mode auto backup telah active")
        } else if (m.args[0] == "off" || m.args[0] == "0") {
        if (autoBackup == false) return setReply("Sudah non active")
        db.settings[m.botNumber].autobackup = false
        setReply("Mode auto backup telah non active")
        } else {
        setReply("\`\`\`「 MODE AUTO BACKUP 」\`\`\`\n\n0. off\n1. on")
        }
    }
}
