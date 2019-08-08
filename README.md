# OOP Game Show App TD Project 4
 Word guessing game project that uses object oriented programming in Javascript

## Game.js
This file handles the game class that handles the central game logic

### Constructor
* `missed` - Initialized at zero and acts as a counter to see how many times the player has missed
* `phrases` - Holds an array of `Phrase` objects, intialized with `this.createPhrases()`
* `activePhrase` - Initialized as `null`. This is the phrase chosen to play in the game. The value is assigned in `startGame()` when a phrase is chosen with `this.getRandomPhrase()`

### startGame()
This function, that takes no parameters initializes the game by clearing all previous values, in the case that the game was restarted by the player, and gets the game ready by picking a random phrase with `getRandomPhrase()` and setting it to the `this.activePhrase` then displaying it with `addPhraseToDisplay()`

### createPhrases()
This function, that takes no parameters, creates an array of 5 `Phrase` objects and returns it

### getRandomPhrase()
This function, that takes no parameters, returns a random phrase from `this.phrases`

### handleInteraction(button)
This function takes a button parameters. If `this.activePhrase` contains the inputted button, the button is given a `chosen` class, disabled and the matching letter is displayed with `this.activePhrase.showMatchedLetter()`. Then it checks for a win with `this.checkForWin()`, if true `this.gameOver()` is called, if not nothing happens.
If `this.activePhrase` does not contain the inputted button, the button is given a `wrong` class, disabled and `this.removeLife()` is called


## Additional styles
Animations were added to the transitions between the game start and play screens, the play screen and game over screens and a rotation to help indicate a loss in life.
