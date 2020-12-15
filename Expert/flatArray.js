const Test = require("../tests/test");
/*Flat Array Depth Nesting
Create a function that can nest a flat array to represent an incremental depth level sequence.

Examples
incrementalDepth([1, 2]) ➞ [1, [2]]

incrementalDepth([1, 2, 3, 4, 5]) ➞ [1, [2, [3, [4, [5]]]]]

incrementalDepth([1, 3, 2, 6]) ➞ [1, [3, [2, [6]]]]

incrementalDepth(["dog", "cat", "cow"]) ➞ ["dog", ["cat", ["cow"]]]
Notes
The elements do not matter to the function, you should increment by index.
Expect the array length to be from 2-20.
*/

const incrementalDepth = (arr) => arr.reduce((a, n, i) => (i === 0 ? [...a, n] : i === 1 ? [...a, [n]] : [...a[1][a[1].length-1], [n]]), []);
const incrementalDepth2 = (arr) => arr.map((d,i,a) => i === 0 ? d : i === 1 ? [d] : console.log(a))

Test.assertSimilar(incrementalDepth([1, 2]), [1, [2]]);
 Test.assertSimilar(incrementalDepth(["dog", "cat", "cow"]), ["dog", ["cat", ["cow"]]]);
// Test.assertSimilar(incrementalDepth([1, 3, 2, 6]), [1, [3, [2, [6]]]]);
// Test.assertSimilar(incrementalDepth([undefined, null, null, null, null]), [undefined, [null, [null, [null, [null]]]]]);
// Test.assertSimilar(incrementalDepth(" ".repeat(20).split("")), [
//   " ",
//   [" ", [" ", [" ", [" ", [" ", [" ", [" ", [" ", [" ", [" ", [" ", [" ", [" ", [" ", [" ", [" ", [" ", [" ", [" "]]]]]]]]]]]]]]]]]]],
// ]);