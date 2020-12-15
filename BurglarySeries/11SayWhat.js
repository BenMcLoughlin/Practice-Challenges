
const Test = require("../tests/test");

/*
Burglary Series (11): Say What
21 Oct 2020
The insurance guy calls again. Apparently, they were informed by your spouse that some items were 
not stolen at all and you failed to mention this detail to them. This is a fraud attempt! You freeze 
and mumble something unintelligible. Find out what you said.

Given an object with always the exact same 3 keys, return a string that concatenates all the values
 and adds the 2nd key at the end. Make sure you keep an empty space between them but not at the 
 beginning or end of the string. Look at the examples for a clearer picture.

Examples
{ 1: "Mommy", 2: "please", 3: "help" } ➞ "Mommy please help please"

{ 1: "Me", 2: "innocent", 3: "is" } ➞ "Me innocent is innocent"

{ 1: "Must", 2: "lawyer", 3: "call" } ➞ "Must lawyer call lawyer"
Notes
The keys will always be 1: 2: 3: in this order. Don't mistake keys with indexes.
I'm rating the challenge very easy because it can be hardcoded but try to do it dynamically, 
that is, imagine tomorrow you receive an object with 4 keys instead, your function would still work.
Check the Resources for tips if needed.
*/






const obj = { 1: "Mommy", 2: "please", 3: "help" }
const obj2 = { 1: "Kelsey", 2: "innocent", 3: "is" }
Test.assertEquals(sayWhat(obj), "Mommy please help please")
Test.assertEquals(sayWhat(obj2), `${obj2[1]} innocent is innocent`)

// //My Answer
// const sayWhat = o => Object.values(o).reduce((a, w) => a + " " + w  ) + " " + o[2]


// //Puster
// const sayWhat = obj => [1, 2, 3, 2].map(i => obj[i]).join(' ');

// //Miguell

// function sayWhat(obj) {
// 	return `${Object.values(obj).join(" ")} ${obj[2]}`;
// }