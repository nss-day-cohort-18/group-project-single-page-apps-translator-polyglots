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


})(dictionary);

console.log(dictionary);