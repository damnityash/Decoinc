var express = require("express");
var app = express();

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", function (req, res) {
  res.sendFile("contact.html", { root: __dirname });
});

app.post("/submit-form-data", function (req, res) {
  var name =
    req.body.fullName +
    " " +
    req.body.email +
    " " +
    req.body.pno +
    " " +
    req.body.msg;
  res.send(name + " FORM SUBMITTED SUCCESSFULLY!");
});

var server = app.listen(8080, function () {
  console.log("NODE server is running...");
});

// var mysql = require("mysql");

// var con = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "A9560076675",
//   database: "form",
// });

// con.connect(function (err) {
//   if (err) throw err;
//   console.log("Connected!");
//   var sql =
//     "INSERT INTO form (fullname, email, pno, msg) VALUES ('Ayush Luthra', 'ayushluthra24@gmail.com', '9958136675', 'hi')";
//   con.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log("1 record inserted");
//   });
// });
