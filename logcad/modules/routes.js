const express = require('express')
const router = express.Router() //declarando e usando o router.
const bodyParser = require("body-parser");

router.get("/", (req, res) =>{
    res.sendFile("index.html", {root: __dirname})
})

router.post("/admin", (req, res) =>{
    res.sendFile("index2.html", {root: __dirname})

})

module.exports = router //exportando o modulo router pro (app.js)