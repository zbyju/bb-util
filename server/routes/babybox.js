const express = require("express")
const moment = require("moment")
const fs = require("fs")
const data = require("../data")
const helper = require("../logic/helper")

const router = express.Router()

router.get("/", (req, res) => {
    let babyboxTime = moment(req.query.time, "hh:mm:ss")
    let id = 1
    let time = moment()
    if(data.babyboxData && data.babyboxData.id) {
        id = ++data.babyboxData.id
    }
    if(!babyboxTime || typeof babyboxTime === 'undefined' || isNaN(babyboxTime)) { //If data are not coming from babybox, then dont update
        return
    }
    data.babyboxData = {
        id,
        time,
        babyboxTime
    }
    if(!time.isValid()) {
        res.json({ message: "err" })
    } else {
        res.json({ message: "ok" })
    }
})

module.exports = router