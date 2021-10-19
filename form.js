var mysql = require("mysql");

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "A9560076675",
  database: "form",
});

con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
  var sql =
    "INSERT INTO form (fullname, email, pno, msg) VALUES ('Ayush Luthra', 'ayushluthra24@gmail.com', '9958136675', 'hi')";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });
});

// var http = require("http");
// var fs = require("fs");

// http
//   .createServer(function (req, res) {
//     fs.readFile("contact.html", function (err, data) {
//       res.writeHead(200, { "Content-Type": "text/html" });
//       res.write(data);
//       return res.end("form submited 1");
//     });
//   })
//   .listen(8080);
