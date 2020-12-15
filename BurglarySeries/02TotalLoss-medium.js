const Test = require("../tests/test");
// Burglary Series (01): Calculate Total Losses
// You just returned home to find your mansion has been robbed! Given an object of the stolen items, return the 
// total amount of the burglary (number). If nothing was robbed, return the string "Lucky you!".

// Examples
// const stolenItems = {
//   tv: 30,
//   skate: 20,
//   stereo: 50,
// } ➞ 100

// const stolenItems = {
//   painting: 20000,
// } ➞ 20000

// const stolenItems = {} ➞ "Lucky you!"
// Notes


const calculateLosses = obj =>  Object.values(obj).reduce((a,n) => a + n,0) || "Lucky you!"

//  const calculateLosses = obj => 
//   Object.values(obj).reduce((total, num) => total + num, 0) || 'Lucky you!';


Test.assertEquals(calculateLosses({
  tv: 30,
  skate: 20,
  stereo: 50,
}), 100)

Test.assertEquals(calculateLosses({
  ring: 30000,
  painting: 20000,
  bust: 1,
}), 50001)

Test.assertEquals(calculateLosses({
  chair: 3500,
}), 3500)

Test.assertEquals(calculateLosses({}), "Lucky you!")