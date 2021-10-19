var express = require("express");
var app = express();

app.get("/", function (req, res) {
  res.send("<html><body><h1>FORM DATA</h1></body></html>");
});

app.post("/submit-data", function (req, res) {
  res.send("POST request");
});
