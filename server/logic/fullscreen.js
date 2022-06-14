const sendkeys = require('sendkeys')

module.exports = function pressF11() {
    sendkeys.sync("{F11}")
}
