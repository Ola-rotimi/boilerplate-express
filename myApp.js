let express = require('express');
let app = express();
require("dotenv").config()
let bodyParser = require('body-parser')

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

app.get("/:word/echo", (req, res) => {
    const { word } = req.params
    res.json({ echo: word })
})

app.get("/name", (req, res)=> {
    const {first: firstname, last: lastname} = req.query;
    res.json({name: `${firstname} ${lastname}`})
})

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())

app.post("/name", (req, res) => {
    const { first: firstname, last: lastname } = req.body
    res.json({ name: `${firstname} ${lastname}` });
})

















module.exports = app;
