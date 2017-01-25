	"use strict";

var dictionary = (function(originalDictionary){
	//the available words that can be translated
	var spanish = {
		"merry": "alegre",
		"christmas": "Navidad",
		"and": "y",
		"happy": "contendo",
		"new": "nuevo",
		"year": "año"
	};

	

	return {
		originalDictionary.translateToSpanish = function(espana) {
			return spanish[espana];
		}
	};
	//when the IIFE fires, the below parameter 'dictionary' will be passed into the function on line 3, 
	//and will take the place of every instance of the variable 'textInput'
})(dictionary);

console.log(dictionary);