const Test = require("../../tests/test");
/*
Recursion: Count The Digits
23 Oct 2020
Create a function that will recursively count the number of digits of a number.
 Conversion of the number to a string is not allowed, thus, the approach is recursive.

Examples
digitsCount(0) ➞ 1

digitsCount(12345) ➞ 5

digitsCount(1289396387328) ➞ 13
Notes
*/




Test.assertEquals(digitsCount(0),1)
Test.assertEquals(digitsCount(12345), 5);
Test.assertEquals(digitsCount(1289396387328), 13);
