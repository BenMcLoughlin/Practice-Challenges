const Test = require("../tests/test");
/*
Phone Letter Combinations
5 Oct 2020
https://edabit.com/challenge/npLurjMJofmFRCJwx

Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. 
A mapping of digit to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.
*/


// const letterCombinations = D => [...D].reduce((R,d) => R.flatMap(e => [
// 	...',,abc,def,ghi,jkl,mno,pqrs,tuv,wxyz'.split`,`[d]
// ].map(a => e + a)), [''])

// const letterCombinations = digits => [...digits].reduce((acc,num) => acc.flatMap(e => [
//   ...',,abc,def,ghi,jkl,mno,pqrs,tuv,wxyz'.split`,`[num]
// ].map(a => e + a)), [''])

// const letterCombinations = D => [...D].reduce((R,d) => R.flatMap(e => [
// 	...',,abc,def,ghi,jkl,mno,pqrs,tuv,wxyz'.split`,`[d]
// ].map(a => e + a)), [''])

//const letterCombinations = D => [...D].reduce((R,d) => R.flatMap(e => [...',,abc,def,ghi,jkl,mno,pqrs,tuv,wxyz'.split`,`[d]].map(a => e + a)), [''])


// Test.assertSimilar(letterCombinations("23"), ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"], "")
// Test.assertSimilar(letterCombinations("532"), ["jda", "jdb", "jdc", "jea", "jeb", "jec", "jfa", "jfb", "jfc", "kda", "kdb", "kdc", "kea", "keb", "kec", "kfa", "kfb", "kfc", "lda", "ldb", "ldc", "lea", "leb", "lec", "lfa", "lfb", "lfc"], "")
// Test.assertSimilar(letterCombinations("943"), ["wgd", "wge", "wgf", "whd", "whe", "whf", "wid", "wie", "wif", "xgd", "xge", "xgf", "xhd", "xhe", "xhf", "xid", "xie", "xif", "ygd", "yge", "ygf", "yhd", "yhe", "yhf", "yid", "yie", "yif", "zgd", "zge", "zgf", "zhd", "zhe", "zhf", "zid", "zie", "zif"], "")
// Test.assertSimilar(letterCombinations("372"), ["dpa", "dpb", "dpc", "dqa", "dqb", "dqc", "dra", "drb", "drc", "dsa", "dsb", "dsc", "epa", "epb", "epc", "eqa", "eqb", "eqc", "era", "erb", "erc", "esa", "esb", "esc", "fpa", "fpb", "fpc", "fqa", "fqb", "fqc", "fra", "frb", "frc", "fsa", "fsb", "fsc"], "")


//MY FIRST ATTEMPT, NOT SUCCESSFUl
// const letterCombinations = (number) => {
//   const array = [];

//   const strings = number.split("").map((d) => map[d].split(""));

//   console.log("strings:", strings);

//   strings.map((letters, i) => {
//     const nextLetters = strings[i + 1];
//     console.log("nextLetters:", nextLetters);
//     if (nextLetters) {
//       letters.map((currentLetter) => nextLetters.map((nextLetter) => array.push(currentLetter + nextLetter)));
//     }
//   });
//   return array;
// };

//SECOND ATTEMPT - CHEATED AND WATCHED YOUTUBE

// const map = {
//   1: [],
//   2: ['a','b','c'],
//   3: ['d','e','f'],
//   4: ['g','h','i'],
//   5: ['j','k','l'],
//   6: ['m','n','o'],
//   7: ['p','q','r','s'],
//   8: ['t','u','v'],
//   9: ['w','x','y','z'],
// };

// const letterCombinations = digits => {

//   const result = []

//   const add = (i, letters) => {
//        if(i > digits.length -1 ) {
//          result.push(letters)
//          return 
//        }
//        const digit = digits[i]

//        for (let letter of map[digit]) {
//          add(i + 1, letters + letter)
//        }
       
//   }

//     add(0, "")

//   return result
// }

//WINNER by "Xalien95"

// const letterCombinations = D => [...D].reduce((R,d) => R.flatMap(e => [
// 	...',,abc,def,ghi,jkl,mno,pqrs,tuv,wxyz'.split`,`[d]
// ].map(a => e + a)), [''])

//SECOND PLACE by "C"


// const LETTERS = ["abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"];

// function letterCombinations(digits, pre = "") {
//   if (digits === "") return pre;
//   const combs = [];
//   for (let letter of LETTERS[digits[0] - 2])
// 		combs.push(letterCombinations(digits.slice(1), pre + letter));
//   return combs.flat();
// }


