const Test = require("../../tests/test");
// Recursion: Length of a String
//14 Oct 2020

// Write a function that returns the length of a string. Make your function recursive.

// Examples
// length("apple") ➞ 5

// length("make") ➞ 4

// length("a") ➞ 1

// length("") ➞ 0
// Notes
// Check the Resources tab for info on recursion.

const length = str => str == '' ? 0 : length(str.substring(1)) + 1;


Test.assertEquals(length('shipment'), 8)
Test.assertEquals(length('apple'), 5)
Test.assertEquals(length('make'), 4)
Test.assertEquals(length('a'), 1)
Test.assertEquals(length(''), 0)


//Best Answer

//const length = ({ length }) => length;