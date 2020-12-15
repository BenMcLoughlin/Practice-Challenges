const Test = require("../../tests/test");

//Sum the range of numbers using recursion


sum = n => !!n ? n + sum(n-1) : 0

Test.assertEquals(sum(3), 6);
Test.assertEquals(sum(4), 10);


//sum = n => n === 1 ? n : n + sum(n-1)


// sum = (n) => {
//   if (n === 1) return n;
//   return n + sum(n - 1);
// };
