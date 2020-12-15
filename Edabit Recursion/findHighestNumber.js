const Test = require("../tests/test");
/*
Find the Highest Integer in the Array Using Recursion
Create a function that finds the highest integer in the array using recursion.

Examples
findHighest([-1, 3, 5, 6, 99, 12, 2]) ➞ 99

findHighest([0, 12, 4, 87]) ➞ 87

findHighest([6,7,8]) ➞ 8
Notes

*/

const findHighest2 = (list) => {
  if (list.length == 1) return list[0];
  if (list[0] > list[1]) list[1] = list[0];
  list = list.splice(1);
  return findHighest(list);
};

const findHighest3 = (arr) => {
  if (arr.length == 1) return arr[0];
  if (arr[0 > arr[1]]) arr[1] = arr[0];
  return findHighest(arr.splice(1));
};

function findHighest4(a, m = 0) {
  x = a.pop();
  m = m > x ? m : x;
  return a.length ? findHighest(a, m) : m;
}

function findHighes4(arr) {
  return arr.length == 1 ? arr[0] : arr[0] > findHighest(arr.slice(1)) ? arr[0] : findHighest(arr.slice(1));
}

const findHighest = (a) => (a.length == 1 ? a[0] : a[0] > findHighest(a.slice(1)) ? a[0] : findHighest(a.slice(1)));

// console.log(arr.push(9))
// console.log(arr.slice(2,arr.length))


Test.assertEquals(findHighest([6, 7, 8]), 8);
// Test.assertEquals(findHighest([-1, 3, 5, 6, 99, 12, 2]), 99);
// Test.assertEquals(findHighest([0, 12, 4, 87]), 87);
