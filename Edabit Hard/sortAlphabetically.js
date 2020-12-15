const Test = require("../tests/test");
/*
Sort Authors Last Names Alphabetically
Today you volunteered as a librarian. You were given an array of objects, each one containing different book information. You need to sort the objects in alphabetical order of the author's last name.

Examples
sortByLastName([
  { name: "Harry Potter", rating: "8+", author: "Joanne Rowling" },
  { name: "Warcross", rating: "13+", author: "Marie Lu" },
  { name: "The Hunger Games", rating: "12+", author: "Suzanne Collins" },
]) ➞ [
  { name: "The Hunger Games", rating: "12+", author: "Suzanne Collins" },
  { name: "Warcross", rating: "13+", author: "Marie Lu" },
  { name: "Harry Potter", rating: "8+", author: "Joanne Rowling" },
]
Notes
There will always be a name, rating, and author property on each object.
The array will never be empty.
The author property will always feature only a first and last name.
*/

//const sortByLastName = (books) => books.map((a, b) => a.author.split(" ")[1][0]);

function sortByLastNameww(b) {
  return b.sort((a, b) => (a.author.split(" ")[1][0] >= b.author.split(" ")[1][0] ? 1 : -1));
}
const sortByLastName = (books) => books.sort((a, b) => a.author.split(" ")[1].localeCompare(b.author.split(" ")[1]));
const sortByLastName3 = (arr) => arr.sort((a, b) => a.author.split(" ")[1].localeCompare(b.author.split(" ")[1]));


const tests = [
  [
    [
      { name: "Harry Potter", rating: "8+", author: "Joanne Rowling" },
      { name: "Warcross", rating: "13+", author: "Marie Lu" },
      { name: "The Hunger Games", rating: "12+", author: "Suzanne Collins" },
    ],
    [
      { name: "The Hunger Games", rating: "12+", author: "Suzanne Collins" },
      { name: "Warcross", rating: "13+", author: "Marie Lu" },
      { name: "Harry Potter", rating: "8+", author: "Joanne Rowling" },
    ],
  ],
  [
    [
      { name: "The Night Gardner", rating: "10+", author: "Jonathan Auxier" },
      { name: "Harry Potter", rating: "8+", author: "Joanne Rowling" },
    ],
    [
      { name: "The Night Gardner", rating: "10+", author: "Jonathan Auxier" },
      { name: "Harry Potter", rating: "8+", author: "Joanne Rowling" },
    ],
  ],
  [
    [
      { name: "The Selection", rating: "13+", author: "Kiera Cass" },
      { name: "Warcross", rating: "13+", author: "Marie Lu" },
      {
        name: "The School for Good and Evil",
        rating: "11+",
        author: "Soman Chainani",
      },
      { name: "The Night Gardner", rating: "10+", author: "Jonathan Auxier" },
    ],
    [
      { name: "The Night Gardner", rating: "10+", author: "Jonathan Auxier" },
      { name: "The Selection", rating: "13+", author: "Kiera Cass" },
      {
        name: "The School for Good and Evil",
        rating: "11+",
        author: "Soman Chainani",
      },
      { name: "Warcross", rating: "13+", author: "Marie Lu" },
    ],
  ],
];
tests.forEach(([actual, expected]) => Test.assertSimilar(sortByLastName(actual), expected));
