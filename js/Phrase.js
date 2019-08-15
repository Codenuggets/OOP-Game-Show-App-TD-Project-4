 class Phrase {
   constructor(phrase) {
     this.phrase = phrase.toLowerCase();
   }

   // Adds the phrase to HTML and displays it
   addPhraseToDisplay() {
     let phraseSection = document.querySelector("#phrase ul");
     //Splits the phrase into indivial characters
     let splitPhrase = this.phrase.split('');
     //Iterates through each character
     splitPhrase.forEach((letter) => {
       // Adds letter specific if the character is a letter
       if(/\w+/.test(letter)){
         // Interpolation used to insert the letter conveniently
         phraseSection.innerHTML += `<li class="hide letter ${letter}">${letter}</li>`;
       } else {
         // Since the only other character is a space, the else covers that
         phraseSection.innerHTML += '<li class="space"> </li>';
       }
     });
   }

   // Checks to see if the letter selected by player matches
   checkLetter(letter) {
     return this.phrase.includes(letter);
   }

   // Reveals letter if player selection matches a letter in the phrase
   showMatchedLetter(letter) {
     for(let letters of document.querySelectorAll(`.${letter}`)) {
       letters.classList.remove('hide');
       letters.classList.add('show');
     }
   }

 }
