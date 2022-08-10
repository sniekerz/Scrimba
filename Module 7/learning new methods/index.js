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

const goldCoins = new Array(10)
  .fill("🪙")
  .map(function (coins) {
    return `<div class="box">${coins}</div>`;
  })
  .join("");
console.log(goldCoins.length);

/*
Challenge
1. Create a new array with a length of 1000 and save it to a 
   const called poisonMushrooms
2. Convert each element of the array to a mushroom emoji 🍄
3. Log out the new array 
*/

const poisonMushrooms = new Array(10)
  .fill("🍄")
  .map(function (mushroom) {
    return `<div class="box">${mushroom}</div>`;
  })
  .join("");
console.log(poisonMushrooms.length);

document.getElementById("mushrooms").innerHTML = poisonMushrooms + goldCoins;
