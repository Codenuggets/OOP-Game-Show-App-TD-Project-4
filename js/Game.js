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
     // jQuery animates the original display overlay to fade out
     $('#overlay').fadeOut(() =>{
       // Once fading animation is complete, the display property is hidden
       $('overlay').hide();
     });
     document.querySelector('#phrase ul').innerHTML = '';

     //removes all assigned chosen class names
     let chosen = document.querySelectorAll('.chosen');
     chosen.forEach((letter) => letter.classList.remove('chosen'));
     // removes all assigned wrong class names
     let wrong = document.querySelectorAll('.wrong');
     wrong.forEach((letter) => letter.classList.remove('wrong'));
     // Resets heart images
     let lostHearts = document.querySelectorAll('.tries img');
     lostHearts.forEach((heart) => heart.src = "images/liveHeart.png");
     // Reables all buttons
     let buttons = document.querySelectorAll('button');
     buttons.forEach((button) => button.disabled = false);
     //Removes win or lose class on restart
     $('#overlay').removeClass();
     // Grabs active phrase and adds to display
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

   // Retrieves random phrase from this.phrases
   getRandomPhrase() {
     return this.phrases[Math.floor(Math.random() * this.phrases.length)];
   }

   // Handles any button submission
   handleInteraction(button) {
     // Checks to see if the submitted letter matches a letter in the phrase
     if(this.activePhrase.checkLetter(button.innerText)) {
       button.disabled = true;
       button.classList.add('chosen');
       this.activePhrase.showMatchedLetter(button.innerText);
       // After all button modifications and letter is displayed, this checks if the player won
       if(this.checkForWin()){
         this.gameOver(this.checkForWin());
       };
     } else {
       // If no letters are matched, the button is still disabled but marked wrong and a heart is removed
       button.disabled = true;
       button.classList.add('wrong');
       console.log('OUCH');
       this.removeLife();
     }
 }

  // Handles removing a life if the player gets a guess wrong
   removeLife() {
     let hearts = document.querySelectorAll('.tries img');
     // Changes liveHeart for a  lostHeart to indicate lost life
     // Also Rotates for indicator in lost life
     hearts[this.missed].style.WebkitTransitionDuration='1s';
     hearts[this.missed].style.WebkitTransform = 'rotate(360deg)';
     hearts[this.missed].src = "images/lostHeart.png";
     // this.missed is incremented by 1
     this.missed += 1;
     // Checks to see if  any lives are remaining
     if(this.missed === 5) {
       // If so, this.gameOver is called
       this.gameOver(this.checkForWin());
     }

   }

   // Checks for return condition and returns a boolean value to be used in this.gameOver
   checkForWin(){
     let hiddenLetters = document.querySelectorAll('.hide');
     // Checks all the .hide class names, if there are none left, true is returned
     if(hiddenLetters.length === 0) {
       console.log('You Win!');
       return true;
     } else {
       return false;
     }
   }

   // Displays the 2 different game over screens based on whether the game is lost or won
   gameOver(gameWon) {
     let overlay = document.querySelector('#overlay');
     // Checks to see if game is lost
     if(!gameWon) {
       // If lost, display overlay is show with message showing player they lost
       console.log('You Lose!');
       overlay.classList.remove('start');
       overlay.classList.add('lose');
       document.querySelector('#game-over-message').innerText = 'Ooops, that was one too many, better luck next time!';
       $('#overlay').fadeIn(() =>{
         // Once fading animation is complete, the display property is shown
         // This is done to prevent the hearts from appearing alongside the gameover screen
         $('overlay').show();
       });
       // Resets this.missed for next game if play hits 'Play Again'
       this.missed = 0;
     } else {
       // If won, display overlay is show with message showing player they won
       overlay.classList.remove('start');
       overlay.classList.add('win');
       document.querySelector('#game-over-message').innerText = 'Way to go!';
       $('#overlay').fadeIn(() =>{
         // Once fading animation is complete, the display property is shown
         $('overlay').show();
       });
       // Resets this.missed for next game if play hits 'Play Again'
       this.missed = 0;
     }
      //Resets hearts transition elements so that it doesn't show during gameover screen
     $('.tries img').each((index, value) => {
       value.style.WebkitTransitionDuration='';
       value.style.WebkitTransform = '';
     });
   }
 }
