console.log("this is the french one")

'use strict';

var dictionary = (function(originalDictionary) {

  var french = {
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

  originalDictionary.translateFrench = function(frenchTrans) {
    return french[frenchTrans];
    console.log('trying to frenchify:',);
  };

})(dictionary);
