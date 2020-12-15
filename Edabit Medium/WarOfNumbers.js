// War of Numbers
// There's a great war between the even and odd numbers. Many numbers already lost their life in this war and it's your task to end this. 
//You have to determine which group is larger: the even, or the odd. The larger group wins.

// Create a function that takes an array of integers, sums the even and odd numbers seperately, then returns the larger of the sums minus the smaller.



warOfNumbers = array => Math.abs(array.reduce((a,b) => a + (b%2 ? b : -b), 100 ))


console.log(warOfNumbers([12, 90, 75]), 'expect: 27')
console.log(warOfNumbers([2, 8, 7, 5]), 'expect: 2')
console.log(warOfNumbers([5, 9, 45, 6, 2, 7, 34, 8, 6, 90, 5, 243]), 'expect: 168')

//Answers 

//Mine

// warOfNumbers = array => {
//   let even = 0
//   let odd = 0
//   array.map(d => d % 2 ? even += d : odd += d)
//   return even > odd ? even - odd : odd - even
// }

//Others

//const warOfNumbers = arr => Math.abs(arr.reduce((a, b) => a + (b%2 ? b : -b), 0));