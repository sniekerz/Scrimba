// function countdown() {
//   console.log(5);
//   console.log(4);
//   console.log(3);
//   console.log(2);
//   console.log(1);
// }

// // Setting up the the race 🏎 🏎 🏎

// countdown();

// // GO! 🏁
// // Players are running the race 🏎 💨
// // Race is finished! 🍾

// // Get ready for a new race 🏎 🏎 🏎

// countdown();

// // Create a function (you decide the name) that logs out the number 42 to the console
// function logNumber() {
//   let myNumber = 42;
//   console.log(myNumber);
// }

// // Call/invoke the function
// logNumber();

// let lap1 = 34;
// let lap2 = 33;
// let lap3 = 36;

// function totalLaptime() {
//   let raceTime = lap1 + lap2 + lap3;
//   console.log(raceTime);
// }

// totalLaptime();

// let lapsCompleted = 0;

// function newLap() {
//   lapsCompleted = lapsCompleted + 1;
//   console.log(lapsCompleted);
// }

// newLap();
// newLap();
// newLap();

let player1Time = 102;
let player2Time = 107;

// cmd+d - ctrl+d
function getFastestRaceTime() {
  if (player1Time < player2Time) {
    return player1Time;
  } else if (player2Time < player1Time) {
    return player2Time;
  } else {
    return player1Time;
  }
}

// Write a function that returns the total race time
// Call/invoke the function and store the returned value in a new variable
// Finally, log the variable out

function totalRaceTime() {
  let totalRaceTime = player1Time + player2Time;
  return totalRaceTime;
}

let raceTime = totalRaceTime();
console.log(raceTime);
