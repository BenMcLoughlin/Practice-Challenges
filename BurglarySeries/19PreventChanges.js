const Test = require("../tests/test");
// Burglary Series (19): Prevent Changes
//30 Oct 2020
// The police sends you an electronic statement for you to sign. As you begin to sign,
//  an error pops up. Apparently, they sent you a protected document.

// This challenge is a bit different as the function you are given already contains some 
// code that you should not change or remove. Also, don't do a return statement, it is already included. Your task is, given an object, prevent changes to that object.

// Examples
// const obj = { noChanges: true }

// preventChanges(obj) {
//   // Write your code here, don't use a return statement

//   obj.noChanges = false;
//   obj.signature = "whatever"
//   return obj;

// }  ➞ { noChanges: true }

function preventChanges(obj) {
  // write your code here
  // don't use a return statement
Object.freeze(obj);
  // DON'T CHANGE OR REMOVE THE LINES BELOW
  obj.noChanges = false;
  obj.signature = "whatever";
  return obj;
}


Test.assertSimilar(preventChanges({ noChanges: true }), { noChanges: true });