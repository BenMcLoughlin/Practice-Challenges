const Test = require("../tests/test");
/*
Playing with Nested Objects
Create a function that takes an object and returns an object of all entries having unique marks. If the marks are the same, take who is eldest.


Examples
getObject({
  "0": { age: 18, name: "john", marks: "400" },
  "1": { age: 17, name: "julie", marks: "400" },
  "2": { age: 16, name: "Robin", marks: "200" },
  "3": { age: 16, name: "Bella", marks: "300" }
}) ➞ {
  "0": { age: 18, name: "john", marks: "400" },
  "1": { age: 16, name: "Robin", marks: "200" },
  "2": { age: 16, name: "Bella", marks: "300" }
}

getObject({
  0: {age: 18, name: 'john', marks: '400'},
  1: {age: 17, name: 'julie', marks: '400'},
  2: {age: 16, name: 'Robin', marks: '200'},
  3: {age: 16, name: 'Bella', marks: '300'},
  4: {age: 16, name: 'john', marks: '250'},
  5: {age: 15, name: 'julie', marks: '250'}
}) ➞    {
  0: {age: 18, name: 'john', marks: '400'},
  1: {age: 16, name: 'Robin', marks: '200'},
  2: {age: 16, name: 'Bella', marks: '300'},
  3: {age: 16, name: 'john', marks: '250'}
}
Notes
Check the examples above for clarification.
*/




// .reduce((a,obj) => {
//   a = {...a, ...obj}
//   return a;
// }, {})
//  return (!(obj.marks in a) || obj.age® > a[obj.marks][1].age) ? ({...a, ...obj}) : a, {}})



Test.assertSimilar(
  getObject({
    0: { age: 18, name: "john", marks: "400" },
    1: { age: 17, name: "julie", marks: "400" },
    2: { age: 16, name: "Robin", marks: "200" },
    3: { age: 16, name: "Bella", marks: "300" },
  }),
  { 0: { age: 18, name: "john", marks: "400" }, 1: { age: 16, name: "Robin", marks: "200" }, 2: { age: 16, name: "Bella", marks: "300" } }
);
Test.assertSimilar(
  getObject({
    0: { age: 18, name: "john", marks: "400" },
    1: { age: 17, name: "julie", marks: "400" },
    2: { age: 16, name: "Robin", marks: "200" },
    3: { age: 16, name: "Bella", marks: "300" },
    4: { age: 16, name: "john", marks: "250" },
    5: { age: 15, name: "julie", marks: "250" },
  }),
  {
    0: { age: 18, name: "john", marks: "400" },
    1: { age: 16, name: "Robin", marks: "200" },
    2: { age: 16, name: "Bella", marks: "300" },
    3: { age: 16, name: "john", marks: "250" },
  }
);