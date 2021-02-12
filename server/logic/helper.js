const moment = require("moment")
module.exports = {
    timeDifferenceInSeconds: function(time1, time2) {
        return Math.abs(moment.duration(moment(time1).diff(moment(time2))).asSeconds().toFixed(0))
    }
}