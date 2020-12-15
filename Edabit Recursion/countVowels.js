const Test = require("../tests/test");
/*
Recursion: Count Vowels
24 Oct 2020
Write a function that recursively returns the number of vowels in a string.

Examples
countVowels("apple") ➞ 2

countVowels("cheesecake") ➞ 5

countVowels("bbb") ➞ 0

countVowels("") ➞ 0
Notes
All letters will be in lower case.
*/

const countVowels1 = (str) => (!str ? 0 : /[aeiou]/.test(str[0]) + countVowels(str.slice(1)));



Test.assertEquals(countVowels("apple"), 2);
// Test.assertEquals(countVowels("cheesecake"), 5);
// Test.assertEquals(countVowels("martini"), 3);
// Test.assertEquals(countVowels("rhythm"), 0);
// Test.assertEquals(countVowels(""), 0);
// Test.assertEquals(countVowels("b"), 0);
// Test.assertEquals(countVowels("a"), 1);
// Test.assertEquals(countVowels("bbbbbb"), 0);
// Test.assertEquals(countVowels("bbbbba"), 1);
// Test.assertEquals(countVowels("abbbb"), 1);
// Test.assertEquals(countVowels("bbbab"), 1);
// Test.assertEquals(countVowels("bbaab"), 2);
// Test.assertEquals(countVowels("baabab"), 3);

//My Answer
// countVowels = (s) => {
//   if (s.length === 0) return 0;
//   let count = 1;
//   return /[aeiou]/g.test(s[0]) ? (count += countVowels(s.slice(1))) : countVowels(s.slice(1));
// };
//MB BEntrley
//const countVowels = (str) => (!str ? 0 : /[aeiou]/.test(str[0]) + countVowels(str.slice(1)));