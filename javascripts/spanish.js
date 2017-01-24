"use strict";

var dictionary = (function('variable in main.js'){
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
	'variable in main.js'.getEnglish = function(word){
		return spanish[word];
	};
	//using the English word to see what it's translation is 
	'variable in main.js'.setSpanish = function(newWord){
		console.log("word choice: ", newWord)
		spanish[newWord] = newWord.value;
		console.log("translated word: ", spanish)
	};

	return 'variable in main.js';


})('variable in main.js');