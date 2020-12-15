const Test = require("../../tests/test");
/*
Recursion: Harshad Number
A number is said to be Harshad if it's exactly divisible by the sum of its digits. Create a function that determines whether a number is a Harshad or not.

Examples
isHarshad(75) ➞ false
// 7 + 5 = 12
// 75 is not exactly divisible by 12
 
isHarshad(171) ➞ true
// 1 + 7 + 1 = 9
// 9 exactly divides 171
 
isHarshad(481) ➞ true

isHarshad(89) ➞ false

isHarshad(516) ➞ true

isHarshad(200) ➞ true
Notes
You are expected to solve this challenge via recursion.
You can check on the Resources tab for more details about recursion.
A non-recursive version of this challenge can be found in here.
If you find recursion to be fun, a collection of those challenges is found in here.

*/
//1

const recursive = (f) => (`${f}`.match(RegExp(`${f.name}`, "gm")) || []).length > +/function/.test(f);
Test.assertNotEquals(recursive(isHarshad), false, "Recursion is required!");

let [numVector, resVector] = [
  [75, 171, 481, 89, 516, 200, 209, 12345, 53, 27],
  [false, true, true, false, true, true, true, true, false, true],
];
for (let i in numVector) Test.assertEquals(isHarshad(numVector[i]), resVector[i]);

//My unpretty anser
const isHarshad = (n, t) => {
  if (t && t.length === 0) return 0;
  t = t || n.toString().split("");
  const total = +t[0] + isHarshad(n, t.slice(1));
  const total2 = n
    .toString()
    .split("")
    .reduce((a, n) => a + +n, 0);
  if (total === total2) return n % total == 0;
  return total;
};

//Deep Xavier
const isHarshad_DeepXavier = (n, t = 0, i = 0) => {
  return i == (n + "").length ? !(n % t) : isHarshad(n, t + +(n + "").charAt(i), ++i);
};

//CVF
function isHarshad_CVF(n, m = 0, i = 0) {
  return `${n}`.length > i ? isHarshad(n, m + +`${n}`[i], i + 1) : n % m === 0;
}

//coolstar
function isHarshad_coolstar(n, sum = 0, index = 0) {
  var s = n.toString();
  if (index >= s.length) return n % sum == 0;
  var dig = parseInt(s[index]);
  return isHarshad(n, sum + dig, index + 1);
}

//weiqquapple
function isHarshad_weiqquapple(n, s = n.toString(), idx = 0, sum = 0) {
  if (idx == s.length) return n % sum == 0;
  sum += parseInt(s[idx]);
  return isHarshad(n, s, idx + 1, sum);
}
