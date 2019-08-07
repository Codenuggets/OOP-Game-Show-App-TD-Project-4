/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

 const startGameBtn = document.querySelector('#btn__reset');
 startGameBtn.addEventListener('click', () => {
   const game = new Game();
   game.startGame();
   console.log(game);
 });
