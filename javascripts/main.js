'use strict';

// Sets results variable and prints to DOM
var results = document.getElementById('translation');

// Get a reference to the button elements in the DOM
var button = document.getElementById('translate-button');
var reload = document.getElementById('clear-button');





// Determines which language should
// be translated to based on which radio button is selected.
function dictionary(textInput) {
  if (document.getElementById('french-input').checked === true) {
    translateFrench(textInput);
  }
  if (document.getElementById('spanish-input').checked === true) {
    translateSpanish(textInput);
  }
  if (document.getElementById('german-input').checked === true) {
    translateGerman(textInput);
  }
}

// Reloads the page if reset button is pressed
function clear() {
  window.location.reload();
}

// Determines when button is clicked then runs function to determine language
button.addEventListener('click', function () {
  var textInput = document.getElementById('text-input').value;
  dictionary(textInput);
});

// Determines when clear button is clicked then runs clear function if true
reload.addEventListener('click', clear);

// When enter is pressed calls back to button
// document.getElementById('temp').onkeypress = function (e) {
//   if (e.keyCode == 13) {
//     e.preventDefault();
//     var pressedEnter = document.getElementById('translate-button').click();
//   }
// };
