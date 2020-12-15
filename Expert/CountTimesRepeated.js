const Test = require("../tests/test");
/*
Count How Many Times an Element is Repeated
2 Nov 2020
Given an array, create a function that returns an object detailing how many 
times each element was repeated. Sort the object by value in descending order.

Examples
countRepetitions(["cat", "dog", "cat", "cow", "cow", "cow"]) ➞ { cow: 3, cat: 2, dog: 1 }

countRepetitions([1, 5, 5, 5, 12, 12, 0, 0, 0, 0, 0, 0]) ➞ { 0: 6, 5: 3, 12: 2, 1: 1 }

countRepetitions(["Infinity", "null", "Infinity", "null", "null"]) ➞ { null: 3, Infinity: 2}
Notes
The array elements can be anything.
*/

//const count = (o) => Object.values(o).reduce((a, b) => ((a[b] = 1 + (a[b] || 0)), a), {});


const tests = [
  [["cat", "dog", "cat", "cow", "cow", "cow"], { cow: 3, cat: 2, dog: 1 }],
  [[1, 5, 5, 5, 12, 12, 0, 0, 0, 0, 0, 0], { 0: 6, 5: 3, 12: 2, 1: 1 }],
  [[Infinity, null, Infinity, "😀", null, null], { null: 3, Infinity: 2, "😀": 1 }],
];

tests.forEach(([a, e]) => Test.assertSimilar(countRepetitions(a), e));

//My answer with help from Burglary series

const countRepetitions = (arr) =>
  Object.fromEntries(Object.entries(arr.reduce((a, n) => ((a[n] = 1 + (a[n] || 0)), a), {})).sort((a, b) => b[1] - a[1]));

  //Top score

  countRepetitions = (arr) => {
    var obj = {};
    for (let e of arr) obj[e] = (obj[e] || 0) + 1;
    return Object.fromEntries(Object.entries(obj).sort(([, a], [, b]) => b - a));
  };