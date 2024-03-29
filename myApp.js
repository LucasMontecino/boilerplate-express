let express = require("express");
let app = express();

app.get("/", (req, res) => {
  let path = __dirname + "/views/index.html";

  res.sendFile(path);
});

app.get("/json", (req, res) => {
  res.json({ message: "Hello json" });
});

app.use("/public", express.static(__dirname + "/public"));

console.log("Hello World");

module.exports = app;
