'use strict';

// Sets results variable and prints to DOM
var results = document.getElementById('translation');

// Get a reference to the button elements in the DOM
var button = document.getElementById('translate-button');
var reload = document.getElementById('clear-button');





// Determines which language should
// be translated to based on which radio button is selected.
var dictionary = (function(textInput) {
  dictionary.translateGerman;
  console.log('test');
})();


// Reloads the page if reset button is pressed
function clear() {
  window.location.reload();
}

// Determines when button is clicked then runs function to determine language
button.addEventListener('click', function () {
  var textInput = document.getElementById('text-input').value;
  textInput += textInput.split('').join('');
  console.log('is this an array?', textInput);
  dictionary(textInput);
});

// Determines when clear button is clicked then runs clear function if true
reload.addEventListener('click', clear);
