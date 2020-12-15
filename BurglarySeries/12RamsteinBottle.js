const Test = require("../tests/test");
/*
Burglary Series (12): Get Vodka Bottle
21 Oct 2020
The insurance guy laughs, he's just kidding. He just needs an updated list. You just need one of those Rammstein Vodka bottles.

Given an object with alcoholic drinks and a number, return a string with the name of the Rammstein bottle that matches the given number.

Examples
{ whiskey: 100, "Rammstein A": 100, "Rammstein B": 50 } ➞ "Rammstein A"
// number = 100

{ whiskey: 100, "Rammstein A": 100, "Rammstein B": 50 } ➞ "Rammstein B"
// number = 50

{ whiskey: 100, "Rammstein A": 100, "Rammstein D": 70, beer: 70 } ➞ "Rammstein D"
// number = 70
Notes
There will always be a corresponding Rammstein bottle for the number given.
There will never be 2 Rammstein bottles with the same number.
You always return one Rammstein bottle.

*/

const getVodkaBottle = (o, n) => Object.entries(o).filter(([k,v]) => /^R/.test(k) && v === n)[0][0]



const random = Math.random()
const obj = {absinth: 100, whiskey: 100, "Rammstein A": 100, "Rammstein B": 50, "Rammstein C": random };

Test.assertEquals(getVodkaBottle(obj, 100),"Rammstein A")
Test.assertEquals(getVodkaBottle(obj, 50),"Rammstein B")
Test.assertEquals(getVodkaBottle(obj, random),"Rammstein C")


//my Answer
const getVodkaBottle = (o, n) => Object.entries(o).filter(([k,v]) => /^R/.test(k) && v === n)[0][0]

//Pustur
// const getVodkaBottle = (obj, num) =>
//   Object.keys(obj).find(key => key.includes('Rammstein') && obj[key] === num);

//MB Bentleu
// const getVodkaBottle = (obj, num) => Object.entries(obj)
// 	.find(v => v[0].startsWith("Rammstein") && v[1] === num)[0];