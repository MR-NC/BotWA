const util = require("util")
const { exec } = require("child_process")
const { githubEmail, githubUser } = require("@config")
module.exports = {
    commands: ["backup"],
    cooldown: 13,
    isSewa: true,
    callback: async (sock, m, { setReply }) => {
        exec(`git config --global user.email "${githubEmail}" && git config --global user.name "${githubUser}" && git add . && git commit -m "Updating" && git push`, (stdout, err) => {
        if (stdout) return setReply(util.format(stdout))
        if (err) return setReply(util.format(err))
        })
    }
}