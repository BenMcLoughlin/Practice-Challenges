const Test = require("../tests/test");
/*
Eat Chocolates
Arun recently started eating chocolates. The shopkeeper tells Arun that for every three chocolates Arun eats, 
he will give him one chocolate in exchange for three chocolate wrappers. Now, Arun is confused about how many chocolates he can eat.
16 Oct 2020
https://edabit.com/challenge/nqNkTkNKcwBH6geSX

Given the total money money Arun has and the cost of one chocolate cost, help him figure out how many chocolates he can eat.

Examples
countChocolates("4$", "1$") ➞ 5
// Arun eats three chocolates and purchases one more
// chocolate from Bitu in those three wrappers. Now he
// eats those two chocolates and hence 3 + 2 = 5.

countChocolates("55   $", "5$") ➞ 16

countChocolates("I have 68$", "2$")  ➞ 50

countChocolates("I got -68$ from my mom ", "2$")  ➞ "Invalid Input"
// Because -68 is a negative number and money can't be negative.
Notes
Figure out the invalid inputs and take care of them.
*/


// const countChocolates1 = (3, 1) => {
//   const m = money.match(/[\d]/g).join("")
//   const c = cost.match(/[\d]/g).join("")
//   const purchaseable = (m/c)
//   return purchaseable  + (purchaseable/3)
// }

function countChocolates(m, c) {
	const match = d => +d.match(/-?\d+/)
  m = match(m)
	c = match(c)
  if (m <= 0 || c <= 0) return "Invalid Input" 
		const chocs = Math.floor(m / c)
		return chocs + Math.floor((chocs - 1) /2)
}

Test.assertEquals(countChocolates("36$", "3 $"), 17)

function countChocolates1(money, cost) {
	let [m, c] = money.concat(cost).match(/[0-9-]+/g).map(Number);
	if (m <= 0 || c <= 0) return 'Invalid Input';
	let chocs = Math.floor(m/c);
	let total = chocs;
	while (chocs >= 3) {
		total += Math.floor(chocs/3);
		chocs = Math.floor(chocs/3) + chocs%3;
	}
	return total;
}



const countChocolates3 = (m, c) => {

let chocs = Math.floor(m/c)
let total = chocs
for (let i = chocs; i >= 3; i--) {
	total +=Math.floor(chocs/3)
	chocs = Math.floor(chocs/3) + chocs%3
}
return total
}

const countChocolates4 = (m, c) => {
const chocs = m/c
const extraWrappers =	[...Array(Math.floor(chocs+1)).keys()].reduce((acc, num, index) => num % 3 === 0 ? acc + 1 + (Math.floor(acc/3)): acc)
console.log([...Array(Math.floor(chocs+2)).keys()])

return chocs + extraWrappers
}

//console.log(countChocolates(28,2))




// Test.assertEquals(countChocolates("Arun has 2074$", "One chocolate costs 2$"), 1555)
// Test.assertEquals(countChocolates("Arun has got 22$", "One chocolate costs 2$"), 16)
// Test.assertEquals(countChocolates("36$", "3 $"), 17)
// Test.assertEquals(countChocolates("I have 4 dollars", "1   $"), 5)
// Test.assertEquals(countChocolates("28$", "2$"), 20)
// Test.assertEquals(countChocolates("0$", "0$"), "Invalid Input")
// Test.assertEquals(countChocolates("8$", "-2$"), "Invalid Input")