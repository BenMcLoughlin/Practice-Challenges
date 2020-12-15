const Test = require("../../tests/test");
/*
Recursion: Reverse a String
Published by Matt in JavaScript
language_fundamentalsrecursionstrings
Write a function that reverses a string. Make your function recursive.

Examples

reverse("hello") ➞ "olleh"

reverse("world") ➞ "dlrow"

reverse("a") ➞ "a"

reverse("") ➞ ""
Notes

For non-base cases, your function must call itself at least once.
Check the Resources tab for info on recursion.
*/

//const reverse = (str, r="") => !str ? r : reverse(str.slice(1), str[0] + r)

//const reverse = (s) => !!s ? s.slice(-1) + reverse(s.slice(0,-1)) : ""




Test.assertEquals(reverse("hello"), "olleh");
Test.assertEquals(reverse("world"), "dlrow");
Test.assertEquals(reverse("a"), "a");
Test.assertEquals(reverse(""), "", "An empty string should return an empty string.");

//Best Answer
//const reverse = (s) => (!!s ? s.slice(-1) + reverse(s.slice(0, -1)) : "");

//Stolen answer
// function reverse(str) {
//   if (!str) return str;
//   return str.slice(-1) + reverse(str.slice(0, -1));
// }




//MB BEntleys
// const reverse = (str, r = "") => (!str ? r : reverse(str.slice(1), str[0] + r));

const reverse = (str, r = "") => {
  if (!str.length) return r;
  return reverse(str.slice(1), str[0] + r);
};
