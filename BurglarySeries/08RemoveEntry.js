const Test = require("../tests/test");
//https://edabit.com/challenge/y4K6Mi7XfaauvoT3u
/* Burglary Series (08): Remove an Entry
Your spouse tells you that one of the items on the list wasn't stolen, it is in your castle in Transilvania. Given an object of the stolen items and an item name, return a copy without that item on the list.

Examples
{ piano: 300, tv: 100, skate:50 } ➞ { piano: 300, tv: 100 }

{ mirror: 500, painting: 1 } ➞ { painting: 1 }
Notes
The object will contain at least two items.
Preferably, mutate the copy, not the original.


*/



const random = Math.random()
const obj = {piano: random, tv: 100}
const obj2 = {piano: random, tv: 100, skate: 50}
const res = Object.is(removeEntry(obj, "tv"), obj)
Test.assertEquals(res, false)
Test.assertSimilar(removeEntry(obj, "tv"), {piano: random})
Test.assertSimilar(removeEntry(obj2, "tv"), {piano: random, skate:50})

const removeEntry = (obj, entry) => {
  const newObj =  {...obj}
  delete newObj[entry]
  return JSON.stringify(newObj)
}
