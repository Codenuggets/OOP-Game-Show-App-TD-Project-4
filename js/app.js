/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

 const startGameBtn = document.querySelector('#btn_reset');
 startGameBtn.addEventListener('click', () => {
   const game = new Game();
   game.startGame();
 });
