const Test = require("../tests/test");
/*
Image Manipulation: Invert (Part 1)
Images can be described as a 3D array.

// This image has only one white pixel:

[
  [[255, 255, 255]]
]
// This one is a 2 by 2 black image:

[
  [[0, 0, 0], [0, 0, 0]],
  [[0, 0, 0], [0, 0, 0]]
]
Your task is to create a function that takes a 3D array representation of an image and returns the inverse of that.

For example, white becomes black, black becomes white, etc.

Examples
invert([
  [[255, 255, 255], [255, 255, 255]],
  [[255, 255, 255], [255, 255, 255]]
]) ➞ [
  [[0, 0, 0], [0, 0, 0]],
  [[0, 0, 0], [0, 0, 0]]
]*/

// Test.assertSimilar(invert([
// 	[[255,255,255], [255,255,255]],
// 	[[255,255,255], [255,255,255]]
// ]), [
// 	[[0,0,0], [0,0,0]],
// 	[[0,0,0], [0,0,0]]
// ])

// Test.assertSimilar(invert([
// 	[[0,0,0], [0,0,0], [0,0,0]],
// 	[[0,0,0], [0,0,0], [0,0,0]],
// 	[[0,0,0], [0,0,0], [0,0,0]]
// ]), [
// 	[[255,255,255], [255,255,255], [255,255,255]],
// 	[[255,255,255], [255,255,255], [255,255,255]],
// 	[[255,255,255], [255,255,255], [255,255,255]]
// ])

// Test.assertSimilar(invert([
// 	[[0,0,255], [0,0,0], [0,0,157], [100,229,4]],
// 	[[100,0,3], [1,100,0], [0,10,0], [0,168,0]],
// 	[[16,30,0], [0,125,0], [15,0,9], [0,139,0]],
// 	[[200,2,0], [0,125,0], [0,0,9], [0,200,0]]
// ]), [
// 	[[255,255,0], [255,255,255], [255,255,98], [155,26,251]],
// 	[[155,255,252], [254,155,255], [255,245,255], [255,87,255]],
// 	[[239,225,255], [255,130,255], [240,255,246], [255,116,255]],
// 	[[55,253,255], [255,130,255], [255,255,246], [255,55,255]]
// ])

// Test.assertSimilar(invert([
// 	[[0,255,255], [256,255,255]],
// 	[[255,-1,255], [255,255,255]]
// ]), [
// 	[[255,0,0], [0,0,0]],
// 	[[0,255,0], [0,0,0]]
// ])

// //My Answer

// const invert = (A) => A.map((a) => a.map((b) => b.map((c) => Math.abs(255 - (c > 255 ? 255 : c < 0 ? 0 : c)))));

// //Second Place
// function invert(arr) {
//   return arr.map((arr1) => arr1.map((arr2) => arr2.map((c) => (c < 0 && 255) || Math.max(255 - c, 0))));
// }

//GREYSCALE
/* Image Manipulation: 255 Shades of Grey (Part 2)
Images can be described as 3D arrays.

// This image has only one white pixel:

[
  [[255, 255, 255]]
]
// This one is a 2 by 2 black image:

[
  [[0, 0, 0], [0, 0, 0]],
  [[0, 0, 0], [0, 0, 0]]
]
Your task is to create a function that takes a 3D array representation of an image and returns the grayscale version of that.

Examples
grayscale([
  [[0, 0, 0], [0, 0, 157]],
  [[1, 100, 0], [0, 10, 0]]
]) ➞ [
  [[0, 0, 0], [52, 52, 52]],
  [[34, 34, 34], [3, 3, 3]]
]
Notes
A valid RGB value ranges from 0 to 255 (inclusive).
If the given array contains out of bound values, convert them to the nearest valid one.
Previous challenge in this series: Image Manipulation: Invert (Part 1)
*/

// function grayscale(arr) {
//   const sum = (arr) => arr.reduce((a, n) => a + +n);
//   return arr.map((d) => {

//     let total = sum(d);
//         console.log(typeof total);
//     return d.map(() => total);
//   });
// }
const sum = (arr) => arr.reduce((a, n) => a + +n);

grayscale = (a) => a.map((b) => b.map(c.map((v) => c.reduce((d, e) => d + e, 0))));

grayscale = (a) => a.map((b) => b.map((c) => c.map(() => Math.round(c.reduce((d, e) => d + (e < 1 ? 0 : e > 255 ? 255 : e), 0) / 3))));

Test.assertSimilar(
  grayscale([
    [
      [0, -1, -120],
      [300, 0, 157],
    ],
    [
      [1, 100, 0],
      [256, 10, 0],
    ],
  ]),
  [
    [
      [0, 0, 0],
      [137, 137, 137],
    ],
    [
      [34, 34, 34],
      [88, 88, 88],
    ],
  ]
);

console.log(sum([0, 0, 157]));

// Test.assertSimilar(
//   grayscale([
//     [
//       [0, 0, 0],
//       [0, 0, 157],
//     ],
//     [
//       [1, 100, 0],
//       [0, 10, 0],
//     ],
//   ]),
//   [
//     [
//       [0, 0, 0],
//       [52, 52, 52],
//     ],
//     [
//       [34, 34, 34],
//       [3, 3, 3],
//     ],
//   ]
// );

// Test.assertSimilar(
//   grayscale([
//     [
//       [0, 0, 0],
//       [0, 0, 157],
//       [100, 229, 4],
//     ],
//     [
//       [1, 100, 0],
//       [0, 10, 0],
//       [0, 168, 0],
//     ],
//     [
//       [0, 125, 0],
//       [15, 0, 9],
//       [0, 139, 0],
//     ],
//     [
//       [0, 125, 0],
//       [0, 0, 9],
//       [0, 200, 0],
//     ],
//   ]),
//   [
//     [
//       [0, 0, 0],
//       [52, 52, 52],
//       [111, 111, 111],
//     ],
//     [
//       [34, 34, 34],
//       [3, 3, 3],
//       [56, 56, 56],
//     ],
//     [
//       [42, 42, 42],
//       [8, 8, 8],
//       [46, 46, 46],
//     ],
//     [
//       [42, 42, 42],
//       [3, 3, 3],
//       [67, 67, 67],
//     ],
//   ]
// );

// Test.assertSimilar(
//   grayscale([
//     [
//       [0, 0, 255],
//       [0, 0, 0],
//       [0, 0, 157],
//       [100, 229, 4],
//     ],
//     [
//       [100, 0, 3],
//       [1, 100, 0],
//       [0, 10, 0],
//       [0, 168, 0],
//     ],
//     [
//       [16, 30, 0],
//       [0, 125, 0],
//       [15, 0, 9],
//       [0, 139, 0],
//     ],
//     [
//       [200, 2, 0],
//       [0, 125, 0],
//       [0, 0, 9],
//       [0, 200, 0],
//     ],
//   ]),
//   [
//     [
//       [85, 85, 85],
//       [0, 0, 0],
//       [52, 52, 52],
//       [111, 111, 111],
//     ],
//     [
//       [34, 34, 34],
//       [34, 34, 34],
//       [3, 3, 3],
//       [56, 56, 56],
//     ],
//     [
//       [15, 15, 15],
//       [42, 42, 42],
//       [8, 8, 8],
//       [46, 46, 46],
//     ],
//     [
//       [67, 67, 67],
//       [42, 42, 42],
//       [3, 3, 3],
//       [67, 67, 67],
//     ],
//   ]
// );
