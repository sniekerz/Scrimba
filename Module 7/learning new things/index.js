//Aim: create an array of length ten. The elements should be undefined.

// const endOfLevelBosses = [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined]

// const endOfLevelBosses = []

// for (let i=0; i<10; i++){
//     endOfLevelBosses.push(undefined)
// }

// const endOfLevelBosses = new Array(10);

// console.log(endOfLevelBosses);

/*
Challenge
1. Create a new array with a length of 1000.
2. Log out the new array.
3. Don't worry about the emoji yet!
*/

// const goldCoins = new Array(10)
//   .fill("🪙")
//   .map(function (coins) {
//     return `<div class="box">${coins}</div>`;
//   })
//   .join("");
// console.log(goldCoins.length);

// /*
// Challenge
// 1. Create a new array with a length of 1000 and save it to a
//    const called poisonMushrooms
// 2. Convert each element of the array to a mushroom emoji 🍄
// 3. Log out the new array
// */

// const poisonMushrooms = new Array(10)
//   .fill("🍄")
//   .map(function (mushroom) {
//     return `<div class="box">${mushroom}</div>`;
//   })
//   .join("");
// console.log(poisonMushrooms.length);

// document.getElementById("mushrooms").innerHTML = poisonMushrooms + goldCoins;

// CONSTRUCTOR CLASS
// SIMPLE CONSTRUCTOR
// function Animal() {
//   this.species = "tiger";
//   this.weightKg = 56;
//   this.age = 2;
// }

// const animal1 = new Animal();

// console.log(animal1);

// const animalForRelease1 = {
//   name: "Tilly",
//   species: "tiger",
//   weightKg: 56,
//   age: 2,
//   dateOfRelease: "03-02-2022",
// };
// const animalForRelease2 = {
//   name: "Nelly",
//   species: "elephant",
//   weightKg: 320,
//   age: 16,
//   dateOfRelease: "03-02-2022",
// };

// function Animal(data) {
//   this.name = data.name;
//   this.species = data.species;
//   this.weightKg = data.weightKg;
//   this.age = data.age;
//   this.dateOfRelease = data.dateOfRelease;
// }

// const tillyTheTiger = new Animal(animalForRelease1);
// const nellyTheElephant = new Animal(animalForRelease2);

// console.log(tillyTheTiger, nellyTheElephant);

// const hotel1 = {
//   name: "Safari View",
//   rooms: 30,
//   stars: "⭐⭐⭐⭐⭐",
//   costPerNightAdult: 240,
//   costPerNightChild: 180,
// };

// const hotel2 = {
//   name: "Leopard Mansion",
//   rooms: 96,
//   stars: "⭐⭐⭐",
//   costPerNightAdult: 120,
//   costPerNightChild: 180,
// };
// // /*
// // Challenge:
// // 1. Create a constructor function called NationalParkHotels.
// // 2. Have it take in "data" as a parameter
// // 3. Assign the data to "this"
// // 4. Log out the result of creating an instance of
// //    NationalParkHotels for each hotel.
// // */

// function NationalParkHotels(data) {
//   this.name = data.name;
//   this.rooms = data.rooms;
//   this.stars = data.stars;
//   this.costPerNightAdult = data.costPerNightAdult;
//   this.costPerNightChild = data.costPerNightChild;
//   this.summariseHotel = function () {
//     const totalPrice = this.costPerNightAdult * 2 + this.costPerNightChild * 2;

//     console.log(`A one night stay at the ${this.name}
//     for two adults and two children costs a total of
//     ${totalPrice} dollars`);
//   };
// }

// const leopardMansion = new NationalParkHotels(hotel2);
// const safariView = new NationalParkHotels(hotel1);
// safariView.summariseHotel();
// leopardMansion.summariseHotel();

/*
Challenge:
1. Create a method on the constructor function called
   "summariseHotel".
2. Have it log out the following sentence 'A one night stay 
   at the <HOTEL NAME> for two adults and two children costs a 
   total of <PRICE>'
3. Your method will need the logic to calculate the price.
*/

// const studentDetails = {
//   firstName: "janaka",
//   lastName: "siriwardena",
//   age: 28,
//   country: "sri lanka",
//   email: "j.siri@totalinternet.com",
//   discordUsername: "JS1",
// };

// function Student(data) {
//   // this.firstName = data.firstName;
//   // this.lastName = data.lastName;
//   // this.age = data.age;
//   // this.country = data.country;
//   // this.email = data.email;
//   // this.discordUsername = data.discordUsername;
//   Object.assign(this, data);
//   this.summariseStudent = function () {
//     console.log(`${this.firstName} ${this.lastName} is ${this.age} years old
//       and comes from ${this.country}. Their email is ${this.email} and you can find them on discord as ${this.discordUsername}`);
//   };
// }

// const newStudent = new Student(studentDetails);
// newStudent.summariseStudent();

// const sandraKayeProfileData = {
// 	name: 'Sandra Kaye',
// 	portfolio: 'www.sandrasportfolio.com',
// 	currentJob: 'Google',
// 	currentSalary: '400k'
// }

// /*
// Challenge
// 1. Use Object.assign to cut 4 lines of code from the constructor function.
// */
// const sandraKayeProfileData = {
//   name: "Sandra Kaye",
//   portfolio: "www.sandrasportfolio.com",
//   currentJob: "Google",
//   currentSalary: "400k",
// };

// function DevProfile(data) {
//   // this.name = data.name;
//   // this.portfolio = data.portfolio;
//   // this.currentJob = data.currentJob;
//   // this.currentSalary = data.currentSalary;
//   Object.assign(this, data);
//   this.summariseDev = function () {
//     console.log(
//       `${this.name}'s porfolio is at ${this.portfolio} and they work at ${this.currentJob}. Their current salary is ${this.currentSalary}.`
//     );
//   };
// }

// const sandraKaye = new DevProfile(sandraKayeProfileData);
// sandraKaye.summariseDev();

// function alertSpend(amount){
// 	return `Warning! You just spent £${amount}!`
// }

// const alertSpend = (name, amount) =>
//   `Warning! ${name}, you just spent $${amount}!`;
// console.log(alertSpend("Niek", 300));

// function speedWarning(speed) {
//   return `You are going at ${speed} mph!`;
// }

// const speedWarning = (speedlimit, speed) => {
//   if (speed > speedlimit) {
//     return `Warning you are driving faster than ${speed} miles per hour`;
//   }
// };

// console.log(speedWarning(30, 40));

/*
Challenge
1. Refactor this function so it only warns drivers 
   who are going over the speed limit.
2. The function now needs to take in two parameters. 
   The first is the speed limit, the second is the 
   driver's actual speed.
*/

// const distanceTraveledMiles = [267, 345, 234, 190, 299];

// const distanceTraveledKm = distanceTraveledMiles.map((distance) =>
//   Math.round(distance * 1.6)
// );

// console.log(distanceTraveledKm);

/*
Challenge
1. Refactor this .map method so the inline function is
   an arrow function. 
2. Write the least amount of code possible.
*/

const page = (
  <div>
    <h1 className="header">This is JSX</h1>
    <p>This is a paragraph</p>
  </div>
);

console.log(page);

ReactDOM.render(page, document.getElementById("root"));

/* 
Challenge: 

Create a navbar in JSX:
    - Use the semantic `nav` element as the parent wrapper
    - Have an h1 element with the brand name of your "website"
    - Insert an unordered list for the other nav elements
        - Inside the `ul`, have three `li`s for "Pricing",
        "About", and "Contact"
    - Don't worry about styling yet - it'll just be plain-looking HTML for now
*/
