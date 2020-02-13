'use strict';

var differentElements = [83, 'apple', true, null, undefined, [], {}, function(){}];
for (var i = 0; i < differentElements.length; i += 1) {
  var elementType =
    differentElements[i] !== null ? typeof differentElements[i] : 'null';
  console.log(differentElements[i], elementType);
}