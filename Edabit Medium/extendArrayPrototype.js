const Test = require("../tests/test");
/*
Extending the Array Prototype
Write the following functions to extend the array prototype, by adding the methods:

square()
cube()
divisible_by(x)
strictly_above(x)
strictly_below(x)
Examples
[1, 2, 3].square ➞ [1, 4, 9]

[1, 2, 3].cube ➞ [1, 8, 27]

[1, 2, 3, 4].divisible_by(2) ➞ [2, 4]

[1, 2, 3, 4].strictly_above(1) ➞ [2, 3, 4]

[1, 2, 3, 4].strictly_below(2) ➞ [1]
Notes
N/A
*/


/* Fill in 5 array prototype methods below:
	1. square()
	2. cube()
	3. divisible_by()
	4. strictly_above()
	5. strictly_below()
*/

Array.prototype.square = function(member) {
 return this.map(d => d * d)
}

Array.prototype.cube = function (member) {
  return this.map((d) => d * d * d);
};

Array.prototype.divisible_by = function (value) {
  return this.filter((d) => d % value === 0);
};

Array.prototype.strictly_above = function (value) {
  return this.filter((d) => d > value);
};

Array.prototype.strictly_below = function (value) {
  return this.filter((d) => d < value);
};

Test.assertSimilar([1, 2, 3].square(), [1, 4, 9]);
Test.assertSimilar([1, 2, 3].cube(), [1, 8, 27]);
Test.assertSimilar([1, 2, 3, 4].divisible_by(2), [2, 4]);
Test.assertSimilar([1, 2, 3, 4].strictly_above(1), [2, 3, 4]);
Test.assertSimilar([1, 2, 3, 4].strictly_below(2), [1]);

Test.assertSimilar([-2, -1, 0, 1].square(), [4, 1, 0, 1]);
Test.assertSimilar([-2, -1, 0, 1].cube(), [-8, -1, 0, 1]);
Test.assertSimilar([-2, -1, 0, 1].divisible_by(4), [0]);
Test.assertSimilar([-2, -1, 0, 1].strictly_above(-1), [0, 1]);
Test.assertSimilar([-2, -1, 0, 1].strictly_below(1), [-2, -1, 0]);