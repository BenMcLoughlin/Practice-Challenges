// Number of Boomerangs
// A boomerang is a V-shaped sequence that is either upright or upside down. Specifically, a boomerang can be defined as: sub-array of length 3, with the first and last digits being the same and the middle digit being different.

// Some boomerang examples:

// [3, 7, 3], [1, -1, 1], [5, 6, 5]
// Create a function that returns the total number of boomerangs in an array.

// To illustrate:

// [3, 7, 3, 2, 1, 5, 1, 2, 2, -2, 2]
// // 3 boomerangs in this sequence:  [3, 7, 3], [1, 5, 1], [2, -2, 2]
// Be aware that boomerangs can overlap, like so:


countBoomerangs = arr => arr.reduce((acc, d, i) => acc + (d === arr[i+2] && d !== arr[i+1]),0)


console.log(countBoomerangs([9, 5, 9, 5, 1, 1, 1]), ': returns 2' )
console.log(countBoomerangs([5, 6, 6, 7, 6, 3, 9]), ': returns 1' )
console.log(countBoomerangs([4, 4, 4, 9, 9, 9, 9]), ': returns 0' )


// //My Answer
// countBoomerangs = arr => arr.filter((d,i) => arr[i-1] === arr[i+1] && d !== arr[i-1]).length

// //Others

//countBoomerangs = arr => arr.reduce((acc, d, i) => acc + (d === arr[i+2] && d !== arr[i+1]),0)