import { getDiceRollArray, getDicePlaceholderHtml } from "./utils.js";

/*CHALLENGE
1. Ceate a new method inside Character called "takeDamage".
2. For now, have the method log out the name of the damaged character
and phrase "is damaged".
3. In index.js, find the attack() function and call takeDamage
for each character inside that function. 
*/

function Character(data) {
  Object.assign(this, data);

  this.diceArray = getDicePlaceholderHtml(this.diceCount);

  this.getDiceHtml = function () {
    this.currentDiceScore = getDiceRollArray(this.diceCount);
    this.diceArray = this.currentDiceScore
      .map(function (num) {
        return `<div class="dice">${num}</div>`;
      })
      .join("");
  };

  this.takeDamage = function (attackScoreArray) {
    const totalDamage = attackScoreArray.reduce(function (total, num) {
      return total + num;
    });
    this.health -= totalDamage;
    if (this.health <= 0) {
      this.health = 0;
      this.dead = true;
    }
  };

  this.getCharacterHtml = function () {
    const { name, avatar, health, diceCount, diceArray } = this;

    return `
          <div class="character-card">
              <h4 class="name"> ${name} </h4>
              <img class="avatar" src="${avatar}" />
              <div class="health">health: <b> ${health} </b></div>
              <div class="dice-container">
                  ${diceArray}
              </div>
          </div>`;
  };
}

export default Character;
