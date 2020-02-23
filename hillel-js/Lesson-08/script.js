'use strict';

function arrCompare(array1, array2) {
  let result = [];

  array1.forEach(item1 =>
    array2.forEach(item2 => {
      let isTheSame = item1 === item2;
      let isDividedIntoFive =
        isTheSame && typeof item1 === 'number' && item1 % 5 === 0;
      let isMoreThenFiveLetters =
        isTheSame && typeof item1 === 'string' && item1.length > 5;

      if (isMoreThenFiveLetters) {
        result.push('FSTR');
      } else if (isDividedIntoFive) {
        result.push('FIVE');
      } else if (isTheSame) {
        result.push(item1);
      }
    })
  );
  return result;
}

console.log(
  arrCompare(
    [5, 'apple', false, 'banana', null, 35, 100, 'grapes'],
    [11, 5, 'orange', true, null, 'banana', 100, 44, 'apple']
  )
);
console.log(
  arrCompare(
    [5, 10, 16, 'Mango', 'Papaya', 200, 'String', 'Num'],
    [5, 15, 'Mango', 'Papaya', 200, 'String', 'Num']
  )
);