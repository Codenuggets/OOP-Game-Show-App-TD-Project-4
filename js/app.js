/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

 const startGameBtn = document.querySelector('#btn__reset');
 let game;
 startGameBtn.addEventListener('click', () => {
   game = new Game();
   game.startGame();
   console.log(game);
 });

 const keys = document.querySelectorAll('.key');
 console.log(keys);
 for(let key of keys) {
     key.addEventListener('click', (e) => {
       game.handleInteraction(e.target);
   });
  }
