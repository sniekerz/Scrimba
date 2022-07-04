// 1. Grab the save-el paragrah and store it in a variable called saveEl
let counter = 0;
let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");

function increment() {
  counter += 1;
  countEl.textContent = counter;
}

function save() {
  let saved = counter + " - ";
  saveEl.textContent += saved;
  countEl.textContent = 0;
  counter = 0;
}
