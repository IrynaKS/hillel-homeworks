'use strict';

var elements = [83, 'apple', true, null, undefined, [], {}, function(){}];
for (var i = 0; i < elements.length; i += 1) {
  var elementType =
    elements[i] !== null ? typeof elements[i] : 'null';
  console.log(elements[i], elementType);
}