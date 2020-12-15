const Test = require("../../tests/test");
/*
Find the Largest Even Number
Write a function that finds the largest number in an array nums that is also even. If there is no even number, return -1.

Examples
largestEven([3, 7, 2, 1, 7, 9, 10, 13]) ➞ 10

largestEven([1, 3, 5, 7]) ➞ -1

largestEven([0, 19, 18973623]) ➞ 0
Notes
Consider using the modulo % operator.
*/


const largestEven = (arr, m=-1) => {
     let p = arr.pop()
     const v = m > p && m % 2 === 0 ? m : p
    return arr.length == 0 ? (m % 2 === 0 ? m : -1) : largestEven(arr, v)
}


Test.assertEquals(largestEven([3, 7, 2, 1, 7, 9, 10, 13]), 10);
Test.assertEquals(largestEven([1]), -1);
Test.assertEquals(largestEven([22]), 22);
Test.assertEquals(largestEven([13, 5, 7, 9]), -1);
Test.assertEquals(largestEven([3, 19, 18973623, 2]), 2);