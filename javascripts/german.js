'use strict';

var dictionary = (function(originalDictionary) {

  var german = {
    'merry': 'frohe',
    'christmas': 'weihnachten',
    'happy': 'glücklich',
    'and': 'und',
    'a': 'ein',
    'new': 'neu',
    'year': 'jahr',
    'holiday': 'urlaub',
    'greetings': 'grüße',
    'seasons': 'jahreszeiten',
    'santa': 'santa',
    'reindeer':'rentier'
  };

  originalDictionary.translateGerman = function(germanTrans) {
    return german[germanTrans];
  };

})(dictionary);
