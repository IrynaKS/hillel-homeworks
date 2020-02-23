'use strict';

var sentence = '1 boy caught 2 frogs and 3 crickets';
var newSentence = sentence;
for (var i = 0; i < sentence.length; i += 1) {
  if (sentence.charAt(i) === '1') {
    newSentence = newSentence.replace('1', 'one');
  } else if (sentence.charAt(i) === '2') {
    newSentence = newSentence.replace('2', 'two');
  } else if (sentence.charAt(i) === '3') {
    newSentence = newSentence.replace('3', 'three');
  }
}

console.log(newSentence);
