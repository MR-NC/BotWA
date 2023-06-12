const fs = require("fs")
module.exports = {
    commands: ["delvn"],
    cooldown: 13,
    minArgs: 1,
    expectedArgs: "<text>",
    example: "{prefix}{command} oii",
    isSewa: true,
    isOwner: true,
    callback: async (sock, m, { text, setReply }) => {
        if (!fs.readdirSync("./temp").filter((x) => x.includes(".mp3")).map((x) => x.split(".mp3")[0]).includes(m.text)) return setReply("Nama tersebut tidak ada kak")
        fs.unlinkSync(`./temp/${m.text}.mp3`)
        await setReply("Success delete vn " + m.text)
    }
}