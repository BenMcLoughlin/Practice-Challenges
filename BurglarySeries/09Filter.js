const Test = require("../tests/test");
/*
Burglary Series (09): Filter Values
The insurance guy calls, the policy you chose doesn't cover values below 5000€, it wouldn't dignify your status you said at the time. Given an object with a list of the stolen items, return a copy of that list without the values below 5000.

Examples
{ tv: 4999, guitar:5000, fork: 5001 } ➞ { guitar:5000, fork: 5001 }

{ tv: 4999 } ➞ {}

{ guitar: 5000 } ➞ { guitar: 5000 }

{} ➞ {}
*/





const random = Math.random() * 10000
const random2 = Math.random() * 10000
const obj = {piano: 4999, skate: 5000, stereo: random, "rubber duck": random2}
let obj2 = Object.entries(obj).filter(item => item[1] >= 5000)
obj2 = Object.fromEntries(obj2);
const check = Object.is(filterValues(obj), obj)

Test.assertEquals(check, false)
Test.assertSimilar(filterValues(obj), obj2)
Test.assertSimilar(filterValues({}), {})
Test.assertSimilar(filterValues({piano: 300}), {})
Test.assertSimilar(filterValues({tv: 4999, guitar:5000, fork: 5001 }), {guitar:5000, fork: 5001 })


//May Answer

const filterValues = obj => Object.fromEntries(Object.entries(obj).filter(([a,b]) => b >= 5000))

