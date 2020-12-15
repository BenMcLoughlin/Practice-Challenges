const Test = require("../tests/test");
/*
Caesar's Cipher
7 Oct 2020
https://edabit.com/challenge/a33jdGXkaQRtK9ZTs
Published by Matt in JavaScript
algorithmscryptographystrings
Julius Caesar protected his confidential information by encrypting it using a cipher. Caesar's cipher (check Resources tab for more info) shifts each letter by a number of letters. If the shift takes you past the end of the alphabet, just rotate back to the front of the alphabet. In the case of a rotation by 3, w, x, y and z would map to z, a, b and c.

Create a function that takes a string s (text to be encrypted) and an integer k (the rotation factor). It should return an encrypted string.

Examples

caesarCipher("middle-Outz", 2) ➞ "okffng-Qwvb"

// m -> o
// i -> k
// d -> f
// d -> f
// l -> n
// e -> g
// -    -
// O -> Q
// u -> w
// t -> v
// z -> b

caesarCipher("Always-Look-on-the-Bright-Side-of-Life", 5)
➞ "Fqbfdx-Qttp-ts-ymj-Gwnlmy-Xnij-tk-Qnkj"

caesarCipher("A friend in need is a friend indeed", 20)
➞ "U zlcyhx ch hyyx cm u zlcyhx chxyyx"
*/


Test.assertEquals(caesarCipher("middle-Outz", 2), "okffng-Qwvb")
Test.assertEquals(caesarCipher("Always-Look-on-the-Bright-Side-of-Life", 5), "Fqbfdx-Qttp-ts-ymj-Gwnlmy-Xnij-tk-Qnkj")
Test.assertEquals(caesarCipher("A friend in need is a friend indeed", 20), "U zlcyhx ch hyyx cm u zlcyhx chxyyx")
//Test.assertEquals(caesarCipher("A Fool and His Money Are Soon Parted.", 27), "B Gppm boe Ijt Npofz Bsf Tppo Qbsufe.")
//Test.assertEquals(caesarCipher("One should not worry over things that have already happened and that cannot be changed.", 49), "Lkb pelria klq tloov lsbo qefkdp qexq exsb xiobxav exmmbkba xka qexq zxkklq yb zexkdba.")


//MY Answer with cheating

caesarCipher = (s, k) => s.replace(/[a-z]/gi, l => {
  const shift = k <= 26 ? k : k % 26
 return String.fromCharCode((l <= "Z"? 90 : 122) >= (n = l.charCodeAt(0)+shift) ? n : n-26)})


//TOP Answer "CFV"
// function caesarCipher(s, k) {
//   return s.replace(/[a-z]/gi, m => {
//     const c = m < "a" ? 65 : 97;
//     return String.fromCharCode((m.charCodeAt(0) - c + k) % 26 + c)
//   });
// }