const Test = require("../../tests/test");
// Patterned Wristband
// A wristband can have 4 patterns:
//9 Oct 2020
//https://edabit.com/challenge/HX5eEuKb7epMgsKsj
// horizontal: each item in a row is identical.
// vertical: each item in a column is identical.
// diagonal left: each item is identical to the one on it's upper left or bottom right.
// diagonal right: each item is identical to the one on it's upper right or bottom left.
// You are shown an incomplete section of a wristband.

// Write a function that returns true if the section can be correctly classified into one of the 4 types, and false otherwise.

// Examples
// isWristband([
//   ["A", "A"],
//   ["B", "B"],
//   ["C", "C"]
// ]) ➞ true
// // Part of horizontal wristband.

// isWristband([
//   ["A", "B"],
//   ["A", "B"],
//   ["A", "B"]
// ]) ➞ true
// // Part of vertical wristband.

// isWristband([
//   ["A", "B", "C"],
//   ["C", "A", "B"],
//   ["B", "C", "A"],
//   ["A", "B", "C"]
// ]) ➞ true
// // Part of diagonal left wristband.

// isWristband([
//   ["A", "B", "C"],
//   ["B", "C", "A"],
//   ["C", "A", "B"],
//   ["A", "B", "A"]
// ]) ➞ true
// // Part of diagonal right wristband.
// Notes
// N/A

function isWristband1(arr) {
  const isRow = arr.every((r) => new Set(r).size === 1);
  const isCol = new Set(arr.map((r) => r.join(""))).size === 1;
  const isDiagL = arr.slice(1).every((r, ri) => r.slice(1).every((c, ci) => c === arr[ri][ci]));
  const isDiagR = arr.slice(1).every((r, ri) => r.slice(0, -1).every((c, ci) => c === arr[ri][ci + 1]));
  return isRow || isCol || isDiagL || isDiagR;
}

// const isWristband = arr => {
//    const isRow = arr.every(ma => new Set(ma).size === 1)
//    const isCol= new Set(arr.map(ma => ma.join(""))).size === 1
//    const isDiagL = arr.slice(1).every(() => )
// }

const isDiagL1 = (arr) => arr.slice(1).every((ma, mai) => ma.slice(1).every((l, li) => l === arr[mai][li]));
const isDiagL = arr => arr.slice(1).every((r, ri) => r.slice(1).every((c, ci) => c === arr[ri][ci]));

console.log(
  isDiagL([
    ["A", "B", "C"],
    ["B", "A", "B"],
    ["D", "C", "A"],
    ["E", "D", "C"],
  ])
);
// Test.assertEquals(isWristband(
//   [['A', 'A'],
//   ['B', 'B'],
//   ['C', 'C']]), true)

//   Test.assertEquals(isWristband(
//   [['A', 'B'],
//   ['A', 'B'],
//   ['A', 'B']]), true)

//   Test.assertEquals(isWristband(
//   [['A', 'B', 'C'],
//   ['C', 'A', 'B'],
//   ['B', 'C', 'A'],
//   ['A', 'B', 'C']]), true)

//   Test.assertEquals(isWristband(
//   [['A', 'B', 'C'],
//   ['C', 'A', 'B'],
//   ['D', 'C', 'A'],
//   ['E', 'D', 'C']]), true)

//   Test.assertEquals(isWristband(
//   [['A', 'B', 'C'],
//   ['B', 'A', 'B'],
//   ['D', 'C', 'A'],
//   ['E', 'D', 'C']]), false)

//   Test.assertEquals(isWristband(
//   [['A', 'B', 'C'],
//   ['B', 'C', 'A'],
//   ['C', 'A', 'B'],
//   ['A', 'B', 'A']]), true)

//   Test.assertEquals(isWristband(
//   [['A', 'B', 'C'],
//   ['B', 'C', 'D'],
//   ['C', 'D', 'E'],
//   ['D', 'E', 'F']]), true)

//   Test.assertEquals(isWristband(
//   [['A', 'B', 'C'],
//   ['B', 'C', 'D'],
//   ['C', 'D', 'E'],
//   ['D', 'E', 'E']]), true)

//   Test.assertEquals(isWristband(
//   [['A', 'B', 'C'],
//   ['B', 'C', 'D'],
//   ['C', 'D', 'E'],
//   ['D', 'F', 'E']]), false)

//   Test.assertEquals(isWristband(
//   [['A', 'B', 'C'],
//   ['B', 'D', 'A'],
//   ['C', 'A', 'B'],
//   ['A', 'B', 'A']]), false)

//   Test.assertEquals(isWristband(
//   [['A', 'B'],
//   ['A', 'B'],
//   ['A', 'C'],
//   ['A', 'B']]), false)

//   Test.assertEquals(isWristband(
//   [['A', 'A'],
//   ['B', 'B'],
//   ['C', 'C'],
//   ['D', 'B']]), false)

//   Test.assertEquals(isWristband(
//   [['A', 'A'],
//   ['B', 'B'],
//   ['C', 'C'],
//   ['C', 'C']]), true)

//MY ANswer

// const isWristband = (arr) => {
//   //l is letter, li is letterIndex, ma is miniArray, mai is mini array index
//   const checkHor = (l, li, ma) => ma.every(l => l === ma[0]); //checks that every letter is tha same as the first
//   const checkVer = (l, i) => arr.every((d) => l === d[i]); //checks if every letter is the same as the index position in all miniArrays
//   const checkDiagL = (l, li, ma, mai) => mai < arr.length - 1 && li < ma.length - 1 ? l === arr[mai+1][li+1] : true //ensures they are not in the last array position, then compares with next array
//   const checkDiagR = (l, li, ma, mai) => mai > 0 && li < ma.length - 1 ? l === arr[mai-1][li+1] : true //ensures we're not checking the first position and compares with the array before
//   const checkAll = (arr, fn) => arr.every((ma, mai) => ma.every((l, li) => fn(l, li, ma, mai))) //Each function has to run its own series of checks, this checks every letter of the array and fires the desidred function on each check

//   return checkAll(arr, checkHor) || checkAll(arr, checkVer) || checkAll(arr, checkDiagL) || checkAll(arr, checkDiagR)
// };

//MB Bentleys answer

// function isWristband(arr) {
//   const isRow = arr.every(r => new Set(r).size === 1);
//   const isCol = new Set(arr.map(r => r.join(''))).size === 1;
//   const isDiagL = arr.slice(1).every((r,ri) => r.slice(1).every((c,ci) => c === arr[ri][ci]));
//   const isDiagR = arr.slice(1).every((r,ri) => r.slice(0,-1).every((c,ci) => c === arr[ri][ci+1]));
//   return isRow || isCol || isDiagL || isDiagR;
// }
