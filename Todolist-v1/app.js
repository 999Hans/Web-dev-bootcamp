const express = require("express");
const bodyParser = require("body-parser");

const app = express();
var items = ["Buy Food", "Study"];
var workItems = [];

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", function (req, res) {
  var today = new Date();
  var currentDay = today.getDay();
  var option = { weekday: "long", day: "numeric", month: "long" };
  var day = today.toLocaleDateString("en-Us", option);

  res.render("list", { listOfTitle: day, newItemList: items });
});

app.post("/", function (req, res) {
  let item = req.body.newItem;
  items.push(item);

  res.redirect("/");
});

app.get("/work", function (req, res) {
  res.render("list", { listOfTitle: "WorkList", newItemList: workItems });
});

app.post("/work", function (req, res) {
  let item = req.body.newItem;
  workItems.push(item);

  res.redirect("/work");
});

app.get("/about", function (req, res) {
  res.render("about");
});

app.listen(3000, function () {
  console.log("Server is running on port 3000");
});
