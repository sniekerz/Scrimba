// let firstName = "Niek ";
// let lastName = "Brouwer";
// let greeting = "Hi there";
// let fullName = firstName + lastName;

// let nameEl = document.getElementById("name-el");
// console.log(`fullName = `, fullName);

// nameEl.textContent = fullName;

// function fullGreeting() {
//   console.log(greeting + " " + fullName + "!");
// }
// fullGreeting();

// let myPoints = 3;

// // Create two functions, add3Points() and remove1Point(), and have them
// // add/remove points to/from the myPoints variable

// function add3Points() {
//   myPoints += 3;
// }

// function remove1Point() {
//   myPoints -= 1;
// }

// // Call the functions to that the line below logs out 10
// console.log(myPoints);
// add3Points();
// console.log(myPoints);
// add3Points();
// console.log(myPoints);
// add3Points();
// console.log(myPoints);
// remove1Point();
// console.log(myPoints);
// remove1Point();
// console.log(myPoints);

// // Try to predict what each of the lines will log out
// console.log("2" + 2); // "22"
// console.log(11 + 7); // 18
// console.log(6 + "5"); // "65"
// console.log("My points: " + 5 + 9); // "My points: 59"
// console.log(2 + 2); // 4
// console.log("11" + "14"); // "1114"

// // When the user clicks the purchase button, render out
// // "Something went wrong, please try again" in the paragraph
// // that has the id="error".

// let errorEl = document.getElementById("error");

// function purchase() {
//   errorEl.textContent = "Something went wrong, please try again";
// }

// let num1 = 8;
// let num2 = 2;
// let sumEl = document.getElementById("sum-el");
// document.getElementById("num1-el").textContent = num1;
// document.getElementById("num2-el").textContent = num2;

// Create four functions: add(), subtract(), divide(), multiply()
// Call the correct function when the user clicks on one of the buttons
// Perform the given calculation using num1 and num2
// Render the result of the calculation in the paragraph with id="sum-el"

// E.g. if the user clicks on the "Plus" button, you should render
// "Sum: 10" (since 8 + 2 = 10) inside the paragraph with id="sum-el"

// function add() {
//   let sum = num1 + num2;
//   sumEl.textContent = sum;
// }

// function subtract() {
//   let sum = num1 - num2;
//   sumEl.textContent = sum;
// }

// function divide() {
//   let sum = num1 / num2;
//   sumEl.textContent = sum;
// }

// function multiply() {
//   let sum = num1 * num2;
//   sumEl.textContent = sum;
// }

// let thisPerson = {
//   name: "Niek",
//   age: "25",
//   country: "Netherlands",
// };

// function logData() {
//   console.log(
//     thisPerson.name +
//       " is " +
//       thisPerson.age +
//       " years old and lives in " +
//       thisPerson.country
//   );
// }

// logData();

// let age = 23;

// if (age < 6) {
//   console.log("You can travel for free");
// } else if (age < 18) {
//   console.log("You will get a child discount");
// } else if (age < 27) {
//   console.log("You will get a student discount");
// } else if (age < 67) {
//   console.log("You will pay full price");
// } else {
//   console.log("You will get a senior discount");
// }

// let largeCountries = [
//   "China",
//   "India",
//   "United States",
//   "Pakistan",
//   "Indonesia",
// ];

// for (let i = 0; i < largeCountries.length; i++) {
//   console.log("- " + largeCountries[i]);
// }

// let largeCountries = ["Tuvalu", "India", "USA", "Indonesia", "Monaco"];
// console.log(largeCountries);

// largeCountries.pop();
// largeCountries.shift();
// largeCountries.pop();
// largeCountries.unshift("China");
// largeCountries.push("Pakistan");
// largeCountries.push("Indonesia");
// console.log(largeCountries);

// let dayOfMonth = 13;
// let weekday = "Friday";

// if (dayOfMonth === 13 && weekday === "Friday") {
//   console.log("😱");
// } else {
//   console.log("we're okay!");
// }

// let hands = ["rock", "paper", "scissors"];

// function randomHand() {
//   let indexNumber = Math.floor(Math.random() * 3);
//   return hands[indexNumber];
// }

// console.log(randomHand());

// const fighters = [
//   "🐉",
//   "🐥",
//   "🐊",
//   "💩",
//   "🦍",
//   "🐢",
//   "🐩",
//   "🦭",
//   "🦀",
//   "🐝",
//   "🤖",
//   "🐘",
//   "🐸",
//   "🕷",
//   "🐆",
//   "🦕",
//   "🦁",
// ];

// const stageEl = document.getElementById("stage");
// const fightButton = document.getElementById("fightButton");

// fightButton.addEventListener("click", function () {
//   const randomIndex1 = Math.floor(Math.random() * fighters.length);
//   const randomIndex2 = Math.floor(Math.random() * fighters.length);
//   stageEl.textContent = `${fighters[randomIndex1]} vs ${fighters[randomIndex2]}`;
// });

// let fruit = ["🍎", "🍊", "🍎", "🍎", "🍊"];
// let appleShelf = document.getElementById("apple-shelf");
// let orangeShelf = document.getElementById("orange-shelf");

// function sortFruit() {
//   for (i = 0; i < fruit.length; i++) {
//     console.log(fruit[i], "🍎");
//     if (fruit[i] === "🍎") {
//       appleShelf.textContent += "🍎";
//     } else {
//       orangeShelf.textContent += "🍊";
//     }
//   }
// }
// sortFruit();
