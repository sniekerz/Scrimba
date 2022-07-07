// 1. Grab the box from the DOM and store it in a variable
const theBox = document.getElementById("box");
console.log(theBox);
// 2. Add a click event listener to the box
theBox.addEventListener("click", function () {
  console.log("I want to open the box!");
});
// 3. Log out "I want to open the box!" when it's clicked
