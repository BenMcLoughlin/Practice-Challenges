const Test = require("../tests/test");
/*
Sum the number of times a given value occurs in an array of values and nested arrays
*/

// const countValues1 = (arr, value) => {
//    if  (arr.length === 0)  return 0
   
//    let stringTotal = 0
//    if (typeof arr[0] === "string" && arr[0] === value) {
//        stringTotal = arr[0] === value ? 1 + countValues(arr.slice(1), value) : countValues(arr.slice(1), value)
//    }
//    let arrayTotal = 0;
// //    if (typeof arr[0] === 'array') {
// //       arrayTotal = arr[0] === value ? 1 + countValues(arr.slice(1), value) : countValues(arr.slice(1), value);
// //    }
//    return stringTotal + arrayTotal + countValues(arr.slice(1), value);
// }

// const countValues = (arr, value) => {
//    if  (arr.length === 0)  return 0

// const newArray = []
//    arr.forEach((d, i, arr) => (typeof d !== "string" ? newArray.concat(d) : newArray.push(d)));
// return newAr
//    //   if (typeof arr[0] === 'array') arr.concat(arr[0])
   
//  stringTotal = arr[0] === value ? 1 + countValues(arr.slice(1), value) : countValues(arr.slice(1), value);
// }


const countValues = (arr, value) => {
      arr = arr.reduce((a, d) => (Array.isArray(d) ? a = a.concat(d) : a.push(d), a), [])
     return arr.length === 0 ? 0 : arr[0] === value ? 1 + countValues(arr.slice(1), value) : countValues(arr.slice(1), value)                   
}


// Test.assertEquals(countValues(["a", "b", "c", "b"], "a"), 1);
// Test.assertEquals(countValues(["a", "b", "c", "b", "c", "a", "a"], "a"), 3);
Test.assertEquals(countValues(["a", "b", "c", ["a", "b", "c"], ["a", "b", "c"]], "a"), 3);
Test.assertEquals(
  countValues(["a", "b", "c", ["a", "b", "c"], ["a", "b", "c"], ["a", "b", "c"], ["a", "b", "c", ["a", "b", "c"]]], "a"),
  6
);