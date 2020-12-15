const Test = require("../../tests/test");
/*
Find the Highest Integer in the Array Using Recursion
Create a function that finds the highest integer in the array using recursion.

Examples
findHighest([-1, 3, 5, 6, 99, 12, 2]) ➞ 99

findHighest([0, 12, 4, 87]) ➞ 87

findHighest([6,7,8]) ➞ 8
Notes
Please use the recursion to solve this (not the max() method).
*/
const findHighest = (arr, m=0) => {
  const x = arr.pop()
  let v = x > m ? x : m
  return arr.length == 1 ? m : findHighest(arr, v)
};



Test.assertEquals(findHighest([6, 7, 8]), 8);
Test.assertEquals(findHighest([-1, 3, 5, 6, 99, 12, 2]), 99);
Test.assertEquals(findHighest([0, 12, 4, 87]), 87);