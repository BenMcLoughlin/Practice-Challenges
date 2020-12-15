const Test = require("../tests/test");
/*
Burglary Series (13): Sort That List
21 Oc 2020
The insurance guy tells you he needs an updated list of the stolen goods, and surely only to annoy you, he adds, "in reverse alphabetical order".

Given an object with the stolen items, return a new object with the list in reverse alphabetical order.

Examples
{ c: 100, a: 50, b: 10, d: 50 } ➞ { d: 50, c: 100, b: 10, a: 50 }

{ ab: 10, ac: 10, ad: 10 } ➞ { ad: 10, ac: 10, ab: 10 }

{ piano: 5, stereo: 10, suitcase: 1 } ➞ { suitcase: 1, stereo: 10, piano: 5 }
Notes
N/A
*/

const array = [
  ["d", 100],
  ["b", 20],
  ["c", 200],
  ["a", 100],
];
//console.log(array.sort().reverse());

const sortList = o => Object.fromEntries(Object.entries(o).sort().reverse());

// const sortList = o => {
//     let newObj = {}
//    const value = Object.keys(o).sort().reverse().map(d => ({...newObj[d] = o[d]}))
//    console.log(JSON.stringify(newObj, null, 4));
//    return value

// }


const random = Math.random()
const obj = {
    c: 100,
    a: 50,
    b: 10,
    d: 50,
};
const obj2 = {ab: 10, ac: 10, ad: 10}
const obj3 = {piano: random, stereo: 10, suitcase: 1}

Test.assertSimilar(sortList(obj),{ d: 50, c: 100, b: 10, a: 50 })
Test.assertSimilar(sortList(obj2),{ ad: 10, ac: 10, ab: 10 })
Test.assertSimilar(sortList(obj3),{ suitcase: 1, stereo: 10, piano: random })

//my Answer

const sortList = (o) => Object.fromEntries(Object.entries(o).sort().reverse());


// const sortList = o => {
//     let newObj = {}
//    const value = Object.keys(o).sort().reverse().map(d => ({...newObj[d] = o[d]}))
//    console.log(JSON.stringify(newObj, null, 4));
//    return value

// }


//Pustur
// const getVodkaBottle = (obj, num) =>
//   Object.keys(obj).find(key => key.includes('Rammstein') && obj[key] === num);

//MB Bentleu
// const getVodkaBottle = (obj, num) => Object.entries(obj)
// 	.find(v => v[0].startsWith("Rammstein") && v[1] === num)[0];