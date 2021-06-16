"use strict";

let numberToGuess = Math.floor(Math.random() * 20) + 1;

let score = 20;

let highscore = 0;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  if (!guess) {
    displayMessage("⛔ No number!");
  } else if (guess === numberToGuess) {
    displayMessage("🎉 Correct number!");
    document.querySelector(".number").textContent = numberToGuess;

    document.querySelector("body").style.backgroundColor = "#60b347";

    document.querySelector(".number").style.width = "30rem";

    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  } else if (guess !== numberToGuess) {
    if (score > 1) {
      displayMessage(guess > numberToGuess ? "🚀 Too high!" : "⬇ Too low!");

      score--;
      document.querySelector(".score").textContent = score;
    } else {
      displayMessage("😥 You lost the game!");
      document.querySelector(".score").textContent = 0;
      document.querySelector(".number").textContent = numberToGuess;
      document.querySelector("body").style.backgroundColor = "#f54242";
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  numberToGuess = Math.floor(Math.random() * 20) + 1;
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
  displayMessage("Start guessing...");
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  document.querySelector(".score").textContent = score;
});
