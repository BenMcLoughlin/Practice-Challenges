const Test = require("../tests/test");
/*
Instructions
The recursive function for this challenge should return the factorial of an inputted integer. If anyone needs a refresher, factorials in mathematics are represented by an exclamation point placed to the right of a number: 4! = 4 x 3 x 2 x 1 = 24

Examples
factorial(5) ➞ 120

factorial(3) ➞ 6

factorial(2) ➞ 2
*/




function factorial(num) {
  if (num === 1) return 1;
  return num * factorial(num - 1);
}

const factorial = (n) => n === 1 ? n : n * factorial(n-1)

Test.assertEquals(factorial(7), 5040);
Test.assertEquals(factorial(1), 1);
Test.assertEquals(factorial(9), 362880);
Test.assertEquals(factorial(2), 2);