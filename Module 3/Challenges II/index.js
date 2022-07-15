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

// let myCourses = [
//   "Learn CSS Animations",
//   "UI Design Fundamentals",
//   "Intro to Clean Code",
// ];

// Create a function that takes a single parameter, an array,
// and logs all the items of the array to the console.
// function showArray(array) {
//   for (let i = 0; i < array.length; i++) {
//     console.log(array[i]);
//   }
// }
// Call the function while passing in myCourses as an argument

// showArray(myCourses);

// // Save a value to localStorage
// localStorage.setItem("myCredits", "100");
// // Delete your code and refresh the page
// // Fetch your value from localStorage and log it out
// let myCredits = localStorage.getItem("myCredits");
// console.log(myCredits);

// let data = [
//   {
//     player: "Jane",
//     score: 52,
//   },
//   {
//     player: "Mark",
//     score: 41,
//   },
// ];

// // Fetch the button from the DOM, store it in a variable
// // Use addEventListener() to listen for button clicks
// // Log Jane's score when the button is clicked (via data)

// let scoreBtn = document.getElementById("score-btn");

// scoreBtn.addEventListener("click", function () {
//   console.log(data[0].score);
//   console.log("button was clicked");
// });

// The generateSentence(desc, arr) takes two parameterer: a description and an array.
// It should return a string based upon the description and array.

// Example 1: if you pass in "largest countries",and ["China", "India", "USA"],
// it should return the string: "The 3 largest countries are China, India, USA"

// Example 2:If you pass in "best fruits" and ["Apples", "Bananas"], it should return:
// "The 2 best fruits are Apples, Bananas"

// Use both a for loop and a template string to solve the challenge
// function generateSentence(desc, arr) {
//   let fullString = `The ${arr.length} ${desc} are: `;
//   for (i = 0; i < arr.length; i++) {
//     if (i === arr.length - 1) {
//       fullString += arr[i] + ".";
//     } else {
//       fullString += arr[i] + ", ";
//     }
//   }
//   return fullString;
// }

// const sentance = generateSentence("Tallest structures", [
//   "Burj Khalifa",
//   "Eifel Tower",
//   "World Trade Center",
// ]);

// console.log(sentance);

// // Create a function that renders the three team images
// // Use a for loop, template strings (``), plus equals (+=)
// // .innerHTML to solve the challenge.

// const container = document.getElementById("container");
// const imgs = ["images/hip1.jpg", "images/hip2.jpg", "images/hip3.jpg"];

// function renderTeam() {
//   let fullTeam = "";
//   for (let i = 0; i < imgs.length; i++) {
//     fullTeam += `<img class="team-img" alt="list of employees" src="${imgs[i]}" />`;
//   }
//   container.innerHTML = fullTeam;
// }

// const team = renderTeam();

// Challenge:
// Round the price in the button down to two decimal places.
// Don't know which method to use? Google it!

// const totalPrice = "420.69235632455";
// const btn = document.getElementById("purchase-btn");
// btn.textContent = `Buy €${Number(totalPrice).toFixed(2)}`;
