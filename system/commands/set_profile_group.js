const fs = require("fs")
const util = require("util") 
const { generateProfilePicture } = require("@libs/function")
const i18n = require("i18n")
module.exports = {
    commands: ["setppgc"],
    cooldown: 13,
    isSewa: true,
    isGroup: true,
    isAdmin: true,
    isBotAdmin: true,
    isMedia: {
        isImage: true, 
        isQuotedMedia: {
		       	  isQuotedImage: true
                  }
    }, 
    callback: async (sock, m, { isQuotedImage, isImage, setReply }) => {
        if (isImage && m.args[0] == "full" || isImage && m.args[0] == "/full" || isQuotedImage && m.args[0] == "full" || isQuotedImage && m.args[0] == "/full") {
        const media = await sock.downloadMediaMessage(isQuotedImage? m.quoted : m)
        const { img } = await generateProfilePicture(media)
        await sock.query({ tag: "iq", attrs: { to: m.chat, type: "set", xmlns: "w:profile:picture" }, content: [{ tag: "picture", attrs: { type: "image" }, content: img }]})
        setReply(util.format(i18n.__("success")))
        } else if (isImage || isQuotedImage) {
        const media = await sock.downloadMediaMessage(isQuotedImage? m.quoted : m)
        await sock.updateProfilePicture(m.chat, media)
        setReply(util.format(i18n.__("success")))
        }
    }
}