let express = require('express');
let app = express();
require("dotenv").config()

let absolutePath = __dirname + "/views/index.html";

app.get("/", (req, res) => {
    res.sendFile(absolutePath);
})
app.use("/public", express.static(__dirname + "/public"));

app.get("/json", (req, res, next) => {
console.log(`${req.method} ${req.path} - ${req.ip}`);
    next();
}, (req, res) => {
    if (process.env.MESSAGE_STYLE == "uppercase") {
        response = "Hello json".toUpperCase();
    } else {
        response = "Hello json";
    }
    res.json({ "message": response });
});

app.get("/now", (req, res, next) => {
    req.time = new Date().toString();
    next();
}, (req, res) => {
    res.send({ time: req.time });
});

























module.exports = app;
