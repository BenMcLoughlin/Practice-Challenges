const Test = require("../../tests/test");
/*
Recursion: String Palindromes
6 Nov 2020
Write a function that recursively determines if a str is a palindrome.

Examples
isPalindrome("abcba") ➞ true

isPalindrome("b") ➞ true

isPalindrome("") ➞ true

isPalindrome("ad") ➞ false
Notes
An empty str counts as a palindrome.
*/

// function isPalindrome(str) {
//   if (str.length <= 1) {
//     return true;
//   }

//   let [firstLetter] = str;
//   let lastLetter = str[str.length - 1];

//   if (firstLetter === lastLetter) {
//     let stringWithoutFirstAndLastLetters = str.substring(1, str.length - 1);
//     return isPalindrome(stringWithoutFirstAndLastLetters);
//   } else {
//     return false;
//   }
// }


const isPalindrome = (str) => {
  if (str.length <= 1) return true
  if (str[0] === str[str.length -1]) {
    return isPalindrome(str.substring(1, str.length - 1));
  } 

}



Test.assertEquals(isPalindrome("abcba"), true);
// Test.assertEquals(isPalindrome("abbba"), true);
// Test.assertEquals(isPalindrome("abbbba"), true);
// Test.assertEquals(isPalindrome("abccdba"), false);
// Test.assertEquals(isPalindrome("abbaa"), false);
// Test.assertEquals(isPalindrome("abbbbb"), false);
// Test.assertEquals(isPalindrome("ad"), false);
// Test.assertEquals(isPalindrome("b"), true);
// Test.assertEquals(isPalindrome(""), true);