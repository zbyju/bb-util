const express = require("express")
const cors = require("cors")
const morgan = require("morgan")
const fs = require("fs")
const _ = require("lodash")
const bodyParser = require('body-parser')
const path = require("path")

const serverConfig = require("./config/server")
const data = require("./data")
const startup = require("./logic/startup")

global.appRoot = path.resolve(__dirname);

const app = express()

if(process.env.NODE_ENV !== 'production') {
    console.log("Server is running in development!")
        
    app.set('trust proxy', 'loopback,uniquelocal');
    app.set('trust proxy', function(){ return true; });
    app.use(morgan(':method :url :status :res[content-length] - :response-time ms :remote-addr'))
}


//Cors
app.use(cors())

//Body-parser
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());

//Routing
const clientRoute = require("./routes/client")
const babyboxRoute = require("./routes/babybox")
const restart = require("./logic/restart")

app.use("/server/client", clientRoute)
app.use("/server/babybox", babyboxRoute)

if(process.env.NODE_ENV === 'production') {
    console.log("Server is running in production mode!")

    app.use(express.static(__dirname + '/public/'))

    app.get(/.*/, (req, res) => {
        res.sendFile(__dirname + '/public/index.html')
    })
}

//Init app data
function init() {
    //Get config file
    fs.readFile(appRoot + "/config/config.json", (err, json) => {
        if(err) throw err
        let config = JSON.parse(json)
        data.config = _.merge({}, config)
    })

    //Create folders and files if they are not created
    fs.mkdirSync("./logs", { recursive: true })
    fs.writeFileSync("./logs/start.txt", "", { flag: "a+" })
    fs.writeFileSync("./logs/restart.txt", "", { flag: "a+" })

    //Startup + Restart
    setTimeout(() => {
        startup()
        if(data.config.restart.turnedOn) {
            restart()
        }
    }, 5000)
}
init()

app.listen(serverConfig.port, () => console.log(`Server is listening on port ${serverConfig.port}!`))

