const express = require('express')
const fs = require("fs")
const _ = require("lodash")
const open = require("open");
const path = require("path")

const data = require("../data")

const router = express.Router()

router.get("/data", (req, res) => {
    res.json({
        babyboxData: data.babyboxData,
        restart: data.restart
    })
})

router.get("/config", (req, res) => {
    res.json(data.config)
})

router.put("/config", (req, res) => {
    req.body.config.startup.pathToProgram = path.join(req.body.config.startup.pathToProgramFolder, "\\SWMP\\index.html")
    req.body.config.startup.pathToProgramSettings = path.join(req.body.config.startup.pathToProgramFolder, "\\BBNP\\bbnp.html")
    console.log(req.body.config.startup.pathToProgram)
    _.merge(data.config, req.body.config)
    fs.writeFile("config/config.json", JSON.stringify(data.config), (err) => {
        if(err) {
            console.log(err)
            res.status(500)
        }
        res.json({ config: data.config })
    })
})

router.post("/open", (req, res) => {
    console.log(req.body.link.link)
    open(req.body.link.link)
    res.json("ok")
})

module.exports = router