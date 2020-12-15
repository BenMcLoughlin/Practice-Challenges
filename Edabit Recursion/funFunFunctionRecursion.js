//from video https://www.youtube.com/watch?v=k7-N8R0-KY4&list=PL0zVEGEvSaeEd9hlmCXrk5yUyqUag-n84&index=7&ab_channel=FunFunFunction
const Test = require("../tests/test");

const catagories = [
  { id: "animals", parent: "base" },
  { id: "mammels", parent: "animals" },
  { id: "cats", parent: "mammels" },
  { id: "dogs", parent: "mammels" },
  { id: "chiuaua", parent: "dogs" },
  { id: "labrador", parent: "dogs" },
  { id: "persian", parent: "cats" },
  { id: "siamese", parent: "cats" },
];

const target = {
  animals: {
    mammels: {
      cats: {
        persian: {},
        siamese: {},
      },
      dogs: {
        chiuaua: {},
        labrador: {},
      },
    },
  },
};

// const makeTree = (catageories, parent = "base") => {
//   let tree = {};
//   catagories.filter((d) => d.parent === parent).forEach((c) => (tree[c.id] = makeTree(catagories, c.id)));

//   return tree;
// };

// const makeTre2e = (catagories, parent = "base") => {
//   let node = {};

//   catagories.filter((c) => c.parent === parent).forEach((c) => (node[c.id] = makeTree(catagories, c.id)));

//   return node;
// };

console.log(JSON.stringify(makeTree(catagories), null, 4));

Test.assertSimilar(makeTree(catagories), target);
