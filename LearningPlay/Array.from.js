



//A) Create an array from an array-like object

function arrayFromArgs() {
  console.log(arguments)
  return Array.from(arguments);
}

console.log(arrayFromArgs(1, "A", "cat", () => null));


//A) Create an array from a string

console.log(Array.from("house"))

//D) Create an array from an iterable object
//Since the Array.from() method also works on an iterable object,  you can use it to create an array from any object that has a [System.iterator] property. For example:

let even = {
  *[Symbol.iterator]() {
    for (let i = 0; i < 10; i += 2) {
      yield i;
    }
  },
};
let evenNumbers = Array.from(even);
console.log(evenNumbers);



const myObj = {
  0: {
    house: 'blue', 
    price: 100000,
  },
  1: {
    house: 'red', 
    price: 1000123400,
  },
  2: {
    house: 'green', 
    price: 1001234,
  },
  3: {
    house: 'blue', 
    price: 100000,
  },
  4: {
    house: 'blue', 
    price: 100000,
  },
}

console.log(Array.from(myObj))