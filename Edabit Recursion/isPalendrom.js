const Test = require("../tests/test");
/*
Create a recursive function that determines whether a word is a palindrome or not.

Examples
isPalindrome("madam") ➞ true

isPalindrome("adieu") ➞ false

isPalindrome("rotor") ➞ true
*/





Test.assertEquals(isPalindrome("racecar"), true);


// const recursive = (f) => (`${f}`.match(RegExp(`${f.name}`, "gm")) || []).length > +/function/.test(f);
// Test.assertNotEquals(recursive(isPalindrome), false, "Recursion is required!");

let [strVector, resVector] = [
  ["rascal", "racecar", "madam", "adieu", "radar", "rotor", "abacus", "rotator", "scholars"],
  [false, true, true, false, true, true, false, true, false],
];
for (let i in strVector) Test.assertEquals(isPalindrome(strVector[i]), resVector[i]);

//My Answer

const isPalindrome1 = (s) => (s.length === 1 ? true : s[0] === s[s.length - 1] ? isPalindrome(s.slice(1, s.length - 1)) : false);


//cvf
function isPalindrome2(wrd) {
  return !wrd || (wrd[0] === wrd[wrd.length - 1] && isPalindrome(wrd.slice(1, -1)));
}

//Deep Xavier
const isPalindrome3 = (w) => {
  return w.length < 2 ? true : w.slice(0, 1) == w.slice(w.length - 1) ? isPalindrome(w.slice(1, w.length - 1)) : false;
};