const Test = require("../tests/test");
/*
Burglary Series (05): Third Most Expensive
https://edabit.com/challenge/3hDDMWvmMQ6pFqqmg
19 Oct 2020
Time to call your lover to inform what he/she lost in the burglary.

Given an object of the stolen objects, return the 3rd most expensive item on the list. If that is not possible, because there are not enough items, return false.

Examples
thirdMostExpensive({}) ➞ false

thirdMostExpensive({ piano: 100, tv: 200 }) ➞ false

thirdMostExpensive({ piano: 400, tv: 300, stereo: 200 })  ➞ "stereo"

thirdMostExpensive({ piano: 1000, tv: 500, ball: 10 , mirror: 200, }) ➞ "mirror"
Notes
*/


// const convertToNumber = obj =>  {
// 	for (item in obj) {
// 		obj[item] = +obj[item]
// 	}
// 	return obj
// }

const convertToNumber = o => (Object.keys(o).forEach(d => o[d] = +o[d]),o)

//const convertToNumber = o => (Object.keys(o).forEach(k => o[k] = +o[k]), o)

const convertToNumber = obj  => Object.fromEntries(Object.entries(obj).map(([k, v]) => [k, +v]));



//const thirdMostExpensive = o => (Object.entries(o).sort((a,b) => b[1] - a[1])[2] || [false])[0]


// function thirdMostExpensive(obj) {
// 	return (Object.entries(obj).sort((a, b) => b[1] - a[1])[2] || [false])[0];
// }
Test.assertSimilar(convertToNumber({piano: "200", tv: "300", stereo: "400" }), {piano: 200, tv: 300, stereo: 400})
Test.assertSimilar(convertToNumber({piano: "200", tv: "300" }), {piano: 200, tv: 300 })
Test.assertSimilar(convertToNumber({piano: "200"}), {piano: 200})


// Test.assertEquals(thirdMostExpensive({}), false)
// Test.assertEquals(thirdMostExpensive({piano: 100}), false)
// Test.assertEquals(thirdMostExpensive({piano: 100, stereo: 200 }), false)
// Test.assertEquals(thirdMostExpensive({piano: 100, stereo: 200, tv: 10 }), "tv")
// Test.assertEquals(thirdMostExpensive({piano: 100, stereo: 200, tv: 10, timmy: 500 }), "piano")
// Test.assertEquals(thirdMostExpensive({computer: 1000, piano: 500, stereo: 200, tv: 10, timmy: 1 }), "stereo")

//My Answer
//const thirdMostExpensive = o => Object.keys(o).length > 2 ? Object.entries(o).sort((a,b) => b[1] - a[1])[2][0] : false

