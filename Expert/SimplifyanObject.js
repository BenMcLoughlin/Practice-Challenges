const Test = require("../tests/test");
/*
You were tasked with making a list of every makeup item your local pharmacy had in stock. You created a very long array of each item, with each element having both a name and brand property. Now you're looking to simplify the list by combining duplicate items, and adding a count property to everything.

Example
simplifyList([
  { brand: "NARS", name: "Cosmetics Voyageur Pallete" },
  { brand: "NARS", name: "Cosmetics Voyageur Pallete" },
  { brand: "Urban Decay", name: "Naked Honey Pallete" },
  { brand: "Stila", name: "Stay All Day Liquid Lipstick" },
  { brand: "Stila", name: "Stay All Day Liquid Lipstick" },
  { brand: "Stila", name: "Stay All Day Liquid Lipstick" }
]) ➞ [
  { brand: "NARS", name: "Cosmetics Voyageur Pallete", count: 2 },
  { brand: "Urban Decay", name: "Naked Honey Pallete", count: 1 },
  { brand: "Stila", name: "Stay All Day Liquid Lipstick", count: 3 }
]
Notes
There will always be one or more element in the given array.
Each element will always have a brand and name property.
All duplicates will be displayed in order.
*/


const simplifyList1 = (list) =>
  list.reduce((a, v) => {
    let f = a.find((i) => v.brand === i.brand && v.name === i.name);
    return f ? f.count++ : a.push({ ...v, count: 1 }), a;
  }, []);

const simplifyList3 = arr => arr.reduce((a,n) => {
  let f = a.find((i) => i.brand === n.brand )
  return f ? f.count++ : a.push({...n, count: 1}), a
}, [])

const simplifyList = arr => arr.reduce((a,n) => {
  let value = (a.find(d => d.name === n.name))
  if(value) {return value.count++, a}
  a.push({...n, count: 1})
  return a
}, [])


const tests = [
  [
    [
      { brand: "NARS", name: "Cosmetics Voyageur Pallete" },
      { brand: "NARS", name: "Cosmetics Voyageur Pallete" },
      { brand: "Urban Decay", name: "Naked Honey Pallete" },
      { brand: "Stila", name: "Stay All Day Liquid Lipstick" },
      { brand: "Stila", name: "Stay All Day Liquid Lipstick" },
      { brand: "Stila", name: "Stay All Day Liquid Lipstick" },
    ],
    [
      { brand: "NARS", name: "Cosmetics Voyageur Pallete", count: 2 },
      { brand: "Urban Decay", name: "Naked Honey Pallete", count: 1 },
      { brand: "Stila", name: "Stay All Day Liquid Lipstick", count: 3 },
    ],
  ],
  [[{ brand: "NYX", name: "Soft Matte Lip Cream" }], [{ brand: "NYX", name: "Soft Matte Lip Cream", count: 1 }]],
  [
    [
      { brand: "e.l.f", name: "Flawless Finish Foundation" },
      { brand: "e.l.f", name: "Flawless Finish Foundation" },
      { brand: "e.l.f", name: "Flawless Finish Foundation" },
      { brand: "e.l.f", name: "Flawless Finish Foundation" },
      { brand: "Giorgio Armani", name: "Luminous Silk Foundation" },
      { brand: "Giorgio Armani", name: "Luminous Silk Foundation" },
      { brand: "Marc Jacobs", name: "Beauty O!" },
      { brand: "Hourglass", name: "Ambient Lighting Bronzer" },
      { brand: "Hourglass", name: "Ambient Lighting Bronzer" },
      { brand: "Hourglass", name: "Ambient Lighting Bronzer" },
      { brand: "EltaMD", name: "Foaming Facial Cleanser" },
    ],
    [
      { brand: "e.l.f", name: "Flawless Finish Foundation", count: 4 },
      { brand: "Giorgio Armani", name: "Luminous Silk Foundation", count: 2 },
      { brand: "Marc Jacobs", name: "Beauty O!", count: 1 },
      { brand: "Hourglass", name: "Ambient Lighting Bronzer", count: 3 },
      { brand: "EltaMD", name: "Foaming Facial Cleanser", count: 1 },
    ],
  ],
];

tests.forEach(([actual, expected]) => Test.assertSimilar(simplifyList(actual), expected));