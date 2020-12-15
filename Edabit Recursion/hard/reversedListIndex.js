const Test = require("../../tests/test");
/*
Recursion: Reversed List Index
Write a recursive function that filters the items in an array (given as parameter arr) by positional parity (odd or even), given as parameter par, starting from the opposite end. Return an array of items on odd positions (... 5, 3, 1) or on even positions (... 6, 4, 2) and counting from the last item in the array.

Examples
getItemsAt([2, 4, 6, 8, 10], "odd") ➞ [2, 6, 10]
// 2, 6 & 10 occupy the 5th, 3rd and 1st positions from right.
// Odd positions, hence the parity, and from the opposite.

getItemsAt(["E", "D", "A", "B", "I", "T"], "even") ➞ ["E", "A", "I"]
// E, A and I occupy the 6th, 4th and 2nd positions from right.
// Even positions, hence the parity, and from the opposite.

getItemsAt([")", "(", "*", "&", "^", "%", "$", "#", "@", "!"]) ➞ [")", "*", ^", "$", "@"]

getItemsAt(["A", "R", "B", "I", "T", "R", "A", "R", "I", "L", "Y"], "even") ➞ ["R", "I", "R", "R", "L"]
Notes

*/

// const getItemsAt2 = (arr, par) => {
//   return arr.filter((d, i) => (i + 1) % 2 !== 0);
// };

// const getItemsAt = (arr, par, index = 0, answer = []) => {
//      console.log('answer:', answer)
//      console.log('index:', index)
     
//   if (arr.length === index) return answer;
//   if (par === "even" && index % 2 === 0) answer.push(arr[index]);
//   if (par === "odd" && index % 2 !== 0) answer.push(arr[index]);

//   return getItemsAt(arr, par, index + 1, answer);
// };

const getItemsAt2 = (r, p) => (!r.length ? r : [[r[0], [], r[0]][(r.length % 2) + (p.length % 2)], getItemsAt(r.slice(1), p)].flat());


Test.assertSimilar(getItemsAt([2, 4, 6, 8, 10], "odd"), [2, 6, 10]);
Test.assertSimilar(getItemsAt(["A", "R", "B", "I", "T", "R", "A", "R", "I", "L", "Y"], "even"), ["R", "I", "R", "R", "L"]);
// Test.assertSimilar(getItemsAt(["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"], "even"), ["Q", "E", "T", "U", "O"]);

// const recursive = (f) => (`${f}`.match(RegExp(`${f.name}`, "gm")) || []).length > +/function/.test(f);
// Test.assertNotEquals(recursive(getItemsAt), false, "Recursion is required!");

let [expVector, actVector, anxVector] = [
  [
    ["E", "A", "I"],
    ["D", "B", "T"],
    ["Q", "E", "T", "U", "O"],
    ["O", "U", "T", "E", "Q"],
    ["S", "F", "H", "K", "Z"],
    ["A", "D", "G", "J", "L"],
    [4, 8],
    [2, 4, 6, 8, 10],
    ["@", "$", "^", "*", ")", "]"],
    ["[", "(", "&", "%", "#", "!"],
    ["O", "B", "T", "Y"],
    ["R", "I", "R", "R", "L"],
  ],
  [
    ["E", "D", "A", "B", "I", "T"],
    ["E", "D", "A", "B", "I", "T"],
    ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
    ["P", "O", "I", "U", "Y", "T", "R", "E", "W", "Q"],
    ["A", "S", "D", "F", "G", "H", "J", "K", "L", "Z"],
    ["A", "S", "D", "F", "G", "H", "J", "K", "L", "Z"],
    [2, 4, 6, 8, 10],
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "[", "]"],
    ["]", "[", ")", "(", "*", "&", "^", "%", "$", "#", "@", "!"],
    ["O", "R", "B", "I", "T", "L", "Y"],
    ["A", "R", "B", "I", "T", "R", "A", "R", "I", "L", "Y"],
  ],
  ["even", "odd", "even", "odd", "odd", "even", "even", "odd", "odd", "odd", "odd", "even"],
];
for (let i in expVector) Test.assertSimilar(getItemsAt(actVector[i], anxVector[i]), expVector[i]);
