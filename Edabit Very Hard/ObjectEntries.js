// ES6 Object Methods in ES5
// In ES6 JavaScript, there exist two Object methods:

// Object.prototype.entries() takes a single object as an argument, and returns an array. In this array are arrays with the name of every property of the object, and the value of the property.
// Object.prototype.values() also takes a single object as an argument, and returns an array. In this array are the values of every property of the object.
// Examples
// const myObject = {
//   a: 1,
//   b: 2
// }

// Object.entries(myObject) ➞ [ ["a", 1], ["b", 2] ]
// Object.values(myObject) ➞ [1, 2]
// Your job is to recreate these Object methods in ES5 JavaScript, creating new methods:

// Object.prototype.entriesNew()
// Object.prototype.valuesNew()
// The methods you create should return the same values as Object.prototype.entries() and Object.prototype.values(), and should adhere to ES5 limits. If the object has no properties your methods should return an empty array.








//  Object.prototype.entriesNew= function(obj) {
// 	return Object.entries(obj)
// }

// Object.prototype.entriesNew = function(obj) {
// 	// your code here
// }

//console.log(Object.valuesNew({name: 'john', hairColor: 'brown'}), "['john','brown']")
console.log(Object.entriesNew({1: 'One', 2: 'Two', 3: 'Three'}), "[['1','One'],['2','Two'],['3','Three']]")
console.log(Object.entriesNew({1: 'One', 2: 'Two', 3: 'Three'}), "[['1','One'],['2','Two'],['3','Three']]")

Test.assertSimilar(Object.valuesNew({first: 1, second: 2, third: 3}), [1,2,3])


// Test.assertSimilar(Object.valuesNew({}), []);
// Test.assertSimilar(Object.entriesNew({}), []);
// Test.assertSimilar(Object.entriesNew({purpose: null, reason: 'none', cause: 'none'}), [['purpose',null],['reason','none'],['cause','none']]);
// Test.assertSimilar(Object.valuesNew({first: 1, second: 2, third: 3}), [1,2,3])

//My Answer
// Object.prototype.valuesNew = function(obj) {
//   const array =[] //initialize empty array
// 	for(const key in obj) { //run a for loop
//     if (typeof obj[key] !== 'function') { //Need to remove functions from object, since we're attaching this prototype it adds it as a function to the object
//       array.push(obj[key]) 
//     }
//   }
//   return array
// }

// Object.prototype.entriesNew = function(obj) {
//   const array =[] //initialize empty array
// 	for(const key in obj) { //run a for loop
//     if (typeof obj[key] !== 'function') { //remove functions from object, 
//       array.push([key, obj[key]]) // add a mini array with the key and the value
//     }
//   }
//   return array
// }