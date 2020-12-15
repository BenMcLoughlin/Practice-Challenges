const Test = require("../../tests/test");
/*
Recursion: Array Sum
22 Oct 2020
Write a function that finds the sum of an array. Make your function recursive.

Examples
sum([1, 2, 3, 4]) ➞ 10

sum([1, 2]) ➞ 3

sum([1]) ➞ 1

sum([]) ➞ 0
Notes
Return 0 for an empty array.
Check the Resources tab for info on recursion
*/
//sum = (arr) => (!arr.length === 0 ? 0 : arr[0] + sum(arr.slice(1)));

// function sum(array) {
//   console.log(!array.length)
//   if (array.length === 0) {
//     return 0;
//   } else {
//     return array[0] + sum(array.slice(1));
//   }
// }


const sum = (arr) =>  !arr.length ? 0 : arr[0] + sum(arr.flat().slice(1))


Test.assertEquals(sum([1, 2, 3, 4]), 10);
Test.assertEquals(sum([-1, -1, -1]), -3);
Test.assertEquals(sum([1]), 1);
Test.assertEquals(sum([]), 0);

// var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// var citrus = fruits.slice(1, fruits.length1);

// console.log(citrus);
