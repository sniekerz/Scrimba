function countdown() {
  console.log(5);
  console.log(4);
  console.log(3);
  console.log(2);
  console.log(1);
}

// Setting up the the race 🏎 🏎 🏎

countdown();

// GO! 🏁
// Players are running the race 🏎 💨
// Race is finished! 🍾

// Get ready for a new race 🏎 🏎 🏎

countdown();

// Create a function (you decide the name) that logs out the number 42 to the console
function logNumber() {
  let myNumber = 42;
  console.log(myNumber);
}

// Call/invoke the function
logNumber();

let lap1 = 34;
let lap2 = 33;
let lap3 = 36;

function totalLaptime() {
  let raceTime = lap1 + lap2 + lap3;
  console.log(raceTime);
}

totalLaptime();

let lapsCompleted = 0;

function newLap() {
  lapsCompleted = lapsCompleted + 1;
  console.log(lapsCompleted);
}

newLap();
newLap();
newLap();
