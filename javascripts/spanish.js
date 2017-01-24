"use strict";

var dictionary = (function(textInput){
	//the available words that can be translated
	var spanish = {
		"merry": "alegre",
		"christmas": "Navidad",
		"and": "y",
		"happy": "contendo",
		"new": "nuevo",
		"year": "año"
	};

	console.log(spanish);

	//grabbing the english 'key' from the above object
	textInput.getEnglish = function(word){
		return spanish[word];
	};
	//using the English word to see what it's translation is 
	textInput.setSpanish = function(newWord){
		console.log("word choice: ", newWord)
		spanish[newWord] = newWord.value;
		console.log("translated word: ", spanish)
	};

	return textInput;
	//when the IIFE fires, the below parameter 'dictionary' will be passed into the function on line 3, 
	//and will take the place of every instance of the variable 'textInput'
})(dictionary);

console.log(dictionary);