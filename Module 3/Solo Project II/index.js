const lengthEl = document.getElementById("length-el");
const volumeEl = document.getElementById("volume-el");
const massEl = document.getElementById("mass-el");
const convertBtn = document.getElementById("convert");
const inputEl = document.getElementById("input-el");
let convertValue = "";
const feet = 3.281;
const gallon = 0.264;
const pound = 2.204;

convertBtn.addEventListener("click", function () {
  convertValue = inputEl.value;
  feetValue = (convertValue * feet).toFixed(3);
  poundValue = (convertValue * pound).toFixed(3);
  gallonValue = (convertValue * gallon).toFixed(3);
  meterValue = (convertValue / feet).toFixed(3);
  literValue = (convertValue / gallon).toFixed(3);
  kiloValue = (convertValue / pound).toFixed(3);
  lengthEl.textContent = `${convertValue} meters = ${gallonValue} feet | ${convertValue} feet = ${literValue} meters`;
  volumeEl.textContent = `${convertValue} liters = ${gallonValue} gallons | ${convertValue} gallon = ${literValue} liters`;
  massEl.textContent = `${convertValue} kilograms = ${poundValue} pounds | ${convertValue} pound = ${kiloValue} kilograms`;
});
