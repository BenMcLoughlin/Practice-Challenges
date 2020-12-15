const Test = require("../tests/test");
/*
Measure the Depth of Emptiness
In this challenge you will receive an input of the form:

[[[[[[[[[[[]]]]]]]]]]]
In other words, an array containing an array containing an array containing... an array containing nothing.

Your goal is to measure the depth of this array, where [] has a depth 1, [[]] has depth of 2, [[[]]] has depth 3, etc.

Examples
measureDepth([]) ➞ 1

measureDepth([[]]) ➞ 2

measureDepth([[[]]]) ➞ 3

measureDepth([[[[[[[[[[[]]]]]]]]]]]) ➞ 11
*/
measureDepth = (arr) => (!arr[0] ? 1 : (1 + measureDepth(arr[0])))

Test.assertEquals(measureDepth([]), 1);
Test.assertEquals(measureDepth([[]]), 2);
Test.assertEquals(measureDepth([[[]]]), 3);
Test.assertEquals(measureDepth([[[[[[]]]]]]), 6);
Test.assertEquals(measureDepth([[[[[[[[]]]]]]]]), 8);
Test.assertEquals(measureDepth([[[[[[[[[[[[[]]]]]]]]]]]]]), 13);
Test.assertEquals(measureDepth([[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]), 17);
Test.assertEquals(measureDepth([[[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]), 18);