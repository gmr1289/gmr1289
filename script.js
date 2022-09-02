"use strict";

let RandomNo = Math.trunc(Math.random() * 20) + 1;
let message;
document.querySelector(".check").addEventListener("click", function () {
  const guess = +document.querySelector(".guess").value;

  if (RandomNo === guess) {
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").textContent = RandomNo;
    document.querySelector(".number").style.width = "30rem";
    message = "Correct Ans";
    if (
      document.querySelector(".highscore").textContent <
      document.querySelector(".score").textContent
    ) {
      document.querySelector(".highscore").textContent =
        document.querySelector(".score").textContent;
    }
  } else if (RandomNo > guess) {
    message = "To low";
  } else {
    message = "To high";
  }
  if (document.querySelector(".score").textContent > 0) {
    --document.querySelector(".score").textContent;
  } else {
    message = "You Lost";
  }

  document.querySelector(".message").textContent = message;
});

document.querySelector(".again").addEventListener("click", function () {
  if (
    document.querySelector(".highscore").textContent <
    document.querySelector(".score").textContent
  ) {
    document.querySelector(".highscore").textContent =
      document.querySelector(".score").textContent;
  }
  document.querySelector(".score").textContent = 20;
  document.querySelector(".message").textContent = "Start guessing";
  document.querySelector(".guess").value = 1;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector("body").style.backgroundColor = "#222";
  RandomNo = Math.trunc(Math.random() * 20) + 1;
});
