// JAVASCRIPT
// ARRAYS
// let featuredPosts = [
//   "Check out my Netflix Clone",
//   "Here's the code for my project",
//   "I've just relaunched my portfolio",
// ];

// console.log(featuredPosts.length);

// let niekBrouwer = [
//   (firstName = "Niek"),
//   (lastName = "Brouwer"),
//   (myAge = 33),
//   (likesPizza = true),
// ];

// console.log(niekBrouwer);

// FOR LOOP
// for (let count = 10; count < 101; count += 1) {
//   console.log(count);
// }
//     START   ;  FINISH ;   Increment
// for (let i = 1; i < 6; i += 1) {
//   console.log(i);
// }

// for (let i = 10; i < 101; i += 10) {
//   console.log(i);
// // }
// featuredPosts.push("Great to hear");
// featuredPosts.push("Same here!");

// for (let i = 0; i < featuredPosts.length; i += 1) {
//   console.log(featuredPosts[i]);
// }

// let cards = [7, 3, 9];

// for (let i = 0; i < cards.length; i++) {
//   console.log(cards[i]);
// }

// let sentence = ["Hello", "my", "name", "is", "Per"];
// let greetingEl = document.getElementById("greeting-el");

// // Render the sentence in the greetingEl paragraph using a for loop and .textContent
// for (let i = 0; i < sentence.length; i++) {
//   greetingEl.textContent += sentence[i] + " ";
// }

let hasSolvedChallenge = false;
let hasHintsLeft = true;

// Create an if statement that checks that both variables are false.
// If so, run the showSolution() function

if (hasSolvedChallenge || hasHintsLeft) {
  showNoSolution();
} else {
  showSolution();
}

function showNoSolution() {
  console.log("Not showing the solution....");
}

function showSolution() {
  console.log("Showing the solution....");
}

// Create two boolean variables, likesDocumentaries and likesStartups
// Use an OR statement (||) to call recommendMovie() if either of those variables are true

let likesDocumentaries = false;
let likesStartups = true;

if (likesDocumentaries || likesStartups) {
  recommendMovie();
} else {
  console.log("You will hate this movie");
}

function recommendMovie() {
  console.log("Hey, check out this new film we think you will like!");
}
