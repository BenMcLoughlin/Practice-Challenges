// Oddish vs. Evenish
// Create a function that determines whether a number is Oddish or Evenish. A number is Oddish if the sum of all of its 
//digits is odd, and a number is Evenish if the sum of all of its digits is even. If a number is Oddish, return "Oddish". Otherwise, return "Evenish".

// For example, oddishOrEvenish(121) should return "Evenish", since 1 + 2 + 1 = 4. oddishOrEvenish(41) should return "Oddish", since 4 + 1 = 5.


const oddishOrEvenish1 = n => ['Even','Odd'][[...''+n].reduce((a,v) => +v+a, 0) % 2]+'ish'
const oddishOrEvenish = n => [[...''+n].reduce((a,v) => +v+a, 0) % 2]

//['Even', "Odd"]

console.log(oddishOrEvenish(43), ': returns Oddish' )
console.log(oddishOrEvenish(373), ': returns Oddish' )
console.log(oddishOrEvenish(4433), ': returns Evenish' )


//My Answer

//const oddishOrEvenish = number => number.toString().split('').reduce((acc, num) => +acc + +num) % 2 ? "Oddish" : "Evenish"

//Others
// function oddishOrEvenish(num) {
// 	return [...String(num)].map(Number).reduce((a,v) => a + v) % 2 ? 'Oddish' : 'Evenish'
// }

//
//const oddishOrEvenish = n => ['Even','Odd'][[...''+n].reduce((a,v) => +v+a, 0) % 2]+'ish';