const Test = require("../../tests/test");
/*
Edaaaaabit
Write a function that takes an integer and returns a string with the given number of "a"s in Edabit.

Examples
howManyTimes(5) ➞ "Edaaaaabit"

howManyTimes(0) ➞ "Edbit"

howManyTimes(12) ➞ "Edaaaaaaaaaaaabit"
Notes
The string must start with "Ed" and end with "bit".
You'll only be given integers as test input.
*/


const  howManyTimes  = (num, str = 'bit') =>  num === 0 ? "Ed" + str : howManyTimes(num-1, "a" + str)


const str = 'edabit'
console.log(str.slice(2))


Test.assertEquals(howManyTimes(5), "Edaaaaabit");
Test.assertEquals(howManyTimes(15), "Edaaaaaaaaaaaaaaabit");
Test.assertEquals(howManyTimes(10), "Edaaaaaaaaaabit");
Test.assertEquals(howManyTimes(23), "Edaaaaaaaaaaaaaaaaaaaaaaabit");
Test.assertEquals(howManyTimes(1), "Edabit");