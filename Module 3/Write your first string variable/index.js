"use strict";
// let message = "You have three new messages";
// let username = "Nick";

// console.log(message);
// console.log(username + ", " + message);

// let messageToUser = username + ", " + message;

// console.log(`messageToUser = `, messageToUser);

let welcomeEl = document.getElementById("welcome-el");
let userName = "Nick! 👋";
let greeting = "Welcome back to work ";

function welcome() {
  let welcomeMessage = greeting + userName;
  welcomeEl.innerText = welcomeMessage;
}

welcome();
