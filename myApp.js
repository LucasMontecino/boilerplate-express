require("dotenv").config();
let express = require("express");
let app = express();

app.get("/", (req, res) => {
  let path = __dirname + "/views/index.html";

  res.sendFile(path);
});

app.get("/json", (req, res) => {
  let response = "";

  if (process.env.MESSAGE_STYLE === "uppercase") {
    response = "Hello json".toUpperCase();
  } else {
    response = "Hello json";
  }

  res.json({ message: response });
});

app.use("/public", express.static(__dirname + "/public"));

console.log("Hello World");

module.exports = app;
