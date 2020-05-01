var gamePattern = [];
var buttonColor = ["red", "blue", "green", "yellow"];
var userClickedPattern = [];
var level = 0;
var started = true;

function nextSequence() {
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColor = buttonColor[randomNumber];
  gamePattern.push(randomChosenColor);

  $("#" + randomChosenColor)
    .fadeIn(100)
    .fadeOut(100)
    .fadeIn(100);
  playSound(randomChosenColor);
  level++;
  started = false;
}

$(".btn").on("click", function () {
  var userChosenColor = event.target.id;
  userClickedPattern.push(userChosenColor);

  playSound(event.target.id);
  animatePress(event);
});

function playSound(key) {
  var audio = new Audio("sounds/" + key + ".mp3");
  audio.play();
}

function animatePress(event) {
  $("#" + event.target.id)
    .addClass("pressed")
    .delay(100)
    .queue(function (next) {
      $(this).removeClass("pressed");
      next();
    });
}

$(document).keydown(function () {
  if (started) {
    nextSequence();
    $("h1").text("Level " + level);
  }
});
