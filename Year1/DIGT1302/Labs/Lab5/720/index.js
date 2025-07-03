const game = {
  lives: 3,
  coins: 0,

  get points() {
    return this.coins * 10;
  },

  playerDies() {
    if (this.lives > 0) {
      this.lives--;
    }
  },

  newGame() {
    this.lives = 3;
    this.coins = 0;
  },
};

console.log("Testing game object...");

// Uncomment the code below to test the game object
/* 
console.log("Testing game object...");

// existence & initial properties
console.log("typeof game = " + typeof game);          // should be "object"
console.log("lives = " + game.lives);                 // should be 3
console.log("coins = " + game.coins);                 // should be 0

// points getter
console.log("points = " + game.points);               // should be 0
game.coins = 2;
console.log("points = " + game.points);               // should be 20
game.coins = 50;
console.log("points = " + game.points);               // should be 500

// playerDies() method
console.log("typeof game.playerDies = " + typeof game.playerDies); // should be "function"
console.log("lives = " + game.lives);                 // should still be 3
game.playerDies();
console.log("lives = " + game.lives);                 // should be 2
game.playerDies();
console.log("lives = " + game.lives);                 // should be 1
game.playerDies();
console.log("lives = " + game.lives);                 // should be 0
game.playerDies();
console.log("lives = " + game.lives);                 // should remain 0

// newGame() method
console.log("typeof game.newGame = " + typeof game.newGame);   // should be "function"
game.lives = 0;
game.coins = 5;
game.newGame();
console.log("lives = " + game.lives);                 // should be 3
console.log("coins = " + game.coins);                 // should be 0
*/

// Do NOT remove the following line:
export default game;
