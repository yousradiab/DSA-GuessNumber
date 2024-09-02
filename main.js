"use strict";

window.addEventListener("load", initApp);

function initApp() {
  document.querySelector("#start").addEventListener("click", startGame);
  document.querySelector("#high").addEventListener("click", sayTooHigh);
  document.querySelector("#low").addEventListener("click", sayTooLow);
  document.querySelector("#correct").addEventListener("click", sayCorrect);
}

function startGame() {
  if (document.querySelector("#guess").innerHTML != "") {
    document.querySelector("#guess").innerHTML = "";
  }
  document.querySelector("#start").classList.add("hidden");
  document.querySelector("#high").classList.remove("hidden");
  document.querySelector("#low").classList.remove("hidden");
  document.querySelector("#correct").classList.remove("hidden");

  guess();
}

function guess() {
  let guessNumber = Math.floor(Math.random() * 100);
  displayGuess(guessNumber);
}

function displayGuess(guessNumber) {
  document.querySelector("#guess").insertAdjacentHTML(
    "beforeend",
    /*HTML*/ `
    <h3 class="blue">Sherlock: My guess is ${guessNumber}</h3>
    `
  );
}

function sayTooLow() {
  document.querySelector("#guess").insertAdjacentHTML(
    "beforeend",
    /*HTML*/ `
    <h3 class="red">User: That was too low!</h3>
    `
  );
  guess();
}

function sayTooHigh() {
  document.querySelector("#guess").insertAdjacentHTML(
    "beforeend",
    /*HTML*/ `
    <h3 class="red">User: That was too high!</h3>
    `
  );
  guess();
}

function sayCorrect() {
  document.querySelector("#guess").insertAdjacentHTML(
    "beforeend",
    /*HTML*/ `
    <h3 class="green">User: You got it!</h3>
    `
  );
  endGame();
}

function endGame() {
  document.querySelector("#start").classList.remove("hidden");
  document.querySelector("#high").classList.add("hidden");
  document.querySelector("#low").classList.add("hidden");
  document.querySelector("#correct").classList.add("hidden");
}
