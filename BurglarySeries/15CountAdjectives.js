const Test = require("../tests/test");
/*
Burglary Series (15): Number of Occurrences
To further increase the statistical knowledge of your fight, count the number of times a certain adjective was used.
27 Oct 2020
Given an object that contains several adjectives as values, return a new object where you count the ocurrences of each adjective.

Examples
count({
  a: "moron",
  b: "scumbag",
  c: "moron",
  d: "idiot",
  e: "idiot"
}) ➞ { moron: 2, scumbag: 1, idiot: 2 }


count({
  a: "moron",
  b: "moron",
  c:"moron"
}) ➞ { moron: 3 }


count({
  a: "idiot",
  b: "scumbag"
}) ➞ { idiot: 1, scumbag: 1 }
*/

const count = (o) => Object.values(o).reduce((a, b) => ((a[b] = 1 + (a[b] || 0)), a), {});
const count = (o) => Object.values(o).reduce((a, b) => ((a[b] = 1 + (a[b] || 0)), a), {});

const count = (o) => Object.values(0).reduce((a, b) => ((a[b] = 1 + (a[b] || 0)), a), {});

const obj = { a: "moron", b: "scumbag", c: "moron", d: "idiot", e: "idiot" };
const obj2 = { a: "pig", b: "pig", c: "pig" };
const obj3 = { a: "sleazball", b: "pervert", c: "pervert", d: "pervert" };

Test.assertSimilar(count(obj), { moron: 2, scumbag: 1, idiot: 2 });
Test.assertSimilar(count(obj2), { pig: 3 });
Test.assertSimilar(count(obj3), { sleazball: 1, pervert: 3 });
Test.assertEquals(count(obj3).pervert, 3);

//My First Version

// count = (obj) => {
//   let myObj = {};
//   const array = Object.values(obj);
//   const set = new Set(array);
//   set.forEach((d) => {
//     length = array.filter((l) => l === d).length;
//     myObj = { ...myObj, [d]: length };
//   });
//   return JSON.stringify(myObj, null, 4);
// };

//MB Bentley
//const count = (obj) => Object.values(obj).reduce((a, v) => ((a[v] = (a[v] || 0) + 1), a), {});
