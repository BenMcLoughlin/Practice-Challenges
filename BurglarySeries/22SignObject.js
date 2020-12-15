const Test = require("../tests/test");
/*
30 Oct
Burglary Series (22): Sign All
You finally receive the entire stolen list document from the police. 
You need to sign at the end of the document but also each 
sub-list corresponding to each room in your house where the items were stolen.

You are given two arguments, one object with nested objects and a string that corresponds to your
 name. The object already contains several signature properties, one on the root,
  the others on each nested object. Return an object with all containing signature values set to your name.

Examples
const obj = {
    kitchen: {
      painting: 100,
      piano: 1000,
      signature: "",
    },
    bathroom: {
      stereo: 220,
      signature: "",
    },
    signature: "",
  };

signAll(obj, "Rocky") ➞ {
    kitchen: {
      painting: 100,
      piano: 1000,
      signature: "Rocky",  // changed
    },
    bathroom: {
      stereo: 220,
      signature: "Rocky",  // changed
    }
    signature: "Rocky",  // changed
}
*/

signAll = (obj, name) =>
  Object.keys(obj).reduce(
    (a, k) => k !== "signature"
        ? {
            ...a,
            [k]: {
              ...obj[k],
              signature: name,
            },
          }
        : { ...a, [k]: name },
    {}
  ); //.reduce((a, n) => ({ ...a, [n]: { ...a[n], signature: name } }), {});

const name = "ben";
const obj = {
  kitchen: {
    painting: 100,
    piano: 1000,
    signature: "",
  },
  signature: "",
};

console.log(JSON.stringify(signAll(obj, "ben"), null, 4));

// const obj2 = {
//   bathroom: {
//     stereo: 220,
//     signature: "",
//   },
//   cellar: {
//     mirror: 10,
//     broom: 90,
//     signature: "",
//   },
//   signature: "",
// };

// console.log(JSON.)

// Test.assertSimilar(signAll(obj, name), {
//   kitchen: {
//     painting: 100,
//     piano: 1000,
//     signature: name,
//   },
//   signature: name,
// });
// Test.assertSimilar(signAll(obj2, name), {
//   bathroom: {
//     stereo: 220,
//     signature: name,
//   },
//   cellar: {
//     mirror: 10,
//     broom: 90,
//     signature: name,
//   },
//   signature: name,
// });


//
// const signAll = (obj, name) => {
//   for (const o in obj) obj[o].signature = name;
//   obj.signature = name;
//   return obj;
// };