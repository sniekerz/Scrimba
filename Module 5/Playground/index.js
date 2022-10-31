// const testNumber = 10 + 5;
// console.log(testNumber);

const myForm = document.getElementById("login-form");
myForm.addEventListener("submit", function (event) {
  event.preventDefault();
  console.log("Form submitted!");
});
