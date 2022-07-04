// javascript
let scoreHome = document.getElementById("score-home");
let scoreGuest = document.getElementById("score-guest");
let newScoreHome = 0;
let newScoreGeust = 0;

scoreHome.textContent = newScoreHome;
scoreGuest.textContent = newScoreGeust;

function plusoneh() {
  newScoreHome += 1;
  scoreHome.textContent = newScoreHome;
}

function plustwoh() {
  newScoreHome += 2;
  scoreHome.textContent = newScoreHome;
}

function plusthreeh() {
  newScoreHome += 3;
  scoreHome.textContent = newScoreHome;
}

function plusoneg() {
  newScoreGeust += 1;
  scoreGuest.textContent = newScoreGeust;
}

function plustwog() {
  newScoreGeust += 2;
  scoreGuest.textContent = newScoreGeust;
}

function plusthreeg() {
  newScoreGeust += 3;
  scoreGuest.textContent = newScoreGeust;
}

function resetAll() {
  newScoreGeust = 0;
  newScoreHome = 0;
  scoreHome.textContent = newScoreHome;
  scoreGuest.textContent = newScoreGeust;
}
