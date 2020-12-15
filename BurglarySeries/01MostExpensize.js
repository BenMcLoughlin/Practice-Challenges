const Test = require("../tests/test");
// Burglary Series (02): Most Valuable Item
// You call your spouse to inform his/her most precious item is gone! Given an object of stolen items, return the most expensive item on the list.

// Examples
// mostExpensiveItem({
//   piano: 2000,
// }) ➞ "piano"

// mostExpensiveItem({
//   tv: 30,
//   skate: 20,
// }) ➞ "tv"

// mostExpensiveItem({
//   tv: 30,
//   skate: 20,
//   stereo: 50,
// }) ➞ "stereo"


const mostExpensiveItem = o => Object.entries(o).sort(([,a],[,b]) => b-a)[0][0]


console.log(mostExpensiveItem(  {tv: 30,
  skate: 20,
  stereo: 50,
}))

// Test.assertEquals(mostExpensiveItem({
//   tv: 30,
//   skate: 20,
//   stereo: 50,
// }), "stereo")

// // Test.assertSimilar(mostExpensiveItem({
//   skate: 20,
// }), "skate")

// Test.assertEquals(mostExpensiveItem({
//   tv: 30,
//   skate: 20,
// }), "tv")