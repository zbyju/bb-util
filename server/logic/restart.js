const data = require("../data")
const exec = require("child_process").exec
const cron = require("node-cron")
const moment = require("moment")
const helper = require("./helper")

module.exports = function Restart() {
    cron.schedule("0,15,30,45 * * * * *", () => {
        if(!data.babyboxData || !data.babyboxData.time) {
            return
        }
        let timeDifference = helper.timeDifferenceInSeconds(data.babyboxData.time, moment())
        if(timeDifference > data.config.restart.maxTimeDifference) {
            ++data.restart.errorsInRow
            let lastRestart = moment()
            if(data.restart.errorsInRow >= data.config.restart.errorsInRowToRestart) {
                if(!data.restart.lastRestart ||
                   helper.timeDifferenceInSeconds(data.restart.lastRestart, moment()) > data.config.restart.delayToNextRestart) {
                       exec(data.config.restart.commandToExecuteWhenError)
                       data.restart.lastRestart = lastRestart
                       data.restart.restarting = true
                }
            }
        } else {
            data.restart.errorsInRow = 0
            if(data.config.restart.abortRestartIfOk && data.restart.restarting) {
                exec(data.config.restart.commandToExecuteWhenOk)
                data.restart.restarting = false
            }
        }
    })
}