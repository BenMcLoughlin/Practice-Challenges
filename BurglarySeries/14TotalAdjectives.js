const Test = require("../tests/test");
/*
Burglary Series (14): Adjectives Total
You call your spouse in anger and a "little" argument takes place. Count 
the total amount of adjectives used. Given an object with a list of adjectives, return the total amount of adjectives used.

Examples
totalAmountAdjectives({ a: "moron" }) ➞ 1

totalAmountAdjectives({ a: "idiot", b: "idiot", c: "idiot" }) ➞ 3

totalAmountAdjectives({ a: "moron", b: "scumbag", c: "moron", d: "dirtbag" }) ➞ 4
Notes
The list will never be empty (no empty object).
*/


const totalAmountAdjectives = (o) => Object.keys(o).length


const obj = { a: "moron" }
const obj2 = { a: "moron", b: "scumbag", c: "moron", d: "dirtbag" } 
const obj3 = {b: "scumbag", c: "moron", d: "dirtbag" } 
let dynamic = {}
const random = Test.randomNumber()
let arr = new Array(random).fill(".")
arr.forEach((item, i) => dynamic[i] = item)

Test.assertEquals(totalAmountAdjectives(obj), 1)
Test.assertEquals(totalAmountAdjectives(obj2), 4)
Test.assertEquals(totalAmountAdjectives(obj3), 3)
Test.assertEquals(totalAmountAdjectives(dynamic), random)