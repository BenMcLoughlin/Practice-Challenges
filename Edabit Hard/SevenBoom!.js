//Seven Boom!
//Create a function that takes an array of numbers and return "Boom!" if the number 7 appears in the array. Otherwise, return "there is no 7 in the array".





//const sevenBoom = array => array.includes(7) ? "Boom!" : "there is no 7 in the array"
//const sevenBoom = arr => arr.map(d => d.toString().split('')).filter(d => d.toString().includes(7)).length > 0 ? "Boom!"  : "there is no 7 in the array" //.map(d => d.includes(7) ? 1 : 0)



console.log(sevenBoom([1, 2, 3, 4, 5, 6, 7]), ': returns "Boom!"' )
console.log(sevenBoom([8, 6, 33, 100]), ': returns "there is no 7 in the array"' )
console.log(sevenBoom([2, 55, 60, 97, 86]), ': returns "Boom!"' )

//OTHER ANSWERS
/*

const sevenBoom = arr => /7/.test(arr)

const sevenBoom = (arr) => arr.join("").indexOf('7') >= 0 ? "Boom!" : "there is no 7 in the array";


const sevenBoom = function(arr) {
	return (arr.join().includes('7') ? "Boom!" : "there is no 7 in the array");
}

*/