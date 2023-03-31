"use strict";

let Secratenumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highSccore = 0;

const displayMessage = (message) => {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  if (!guess) {
    displayMessage("No number  ⛔");
  } else if (guess === Secratenumber) {
    displayMessage("Correct Number ✔");
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    document.querySelector(".number").textContent = Secratenumber;

    if (score > highSccore) {
      highSccore = score;
      document.querySelector(".highscore").textContent = highSccore;
    }
  } else if (guess !== Secratenumber) {
    if (score > 1) {
      guess > Secratenumber
        ? displayMessage("Too high 🙌")
        : displayMessage("Too Low 👇");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      displayMessage("You lost the game ☹");
      document.querySelector(".score").textContent = 0;
    }
  }
});

document.querySelector(".again").addEventListener("click", () => {
  score = 20;
  Secratenumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});
