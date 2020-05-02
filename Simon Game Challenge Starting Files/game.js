var gamePattern = [];
var buttonColor = ["red", "blue", "green", "yellow"];
var userClickedPattern = [];
var level = 0;
var started = true;

function nextSequence() {
  userClickedPattern = [];
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
  checkAnswer(userClickedPattern.length - 1);
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

function checkAnswer(currentLevel) {
  if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
    if (gamePattern.length === userClickedPattern.length) {
      setTimeout(function () {
        nextSequence();
        $("h1").text("Level " + level);
      }, 1000);
    }
  } else {
    console.log("wrong");
    playSound("wrong");
    $("body")
      .addClass("game-over")
      .delay(200)
      .queue(function (next) {
        $(this).removeClass("game-over");
        next();
      });
    $("h1").text("Game Over, Press Any Key to Restart");
    startOver();
  }
}

function startOver() {
  level = 0;
  gamePattern = [];
  started = true;
}
