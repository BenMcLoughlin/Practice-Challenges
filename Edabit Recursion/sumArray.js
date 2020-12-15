const Test = require("../tests/test");
/*
Recursion: Array Summation
Create a function that sums up all the elements in the array recursively. The use of the array's built-in reduce() function is not allowed, thus, the approach is recursive.

Examples
recurAdd([1, 2, 3, 4, 10, 11]) ➞ 31

recurAdd([-3, 4, 11, 10, 21, 32, -9]) ➞ 66

recurAdd([-21, -7, 19, 3, 4, -8]) ➞ -10
Notes
You're expected to solve this challenge using a recursive approach.
You can read on more topics about recursion (see Resources tab) if you aren't familiar with it yet or haven't fully understood the concept behind it before taking up this challenge.
If you think recursion is fun, you can find a collection of those challenges here.

*/

function recurAdd(arr) {
  if(arr.length === 0) {
    return 0
  }

  return arr[0] + recurAdd(arr.slice(1));
}
const sum2 = (arr) => {
  if(arr.length === 0) {
    return 0
  }
  console.log(arr)
  return arr[0] + sum(arr.slice(1))
}

const sum = (arr) => {
  if (arr.length === 0) return 0
  return arr[0] + sum(arr.slice(1))
}



let [numVector, resVector] = [
  [[1, 2, 3, 4, 10, 11], [-3, 4, 11, 10, 21, 32, -9], [3, 7, -3, -7, 4, 6, -4, -6], [-21, -7, 19, 3, 4, -8], [], [16]],
  [31, 66, 0, -10, 0, 16],
];

for (let i in numVector) Test.assertEquals(sum(numVector[i]), resVector[i]);
