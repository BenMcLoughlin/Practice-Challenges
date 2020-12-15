const Test = require("../../tests/test");
/*
Recursion to Repeat a String n Number of Times
23 Oct 2020
Create a recursive function that takes two parameters and repeats the string n number of times. 
The first parameter txt is the string to be repeated and the second parameter is the number of times the string is to be repeated.

String.prototype.repeat() is not allowed

Examples
repetition("ab", 3) ➞ "ababab"

repetition("kiwi", 1) ➞ "kiwi"

repetition("cherry", 2) ➞ "cherrycherry"
Notes
The second parameter of the function is positive integer.
*/

const repetition = (s, n) => (n === 1 ? s : s + repetition(s, n - 1));

//repetition = (s, n) => (n === 1) ? s : s + repetition(s, n-1)


//Test.assertEquals(repetition("soccer", 2), "soccersoccer");
// Test.assertEquals(repetition("ab", 3), "ababab");
// Test.assertEquals(repetition("bonita", 1), "bonita");
// Test.assertEquals(repetition("ciao", 4), "ciaociaociaociao");
Test.assertEquals(repetition("amigo", 5), "amigoamigoamigoamigoamigo");
// Test.assertEquals(repetition("torque", 2), "torquetorque");