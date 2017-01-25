"use strict";

var Dictionary = (function(originalDictionary){
	//the available words that can be translated
	var spanish = {
		"merry": "alegre",
		"christmas": "Navidad",
		"and": "y",
		"happy": "contendo",
		"new": "nuevo",
		"year": "año"
	};



		originalDictionary.translateToSpanish = function(espana) {
			return spanish[espana];
    };

  return originalDictionary;
	//when the IIFE fires, the below parameter 'dictionary' will be passed into the function on line 3,
	//and will take the place of every instance of the variable 'textInput'
})(Dictionary);
	
console.log(spanish);
		originalDictionary.translateToSpanish = function(espana){
			return spanish[espana];

		}
		return originalDictionary;
	//when the IIFE fires, the below parameter 'dictionary' will be passed into the function on line 3, 
	//and will take the place of every instance of the variable 'textInput'
})(Dictionary);

console.log(Dictionary);

