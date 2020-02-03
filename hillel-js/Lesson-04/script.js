'use strict';

var userSentences = [];
userSentences.push(prompt('Write smth!'));
userSentences.push(prompt('...and one more...'));
userSentences.push(prompt('...and the last one!'));
var existSentences = ['have fun', 'be cool', 'stay calm'];
var allSentences = userSentences.concat(existSentences);
var resultSentences = allSentences.join('');
console.log(resultSentences.length);
