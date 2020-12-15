const Test = require("../tests/test");
// Burglary Series (16): Nested objects
// And who cursed the most in the fight between you and your spouse?
//26 Oct 2020
// Given an object with three rounds, with nested objects as your scores per round, return a string of who cursed the most:

// If you, return "ME!"
// If your spouse, return "SPOUSE!"
// If a draw, return "DRAW!"
// Examples
// determineWhoCursedTheMost({
//   round1: {
//     me: 10,
//     spouse: 5,
//   },
//   round2: {
//     me: 5,
//     spouse: 10,
//   },
//   round3: {
//     me: 10,
//     spouse: 10,
//   },
// }) ➞ "DRAW!"

determineWhoCursedTheMost = (o) =>
  ["SPOUSE!", "DRAW!", "ME!"][Math.sign(Object.values(o).reduce((a, b) => a + (b["me"] - b["spouse"]), 0)) + 1];
// determineWhoCursedTheMost = obj => {
// return JSON.stringify(Object.keys(obj)[0]);
// //return JSON.stringify(Object.values(obj).sort(), null, 2);

// }

//console.log(Math.max([110, "b"]))

const random = Test.randomNumber();
const obj = {
  round1: {
    me: 10,
    spouse: 5,
  },
  round2: {
    me: 5,
    spouse: 10,
  },
  round3: {
    me: 10,
    spouse: 10,
  },
};
const obj2 = {
  round1: {
    me: 10,
    spouse: 5,
  },
  round2: {
    me: random * 100,
    spouse: 4,
  },
};
const obj3 = {
  round1: {
    me: 10,
    spouse: random * 100,
  },
  round2: {
    me: 9,
    spouse: 24,
  },
};

Test.assertEquals(determineWhoCursedTheMost(obj), "DRAW!");
Test.assertEquals(determineWhoCursedTheMost(obj2), "ME!");
Test.assertEquals(determineWhoCursedTheMost(obj3), "SPOUSE!");

//My First

// determineWhoCursedTheMost = (o) => {
//   let s = Object.values(o).reduce((a, n) => a + (n.me - n.spouse), 0);
//   return s > 0 ? "ME!" : s < 0 ? "SPOUSE!" : "DRAW!";
// };
