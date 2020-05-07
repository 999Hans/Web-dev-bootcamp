const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function (req, res) {
  const city = req.body.city;
  const url =
    "https://api.openweathermap.org/data/2.5/forecast?q=" +
    city +
    "&APPID=4af4d07cb88e48380fc2418e6f5646d7&units=metric";
  https.get(url, function (response) {
    console.log(response.statusCode);

    response.on("data", function (data) {
      const weatherData = JSON.parse(data);
      const temp = weatherData.list[0].main.temp;
      const weatherdescription = weatherData.list[0].weather[0].description;
      const icon = weatherData.list[0].weather[0].icon;

      res.write(
        "<h1>The temperature in " +
          city +
          " is " +
          temp +
          "degrees Celcius.</h1>"
      );
      res.write("<p>The weather is currently " + weatherdescription + "</p>");
      res.write(
        '<img src="https://openweathermap.org/img/wn/' + icon + '@2x.png">'
      );

      res.send();
    });
  });
});

app.listen(3000, function () {
  console.log("Server is running");
});
