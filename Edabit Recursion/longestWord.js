const Test = require("../tests/test");
/*
Recursion: Find the Longest Word
Write a recursive function that will return the longest word in a sentence. In cases where more than one word is found, return the first one.

Examples
findLongest("A thing of beauty is a joy forever.") ➞ "forever"

findLongest("Forgetfulness is by all means powerless!") ➞ "forgetfulness"

findLongest("Strengths is the longest and most commonly used word that contains only a single vowel.") ➞ "strengths"
Notes
Special characters and symbols don't count as part of the word.
Return the longest word found in lowercase letters.
You are expected to solve this challenge via a recursive approach.
A non-recursive version of this challenge can be found in here.
If you think recursion is fun, a collection of challenges can be found in here.
*/



Test.assertSimilar( findLongest("Hello darkness my old friend."), "darkness");

let [strVector, resVector] = [
  [
    "Hello darkness my old friend.",
    "Yourself is your soul's captain and fate's master.",
    "The pretty daughter's toy, a doll, is as pretty as her.",
    "A thing of beauty is a joy forever.",
    "Forgetfulness is by all means powerless!",
    "Strengths is the longest and most commonly used word that contains only a single vowel.",
  ],
  ["darkness", "yourself", "daughter", "forever", "forgetfulness", "strengths"],
];
for (let i in strVector) Test.assertSimilar(findLongest(strVector[i]), resVector[i]);


//My Terrible Answer
 const findlongest1 = (str, a) => {
   (arr = a || str.split(" ").map((d) => (d.includes("'") ? d.replace("s", "") : d))), (w1 = arr[0]);
   w2 = arr[1];
   max = w1.length > w2.length ? w1 : w2;

   if (a && a.length === 2) return max.toLowerCase().replace(/[^a-z]/, "");

   arr.push(max);

   return findLongest(str, arr.slice(2));
 };



//Deep Xavier
const findLongest2 = (s, w = null) => {
  return w == null
    ? findLongest(s.replace(/[\s.'?!]/gi, "|"), "")
    : !s.length
    ? w.toLowerCase()
    : findLongest(s.slice(s.indexOf("|") + 1), (k = s.slice(0, s.indexOf("|"))).length > w.length ? k : w);
};



//Habs
function findLongest3(sentence) {
  const words = sentence.toLowerCase().replace("'s", "").replace(".", "").split(" ");
  if (words.length == 1) return words[0];
  const rest = findLongest(words.slice(1).join(" "));
  return words[0].length > rest.length ? words[0] : rest;
}