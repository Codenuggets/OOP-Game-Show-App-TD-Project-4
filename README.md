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
This function takes a button parameter. If `this.activePhrase` contains the inputted button, the button is given a `chosen` class, disabled and the matching letter is displayed with `this.activePhrase.showMatchedLetter()`. Then it checks for a win with `this.checkForWin()`, if true `this.gameOver()` is called, if not nothing happens.
If `this.activePhrase` does not contain the inputted button, the button is given a `wrong` class, disabled and `this.removeLife()` is called

### removeLife()
This function that takes no parameters. When called, this function animates the live heart image 360 degrees and changes it to a lost heart image visually indicating a loss of life to the player. Then there is a check on `this.missed` to see if the player has any lives remaining, if `this.missed` is 5, `this.gameOver()` is called

### checkForWin()
This function, that takes no parameters, checks to see how many `hide` classes are assigned on the page. The `hide` class is only assigned to letters that are still hidden, if all letters are shown, they should have a `show` class name instead. If there are no `hide` class names assigned, `true` is returned, otherwise `false is returned`

### gameOver(gameWon)
This function takes a boolean parameter, `gameWon`. The game first checks to see if `gameWon` is false, if so the overlay is given a `lose` class name and brings the overlay back with a `fadeIn` animation with jQuery. The `<h1>` element with the id `game-over-message` is updated is a message to show the player that they lost.
Otherwise the function changes the overlay to a win screen, with the overlay being give a `win` class name and a update to `game-over-message` with a message to show the player they won.
After either scenario, `this.missed` is reset to zero to prepare in case the player wants to play again.
There was a bug with the lost heart images appearing over the overlay so those image's animation values are reset as well.

## Phrase.js
This file contains the `Phrase` class that handles all the logic for the phrase object

### Constructor
* `phrase` - Initialized and turned to lower case when `Phrase` object is generated

### addPhraseToDisplay()
This function, that takes no parameters, splits the phrase into separate characters and iterates over them, adding them to page with unique classes based on whether it is a letter or space.

### checkLetter(letter)
This function takes a `letter` parameter and checks to see if this phrase object includes it and returns a boolean value based on those findings

### showMatchedLetter(letter)
This function takes a `letter` parameter, loops through the phrase and shows every instance of that letter in the phrase by removing the `hide` class and adding the `show` class.

## Additional styles
Animations were added to the transitions between the game start and play screens, the play screen and game over screens and a rotation to the heart images to help indicate a loss in life.
