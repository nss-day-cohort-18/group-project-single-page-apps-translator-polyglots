'use strict';

// Sets results variable and prints to DOM
var results = document.getElementById('translation');

// Get a reference to the button elements in the DOM
var button = document.getElementById('translate-button');
var reload = document.getElementById('clear-button');

// Reloads the page if reset button is pressed
function clear() {
  window.location.reload();
}

// Determines when button is clicked then runs a really big function to
// pull input text, set input text as array, determine which language, send to translate
// function, then pull back translation, join words with .join method and finally write to DOM
button.addEventListener('click', function () {
  // Set variables
  var translatedWords;
  var finalTranslation;
  var translatedArray = [];

  // Pulls input text and defines where to put translation on DOM
  var textInput = document.getElementById('text-input').value;

  var translation = document.getElementById('translation');

  // Takes input text and turns into an array so each word can be translated
  var englishArray = textInput.split(' ');

  // Loops through array of english words and sends each one to translation function
  for (let i = 0; i < englishArray.length; i++) {

    // Checks to see which radio button is checked and runs appropriate translate function
    if (document.getElementById('german-input').checked === true) {
      translatedWords = Dictionary.translateToGerman(englishArray[i].toLowerCase());
    }
    if (document.getElementById('spanish-input').checked === true) {
      translatedWords = Dictionary.translateToSpanish(englishArray[i].toLowerCase());
    }
    if (document.getElementById('french-input').checked === true) {
      translatedWords = Dictionary.translateToFrench(englishArray[i].toLowerCase());
    }
    if (document.getElementById('russian-input').checked === true) {
      responsiveVoice.speak('Sorry, Komrade. Russian translation is no longer available. However, President Trump will send Vladimir "Pooty-Poot" Putin over to translate for you as soon as possible.', "Australian Female");
      // alert('Sorry, Komrade. Russian translation is no longer available. However, President Trump will send Vladimir "Pooty-Poot" Putin over to translate for you as soon as possible.')
      break;
    }

    translatedArray.push(translatedWords); // Pushes translated words into array
    translatedArray.push(' '); // Adds a space string between each word

  }

  finalTranslation = translatedArray.join(''); // Joins translated words from array into a string
  translation.innerHTML = finalTranslation; // Prints to DOM

  responsiveVoice.speak(finalTranslation, "Australian Female");

});

// Determines when clear button is clicked then runs clear function if true
reload.addEventListener('click', clear);
