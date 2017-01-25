'use strict';

var Dictionary = (function() {

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

  return {
    translateToGerman: function(translateWord) {
      return german[translateWord];
    }
  };


})();
