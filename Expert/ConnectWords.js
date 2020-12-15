const Test = require("../tests/test");
/*
Connecting Words
2 Nov 2020
Write a function that connects each previous word to the next word by the shared letters. 
Return the resulting string (removing duplicate characters in the overlap) and the minimum number of shared letters across all pairs of strings.

Examples
join(["oven", "envier", "erase", "serious"]) ➞ ["ovenvieraserious", 2]

join(["move", "over", "very"]) ➞ ["movery", 3]

join(["to", "ops", "psy", "syllable"]) ➞ ["topsyllable", 1]

// "to" and "ops" share "o" (1)
// "ops" and "psy" share "ps" (2)
// "psy" and "syllable" share "sy" (2)
// the minimum overlap is 1

join(["aaa", "bbb", "ccc", "ddd"]) ➞ ["aaabbbcccddd", 0]
Notes
More specifically, look at the overlap between the previous words ending letters and the next word's beginning letters.
*/

// const join = arr => {
//   findMatchPosition = (str1, str2) => {
//     str1.split("").map(d => str1.split("").findIndex(e => str2.split("").includes(e)))
//   }
// }

//const join = (A, c = []) => [A.reduce((s, n) => `${s},${n}`.replace(/(.*),\1/g, (_, p) => c.push(p.length) && p)), Math.min(...c)];
// const join = (a, c = []) => {
//  return [a.reduce((b, n) => `${b},${n}`.replace(/(.*),\1/g, (_, p) => {
//    console.log(n)
//    return c.push(p.length) && p})), Math.min(...c)];
// }

const join1 = (a) => a.join(" ").replace(/([a-z]*)\s\1/gm, (b,n) => (c.push(n.length) && n));
const join2 = (a) => {
  let values = []
  let word = a.join(" ").replace(/([a-z]*)\s\1/gm, (b,n) => {
    values.push(n.length) 
    return n})
    return [word, Math.min(...values)]
  }
const join = (A, c = []) => [A.reduce((s, n) => (s + n).replace(/(.*),\1/g, (_, p) => c.push(p.length) && p)), Math.min(...c)];



  

//Test.assertSimilar(join(["happy", "python", "honey", "yelp", "plank", "lanky"]), ["happythoneyelplanky", 1]);
Test.assertSimilar(join(["move", "over", "very"]), ["movery", 3]);
// Test.assertSimilar(join(["oven", "envier", "erase", "serious"]), ["ovenvieraserious", 2]);
// Test.assertSimilar(join(["to", "ops", "psy", "syllable"]), ["topsyllable", 1]);
// Test.assertSimilar(join(["aaa", "bbb", "ccc", "ddd"]), ["aaabbbcccddd", 0]);
// Test.assertSimilar(join(["abcde", "bcdefghi", "efghi", "fghij", "ghijklmnop"]), ["abcdefghijklmnop", 4]);
// Test.assertSimilar(join(["aab", "abcccd", "cdeeef", "effff"]), ["aabcccdeeeffff", 2]);
