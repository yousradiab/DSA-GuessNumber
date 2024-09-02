"use strict";

window.addEventListener("load", initApp);

let min = 0;
let max = 100;
let middle;
let guessCount = 0;

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
  guessCount++;
  console.log(guessCount);
  middle = Math.floor((max + min) / 2);
  console.log(`min: ${min}
    max: ${max}`);
  if (min > max) {
    displayLie();
  } else {
    displayGuess(middle);
  }
}

function displayLie() {
  document.querySelector("#guess").insertAdjacentHTML(
    "beforeend",
    /*HTML*/ `
    <h3 class="blue">Stop lying bitch</h3>
    `
  );
  endGame();
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
  min = middle + 1;
  guess();
}

function sayTooHigh() {
  document.querySelector("#guess").insertAdjacentHTML(
    "beforeend",
    /*HTML*/ `
    <h3 class="red">User: That was too high!</h3>
    `
  );
  max = middle - 1;
  guess();
}

function sayCorrect() {
  document.querySelector("#guess").insertAdjacentHTML(
    "beforeend",
    /*HTML*/ `
    <h3 class="green">User: You got it!</h3>
    <h3 class="blue">It took me ${guessCount} guesses!</h3>
    `
  );
  endGame();
}

function endGame() {
  min = 0;
  max = 100;
  (guessCount = 0), document.querySelector("#start").classList.remove("hidden");
  document.querySelector("#high").classList.add("hidden");
  document.querySelector("#low").classList.add("hidden");
  document.querySelector("#correct").classList.add("hidden");
}
