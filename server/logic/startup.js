const data = require("../data")
const exec = require("child_process").exec

module.exports = function Startup() {
    let browser;
    if(data.config.startup.pathToBrowser.includes("\\")) {
        browser = data.config.startup.pathToBrowser.split("\\").reverse()[0]
    } else if(data.config.startup.pathToBrowser.includes("/")) {
        browser = data.config.startup.pathToBrowser.split("/")
    } else {
        browser = "iexplore.exe"
    }

    isRunning(browser, status => {
        if(!status) {
            exec(`start "" "${ data.config.startup.pathToBrowser }" "${ data.config.startup.pathToProgram }"`)
        }
    })
}

function isRunning(query, cb) {
    let platform = process.platform;
    let cmd = '';
    switch (platform) {
        case 'win32' : cmd = `tasklist`; break;
        case 'darwin' : cmd = `ps -ax | grep ${query}`; break;
        case 'linux' : cmd = `ps -A`; break;
        default: return false;
    }
    exec(cmd, (err, stdout, stderr) => {
        cb(stdout.toLowerCase().indexOf(query.toLowerCase()) > -1);
    });
}