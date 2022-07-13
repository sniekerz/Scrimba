// Challenge, dynamic functions!
// const welcomeEl = document.getElementById("welcome-el");

// let firstName = "Niek";
// let LastName = "Brouwer";
// let welomeMessage = "Welcome to your Leads list ";

// function greetUser(welcome, firstName, lastName) {
//   welcomeEl.textContent = `${welcome},  ${firstName}  ${lastName}!`;
// }

// greetUser(welomeMessage, firstName, LastName);

// Create a function, add(), that adds two numbers together and returns the sum
// const welcomeEl = document.getElementById("welcome-el");

// function add(firstNumber, secondNumber) {
//   return firstNumber + secondNumber;
// }

// console.log(add(3, 4)); // should log 7
// console.log(add(9, 102)); // should log 111

// // SETTING THE STAGE
// let player = "Per";
// let opponent = "Nick";
// const game = "AmazingFighter";
// let points = 0;
// let hasWon = false;

// // PLAYING THE GAME
// points += 100;
// hasWon = true;

// // ANNOUNCING THE WINNER
// if (hasWon) {
//   console.log(`${player} has won the ${game} with ${points} points!`);
// } else {
//   console.log(`${opponent} has won the ${game} with ${points} points!`);
// }

// // Go through all variables and decide if they should be let or const
// // Change the console logs to use template strings instead of double quotes

let myCourses = [
  "Learn CSS Animations",
  "UI Design Fundamentals",
  "Intro to Clean Code",
];

// Create a function that takes a single parameter, an array,
// and logs all the items of the array to the console.
function showArray(array) {
  for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
}
// Call the function while passing in myCourses as an argument

showArray(myCourses);
