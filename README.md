# OOP Game Show App TD Project 4
 Word guessing game project that uses object oriented programming in Javascript

## Game.js
This file handles the game class that handles the central game logic

### Constructor
* `missed` - Initialized at zero and acts as a counter to see how many times the player has missed
* `phrases` - Holds an array of `Phrase` objects, intialized with `this.createPhrases()`
* `activePhrase` - Initialized as `null`. This is the phrase chosen to play in the game. The value is assigned in `startGame()` when a phrase is chosen with `this.getRandomPhrase()`


## Additional styles
Animations were added to the transitions between the game start and play screens, the play screen and game over screens and a rotation to help indicate a loss in life.
