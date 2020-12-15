const Test = require("../../tests/test");
/*
Recursion: Inclusive Array Ranges
Write a function that, given the start startNum and end endNum values, return an array
 containing all the numbers inclusive to that range. See examples below.

Examples
inclusiveArray(1, 5) ➞ [1, 2, 3, 4, 5]

inclusiveArray(2, 8) ➞ [2, 3, 4, 5, 6, 7, 8]

inclusiveArray(10, 20) ➞ [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

inclusiveArray(17, 5) ➞ [17]
Notes
The numbers in the array are sorted in ascending order.
If startNum is greater than endNum, return an array with the higher value. See example #4.
*/

function inclusiveArray(startNum, endNum, arr = []) {
  if (startNum >= endNum) return arr.concat(startNum);
  return inclusiveArray(startNum + 1, endNum, arr.concat(startNum));
}

function* myRecursiveFunc(num) {

  yield *myRecursiveFunc(num - 1);
}

let iterator = myRecursiveFunc(1000);
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())


function* infiniteMaker() {
  let i = 0
  while(true) {
    yield i;
    i++
  }
}

let iterator2 = infiniteMaker();
console.log(iterator2)
console.log(iterator2.next())
console.log(iterator2.next())
console.log(iterator2.next())


//cvf
function inclusiveArray1(startNum, endNum) {
  return startNum >= endNum ? [startNum] : [startNum, ...inclusiveArray(startNum + 1, endNum)];
}

//undefined9999
function inclusiveArray(s, e) {
  return s >= e ? [s] : [s, ...inclusiveArray(s + 1, e)];
}

let [actual, expected] = [
  [
    [1, 5],
    [2, 8],
    [10, 20],
    [17, 5],
    [40, 50],
    [1, 41],
    [24, 17],
    [11, 66],
    [9, 3],
    [6, 16],
  ],
  [
    [1, 2, 3, 4, 5],
    [2, 3, 4, 5, 6, 7, 8],
    [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
    [17],
    [40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50],
    [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23,
      24,
      25,
      26,
      27,
      28,
      29,
      30,
      31,
      32,
      33,
      34,
      35,
      36,
      37,
      38,
      39,
      40,
      41,
    ],
    [24],
    [
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23,
      24,
      25,
      26,
      27,
      28,
      29,
      30,
      31,
      32,
      33,
      34,
      35,
      36,
      37,
      38,
      39,
      40,
      41,
      42,
      43,
      44,
      45,
      46,
      47,
      48,
      49,
      50,
      51,
      52,
      53,
      54,
      55,
      56,
      57,
      58,
      59,
      60,
      61,
      62,
      63,
      64,
      65,
      66,
    ],
    [9],
    [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
  ],
];
//for (let i in actual) Test.assertSimilar(inclusiveArray(...actual[i]), expected[i]);
