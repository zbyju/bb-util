const sendkeys = require('sendkeys')

module.exports = function pressF11() {
    console.log("Sending key")
    sendkeys.sync("a")
}
