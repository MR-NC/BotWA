module.exports = {
    commands: ["anticall"],
    cooldown: 13,
    isSewa: true,
    isOwner: true,
    callback: async (sock, m, { antiCall, setReply }) => {
        if (m.args[0] == "on" || m.args[0] == "1") {
        if (antiCall == true) return setReply("Sudah active")
        db.settings[m.botNumber].anticall = true
        setReply("Mode anti call telah active")
        } else if (m.args[0] == "off" || m.args[0] == "0") {
        if (antiCall == false) return setReply("Sudah non active")
        db.settings[m.botNumber].anticall = false
        setReply("Mode anti call telah non active")
        } else {
        setReply("\`\`\`「 MODE ANTI CALL 」\`\`\`\n\n0. off\n1. on")
        }
    }
}
