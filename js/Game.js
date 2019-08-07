/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

 class Game {
   constructor(missed, phrases, activePhrase) {
     this.missed = 0;
     this.phrases = this.createPhrases();
     this.activePhrase = null;
   }

   // Hides the starting screen and shows the game, selects a phrase and displays it
   startGame() {
     document.querySelector('#overlay').style.display = 'none';
     document.querySelector('#phrase ul').innerHTML = '';

     let chosen = document.querySelectorAll('.chosen');
     chosen.forEach((letter) => letter.classList.remove('chosen'));

     let wrong = document.querySelectorAll('.wrong');
     wrong.forEach((letter) => letter.classList.remove('wrong'));

     let lostHearts = document.querySelectorAll('.tries img');
     lostHearts.forEach((heart) => heart.src = "images/liveHeart.png");

     let buttons = document.querySelectorAll('button');
     buttons.forEach((button) => button.disabled = false);

     this.activePhrase = this.getRandomPhrase();
     this.activePhrase.addPhraseToDisplay();
   }

   // Initializes the phrases property with 5 phrase objects
   createPhrases() {
     return  [new Phrase('A Piece of Cake'),
              new Phrase('Kill Two Birds With One Stone'),
              new Phrase('Cup of Joe'),
              new Phrase('In a Pickle'),
              new Phrase('A fish out of water')]
   }

   getRandomPhrase() {
     return this.phrases[Math.floor(Math.random() * this.phrases.length)];
   }

   handleInteraction(button) {
     if(this.activePhrase.checkLetter(button.innerText)) {
       button.disabled = true;
       button.classList.add('chosen');
       this.activePhrase.showMatchedLetter(button.innerText);
       if(this.checkForWin()){
         this.gameOver(this.checkForWin());
       };
     } else {
       button.disabled = true;
       button.classList.add('wrong');
       console.log('OUCH');
       this.removeLife();
     }
 }

   removeLife() {
     let hearts = document.querySelectorAll('.tries img');
     console.log(this.missed);
     console.log(hearts[this.missed]);
     hearts[this.missed].src = "images/lostHeart.png";
     this.missed += 1;
     if(this.missed === 5) {
       this.gameOver(this.checkForWin());
     }

   }

   checkForWin(){
     let hiddenLetters = document.querySelectorAll('.hide');
     if(hiddenLetters.length === 0) {
       console.log('You Win!');
       return true;
     } else {
       return false;
     }
   }

   gameOver(gameWon) {
     let overlay = document.querySelector('#overlay');
     if(!gameWon) {
       console.log('You Lose!');
       overlay.classList.remove('start');
       overlay.classList.add('lose');
       document.querySelector('#game-over-message').innerText = 'Ooops, that was one too many, better luck next time!';
       overlay.style.display = '';
       this.missed = 0;
     } else {
       overlay.classList.remove('start');
       overlay.classList.add('win');
       document.querySelector('#game-over-message').innerText = 'Way to go!';
       overlay.style.display = '';
       this.missed = 0;
     }
   }
 }
