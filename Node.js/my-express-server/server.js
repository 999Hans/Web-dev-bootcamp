//jshint esversion:6

const express = require("express");

const app = express();

app.get("/", function (req, res) {
  res.send("<h1>Hello</h1>");
});

app.get("/contact", function (req, res) {
  res.send("<h1>My Email</h1>");
});

app.get("/about", function (req, res) {
  res.send("<h1>My name is Hanyeong Oh</h1>");
});

app.get("/hobbies", function (req, res) {
  res.send("<h1>My hobby is game</h1>");
});

app.listen(3000, function () {
  console.log("server started on port 3000");
});
