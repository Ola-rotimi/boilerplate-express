let express = require('express');
let app = express();
require("dotenv").config()

let absolutePath = __dirname + "/views/index.html";

app.get("/", (req, res) => {
    res.sendFile(absolutePath);
})
app.use("/public", express.static(__dirname + "/public"));

app.get("/json", (req, res) => {
    if (process.env.MESSAGE_STYLE == "uppercase") {
        response = "Hello json".toUpperCase();
    } else {
       response = "Hello json";
    }
    res.json({"message": response});
})


























 module.exports = app;
