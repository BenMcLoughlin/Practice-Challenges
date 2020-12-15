const Test = require("../../tests/test");
/*
Recursion: Right Shift by Division
The right shift operation is similar to floor division by powers of two, thus, the process is repetitive and can be done recursively.

Sample calculation using the right shift operator ( >> ):

80 >> 3 = floor(80/2^3) = floor(80/8) = 10
-24 >> 2 = floor(-24/2^2) = floor(-24/4) = -6
-5 >> 1 = floor(-5/2^1) = floor(-5/2) = -3
Write a function that mimics (without the use of >>) the right shift operator and returns the result from the two given integers.

Examples
shiftToRight(80, 3) ➞ 10

shiftToRight(-24, 2) ➞ -6

shiftToRight(-5, 1) ➞ -3

shiftToRight(4666, 6) ➞ 72

shiftToRight(3777, 6) ➞ 59

shiftToRight(-512, 10) ➞ -1
Notes
There will be no negative values for the second parameter y.
This challenge is more like recreating of the right shift operation, thus, the use of the operator directly is prohibited.
You are expected to solve this challenge via recursion.
A non-recursive version of this challenge can be found in here.
If you think recursion if fun, here is a collection of such challenges.
*/

const shiftToRight = (x, y) => (y ? shiftToRight(x / 2, y - 1) : Math.floor(x));

const shiftToRight = (x, y) => (y ? shiftToRight(Math.floor(x / 2), y - 1) : x);

Test.assertEquals(shiftToRight(80, 3), 10);

// const recurCheck = (f) => (`${f}`.match(RegExp(`${f.name}`, "gm")) || []).length > +/function/.test(f);
// const opCheck = (f) => !`${f}`.match(RegExp(">>", "gm"));

// Test.assertNotEquals(recurCheck(shiftToRight), false, "Recursion is required!");
// Test.assertNotEquals(opCheck(shiftToRight), false, "The use of right shift operator (>>) is prohibited!");

// let [numVector, resVector] = [
//   [
//     [80, 3],
//     [-24, 2],
//     [-5, 1],
//     [38, 0],
//     [192, 4],
//     [4666, 6],
//     [3777, 6],
//     [1024, 5],
//     [-512, 10],
//   ],
//   [10, -6, -3, 38, 12, 72, 59, 32, -1],
// ];
// for (let i in numVector) Test.assertEquals(shiftToRight(...numVector[i]), resVector[i]);
