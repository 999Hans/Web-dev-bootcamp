const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("public"));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/signup.html");
});

app.post("/", function (req, res) {
  var firstName = req.body.firstName;
  var secondName = req.body.secondName;
  var email = req.body.email;

  console.log(firstName, secondName, email);
});

app.listen(3000, function () {
  console.log("Server is running on port 3000");
});

//api key
// 114a272034e72af6f1c10d689df6638d-us18

// audience id
//  11101cf5d1
