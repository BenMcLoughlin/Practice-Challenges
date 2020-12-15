const Test = require("../tests/test");
/*
A palindrome is a series of letters or numbers that reads equivocally backwards. Write a recursive 
function that determines whether a given string is a palindrome or not.

Examples
isPalindrome("Go hang a salami, I'm a lasagna hog!") ➞ true

isPalindrome("This phrase, surely, is not a palindrome!") ➞ false

isPalindrome("Eva, can I see bees in a cave?") ➞ true

*/

const isPalindrome = string => {
    s = string.replace(/[^a-z]/gi, "").toLowerCase();
    return !s || (s[0] === s[s.length - 1] && isPalindrome(s.slice(1,-1)));
}



Test.assertEquals(isPalindrome("A man, a plan, a cat, a ham, a yak, a yam, a hat, a canal-Panama!"), true);


let [strVector, resVector] = [
  [
    "Maneuquenam", "Not a palindrome", "A man, a plan, a cat, a ham, a yak, a yam, a hat, a canal-Panama!",
    "Go hang a salami, I'm a lasagna hog!", "This phrase is really this!", "Red rum, sir, is murder.",
    "Big step on no pets, Gib!", "One true fortune, but no!", "Don't nod.", "I did, did I?", "My gym.",
    "Top spot.", "Was it a cat I saw?", "No lemon, no melon.", "Eva, can I see bees in a cave?",
    "Can I be iconic?", "Madam I'm Adam.", "The man on the moon are them.", "Sit on a potato pan, Otis.",
    "Truly, a classic cadillac!", "Able was I, ere I saw Elba.", "Step on no pets!"
  ], [
    true, false, true, true, false, true, true, false, true, true, true,
		true, true, true, true, false, true, false, true, false, true, true
  ]
]
for (let i in strVector) Test.assertEquals(isPalindrome(strVector[i]), resVector[i])

//My Answer
const isPalindrome = (string) => {
  s = string.replace(/[^a-z]/gi, "").toLowerCase();
  return !s || (s[0] === s[s.length - 1] && isPalindrome(s.slice(1, -1)));
};


//Deep Xavier

const isPalindrome2 = (p, k = p.toLowerCase().replace(/[^a-z]/g, "")) => {
  return k.length == 1 ? true : k.length == 2 ? k[0] == k[1] : k[0] == k.slice(-1) && isPalindrome(p, k.slice(1, -1));
};