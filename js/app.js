/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

const startGameBtn = document.querySelector('#btn__reset');
let game;
// Adds click eventlistener to construct new game object and start game
startGameBtn.addEventListener('click', () => {
 game = new Game();
 game.startGame();
});

const keys = document.querySelectorAll('.key');
// Loops through keys and assigns click eventlistener
for(let key of keys) {
   key.addEventListener('click', (e) => {
     game.handleInteraction(e.target);
 });
}

const keydownPage = document.querySelector('body');
// Adds keydown eventlistener to whole page to listen for keyboard input
keydownPage.addEventListener('keydown', (e) => {
  //Loops through keys to make sure they match a letter and not any other keyboard input
  for(let key of keys) {
    if(key.innerText === e.key) {
      game.handleInteraction(key);
    }
  }
});
