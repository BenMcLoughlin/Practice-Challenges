const Test = require("../tests/test");
/*
Burglary Series (18): Detailed List
The police call. They need a more detailed list of the stolen goods.

You are given an array with nested arrays that represent each room in your mansion where the goods were stolen.
 Each room will have two sub-arrays, one for the stolen items and the other for its values. They always match,
  the stolen item at index 0 is worth the value at index 0 of the values array, the stolen item at 
  index 1 is worth the value at index 1, and so forth. Look at the example for a clearer picture.

Return an object that represents where the goods were stolen from and which goods were stolen 
from each room and their value.

Examples
makeDetailedList([["kitchen", ["piano", "tv"], [1000, 50]]])
➞ { kitchen: { piano: 1000, tv: 50 } }


makeDetailedList([
  ["basement", ["baseball bat"], [500] ],
  ["garage", ["horses", "cadillac", "flowers"], [110, 2000, 30]]
]) ➞ {
  basement: {
    "baseball bat": 500
  },
  garage: {
    horses : 110,
    cadillac: 2000,
    flowers: 30
  }
}
*/

const makeDetailedList8 = (arr) => Object.fromEntries(arr.map((x) => [x[0], Object.fromEntries(x[1].map((k, i) => [k, x[2][i]]))]));
const makeDetailedList = (arr) => Object.fromEntries(arr.map((x) => [x[0], Object.fromEntries(x[1].map((k, i) => [k, x[2][i]]))]));

console.log(
  JSON.stringify(
    makeDetailedList([
      ["basement", ["baseball bat"], [12]],
      ["garage", ["horses", "cadillac", "flowers"], [110, 2000, 30]],
    ])
  )
);

// const random = Test.randomNumber();
// const ar = [["kitchen", ["piano", "tv"], [random, 50]]];
// const arr2 = [
//   ["basement", ["baseball bat"], [random]],
//   ["garage", ["horses", "cadillac", "flowers"], [110, 2000, 30]],
// ];

// Test.assertSimilar(makeDetailedList(ar), { kitchen: { piano: random, tv: 50 } });
// Test.assertSimilar(makeDetailedList(arr2), {
//   basement: {
//     "baseball bat": random,
//   },
//   garage: {
//     horses: 110,
//     cadillac: 2000,
//     flowers: 30,
//   },
// });

//My Answer

//const makeDetailedList = (a) => a.reduce((v, n) => ({ ...v, [n[0]]: n[1].reduce((k, d, i) => ({ ...k, [d]: n[2][i] }), {}) }), {});

//CVF's answer

function makeDetailedList1(arr) {
  return Object.fromEntries(arr.map((x) => [x[0], Object.fromEntries(x[1].map((k, i) => [k, x[2][i]]))]));
}
