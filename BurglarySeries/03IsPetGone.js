const Test = require("../tests/test");
// Burglary Series (03): Is It Gone?
// Your spouse is not concerned with the loss of material possessions but rather with his/her favorite pet. Is it gone?!

// Given an object of the stolen items and a string in lower cases representing the name of the pet (e.g. "rambo"), return:

// "Rambo is gone..." if the name is on the list.
// "Rambo is here!" if the name is not on the list.
// Note that the first letter of the name in the return statement is capitalized.

const findIt = (obj, n)  => {
  const pet = n.charAt(0).toUpperCase() + n.slice(1)
  return Object.keys(obj).find(d => d === n) ? `${pet} is gone...` : `${pet} is here!`
}

Test.assertEquals(findIt({}, "rambo"),"Rambo is here!")
Test.assertEquals(findIt({}, "heman"),"Heman is here!")

Test.assertEquals(findIt({
  tv: 30,
  stereo: 50,
}, "rocky"),"Rocky is here!")

Test.assertEquals(findIt({
  tv: 30,
  stereo: 50,
}, "spiderman"),"Spiderman is here!")

Test.assertEquals(findIt({
  tv: 30,
  stereo: 50,
	julius: 100,											 
}, "julius"),"Julius is gone...")

Test.assertEquals(findIt({
  tv: 30,
  stereo: 50,
	batman: 200,											 
}, "batman"),"Batman is gone...")

//Mine
// const findIt = (obj, n)  => {
//   const pet = n.charAt(0).toUpperCase() + n.slice(1)
//   return Object.keys(obj).find(d => d === n) ? `${pet} is gone...` : `${pet} is here!`
// }


const findIt = (obj, name) => {
	const displayName = name[0].toUpperCase() + name.slice(1);
	return `${displayName} is ${(name in obj) ? 'gone...' : 'here!'}`;
};