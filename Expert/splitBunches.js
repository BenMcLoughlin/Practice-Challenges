const Test = require("../tests/test");
/*
Splitting Objects Inside an Array
16 Nov 2020
You bought a few bunches of fruit over the weekend. Create a function that splits a bunch into singular objects inside an array.

Examples
splitBunches([
  { name: "grapes", quantity: 2 }
]) ➞ [
  { name: "grapes", quantity: 1 },
  { name: "grapes", quantity: 1 }
]


splitBunches([
  { name: "currants", quantity: 1 },
  { name: "grapes", quantity: 2 },
  { name: "bananas", quantity: 2 }
]) ➞ [
  { name: "currants", quantity: 1},
  { name: "grapes", quantity: 1 },
  { name: "grapes", quantity: 1 },
  { name: "bananas", quantity: 1 },
  { name: "bananas", quantity: 1 }
]
*/


const splitBunches1 = arr => {
  const array = []
  spreadBunch = obj => {
    for (let i = 0; i < obj.quantity; i++) {
      array.push( {...obj, quantity: 1})
    }
  }
  arr.forEach(d => spreadBunch(d))
 return array
}


const object = { name: "bananas", quantity: 2 };
const array = [1,2,3,4,5,6]

console.log(Array.from({length: array.length}, (d, i) => i));

const splitBunches2 = (a) => a.reduce((d, o) => d.concat([...Array(o.quantity).keys()].map(() => ({...o, quantity:1}))), [])
const splitBunches4 = (a) => a.flatMap((e) => Array.from({ length: e.quantity }, () => ({ ...e, quantity: 1 })));


const splitBunches = a => a.flatMap(e => Array.from({length: e.quantity}, () => ({...e, quantity: 1})))


//const splitBunches = (bunches) => bunches.flatMap((e) => Array.from({ length: e.quantity }, () => ({ ...e, quantity: 1 })));

//const splitBunches = (arr) => [...Array(1).keys()];

// Test.assertSimilar(splitBunches([{ name: "bananas", quantity: 1 }]), [{ name: "bananas", quantity: 1 }]);
  Test.assertSimilar(splitBunches([{ name: "bananas", quantity: 2 }]), [
    { name: "bananas", quantity: 1 },
    { name: "bananas", quantity: 1 },
  ]);
Test.assertSimilar(
  splitBunches([
    { name: "bananas", quantity: 2 },
    { name: "grapes", quantity: 2 },
  ]),
  [
    { name: "bananas", quantity: 1 },
    { name: "bananas", quantity: 1 },
    { name: "grapes", quantity: 1 },
    { name: "grapes", quantity: 1 },
  ]
);
// Test.assertSimilar(
//   splitBunches([
//     { name: "cherry tomatoes", quantity: 3 },
//     { name: "bananas", quantity: 1 },
//     { name: "grapes", quantity: 2 },
//     { name: "cherry tomatoes", quantity: 3 },
//   ]),
//   [
//     { name: "cherry tomatoes", quantity: 1 },
//     { name: "cherry tomatoes", quantity: 1 },
//     { name: "cherry tomatoes", quantity: 1 },
//     { name: "bananas", quantity: 1 },
//     { name: "grapes", quantity: 1 },
//     { name: "grapes", quantity: 1 },
//     { name: "cherry tomatoes", quantity: 1 },
//     { name: "cherry tomatoes", quantity: 1 },
//     { name: "cherry tomatoes", quantity: 1 },
//   ]
// );