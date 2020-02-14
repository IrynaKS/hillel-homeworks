'use strict';

var sentence = 'hello MY name is JavaScript and I like your code styLe';
var letters = sentence.split('');

for (var i = 0; i < letters.length; i += 1) {
  if (letters[i] === letters[i].toUpperCase()) {
    letters[i] = letters[i].toLowerCase();
  } else if (letters[i] === letters[i].toLowerCase()) {
    letters[i] = letters[i].toUpperCase();
  }
}
var oppositeLetters = letters.join('');
console.log(oppositeLetters);