"use strict";

var Dictionary = (function(originalDictionary){
	//the available words that can be translated
	var french = {
		"merry": "joyeu",
		"christmas": "Noel",
		"and": "et",
		"happy": "bonne",
		"new": "nouveau",
		"year": "annee"
	};

	
console.log(french);
		originalDictionary.translateToFrench = function(frenchy){
			return french[frenchy];

		}
		return originalDictionary;
	//when the IIFE fires, the below parameter 'dictionary' will be passed into the function on line 3, 
	//and will take the place of every instance of the variable 'textInput'
})(Dictionary);

console.log(Dictionary);