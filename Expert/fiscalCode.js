/*
The Fiscal Code

Each person in Italy has an unique identifying ID code issued by the national tax office after the birth registration: the Fiscal Code (Codice Fiscale). Check the Resources tab for more info on this.

Given an object containing the personal data of a person (name, surname, gender and date of birth) return the 11 code characters as a string following these steps:

Generate 3 capital letters from the surname, if it has:

At least 3 consonants then the first three consonants are used. (Newman -> NWM).
Less than 3 consonants then vowels will replace missing characters in the same order they appear (Fox -> FXO | Hope -> HPO).
Less than three letters then "X" will take the third slot after the consonant and the vowel (Yu -> YUX).
Generate 3 capital letters from the name, if it has:

Exactly 3 consonants then consonants are used in the order they appear (Matt -> MTT).
More than 3 consonants then first, third and fourth consonant are used (Samantha -> SNT | Thomas -> TMS).
Less than 3 consonants then vowels will replace missing characters in the same order they appear (Bob -> BBO | Paula -> PLA).
Less than three letters then "X" will take the the third slot after the consonant and the vowel (Al -> LAX).
Generate 2 numbers, 1 letter and 2 numbers from date of birth and gender:

Take the last two digits of the year of birth (1985 -> 85).
Generate a letter corresponding to the month of birth (January -> A | December -> T) using the table for conversion included in the code.
For males take the day of birth adding one zero at the start if is less than 10 (any 9th day -> 09 | any 20th day -> 20).
For females take the day of birth and sum 40 to it (any 9th day -> 49 | any 20th day -> 60).
Examples
fiscalCode({
  name: "Matt",
  surname: "Edabit",
  gender: "M",
  dob: "1/1/1900"
}) ➞ "DBTMTT00A01"

fiscalCode({
  name: "Helen",
  surname: "Yu",
  gender: "F",
  dob: "1/12/1950"
}) ➞ "YUXHLN50T41"

fiscalCode({
  name: "Mickey",
  surname: "Mouse",
  gender: "M",
  dob: "16/1/1928"
}) ➞ "MSOMKY28A16"
Notes
Code letters must be uppercase.
Date of birth is given in D/M/YYYY format.
The conversion table for months is already in the starting code.

*/

//My Answer - Characters with spaces 1099 - score = 194%

const months = { 1: "A", 2: "B", 3: "C", 4: "D", 5: "E", 6: "H", 7: "L", 8: "M", 9: "P", 10: "R", 11: "S", 12: "T" };

const getCapitalLetters = (name, nameType) => {
  const nameAsArray = [...("" + name.toUpperCase())]; //convert the name to an array with each letter as uppercase, using spead and ""+ string conversion syntax

  cons = []; //initialize an empty array of consonents called cons
  vowels = []; //initialize a vowels array

  //map over letters, if they are consonent put in consonent array, same for vowels
  nameAsArray.map((d) => (/[^AEIOU]+/.test(d) ? cons.push(d) : vowels.push(d)));

  //concat arrays together, add X's at end, if its too short these will show up

  if (nameType !== "surname" && cons.length > 3) {
    //if its a first name it has this special action
    cons = [...cons[0], cons[2], cons[3]]; //create new array with thenfirst, third and fourth consonants
  }
  const finalLetters = cons.concat(vowels).concat(["X", "X"]);
  return finalLetters.slice(0, 3).join("");
};

const getNumbers = (birthdate, gender) => {
  const birthdayAsArray = birthdate.split("/"); //split the string by "/" to get day, month and year in an array
  const birthMonthLetter = months[birthdayAsArray[1]]; //use the number in the array to grab it from months
  const birthYearNumber = birthdayAsArray[2].slice(2, 4); //slice last two digits from year
  const birthday = birthdayAsArray[0];
  const birthDayNumber =
    gender === "M" && birthday < 10 ? `0${birthday}` : gender === "F" ? +birthday + 40 : birthday;
  return birthYearNumber + birthMonthLetter + birthDayNumber;
};

fiscalCode = ({name, surname, gender, dob}) => getCapitalLetters(surname, 'surname') + getCapitalLetters(name, 'name') + getNumbers(dob, gender)

// console.log(fiscalCode({ name: "Brendan", surname: "Eich", gender: "M", dob: "1/12/1961" }), "CHEBND61T01", fiscalCode({ name: "Brendan", surname: "Eich", gender: "M", dob: "1/12/1961" }) === "CHEBND61T01")
// console.log(fiscalCode({ name: "Helen", surname: "Yu", gender: "F", dob: "1/12/1950" }), "YUXHLN50T41", fiscalCode({ name: "Helen", surname: "Yu", gender: "F", dob: "1/12/1950" }) === "YUXHLN50T41")

// const fiscalCode = person => {

// }

// console.log(fiscalCode({ name: "Brendan", surname: "Eich", gender: "M", dob: "1/12/1961" }), "CHEBND61T01")
// console.log(fiscalCode({ name: "Helen", surname: "Yu", gender: "F", dob: "1/12/1950" }), "CPNLAX99A17")
// console.log(fiscalCode({ name: "Al", surname: "Capone", gender: "M", dob: "17/1/1899" }), "CPNLAX99A17")
// console.log(fiscalCode({ name: "Mickey", surname: "Mouse", gender: "M", dob: "16/1/1928" }), "MSOMKY28A16")
// console.log(fiscalCode({ name: "Marie", surname: "Curie", gender: "F", dob: "7/11/1867" }), "CRUMRA67S47")

//MB BEntlrys answer

function fiscalCode(person) { //characters with spaces 565
  const months = " ABCDEHLMPRST";
  const getV = (s) => s.toUpperCase().replace(/[^AEIOU]/g, "");
  const getC = (s) => s.toUpperCase().replace(/[AEIOU]/g, "");
  const code = (s) => (getC(s) + getV(s) + "XXX").slice(0, 3);
  const [d, m, y] = person.dob.split("/");

  let sCode = code(person.surname);
  let fCon = getC(person.name);
  let fCode = fCon.length > 3 ? fCon[0] + fCon[2] + fCon[3] : code(person.name);
  let nCode = y.slice(-2) + months[m] + (person.gender === "M" ? ("0" + d).slice(-2) : +d + 40);
  return sCode + fCode + nCode;
}


console.log(myFiscalCode({ name: "Brendan", surname: "Eich", gender: "M", dob: "1/12/1961" }));
console.log(myFiscalCode({ name: "Brendan", surname: "Eich", gender: "M", dob: "1/12/1961" }), "CHEBND61T01", myFiscalCode({ name: "Brendan", surname: "Eich", gender: "M", dob: "1/12/1961" }) === "CHEBND61T01")
console.log(myFiscalCode({ name: "Helen", surname: "Yu", gender: "F", dob: "1/12/1950" }), "YUXHLN50T41", myFiscalCode({ name: "Helen", surname: "Yu", gender: "F", dob: "1/12/1950" }) === "YUXHLN50T41")


/*
What I learned: 

 1. if you have an object with key value pairs and simple ascending numbers as keys, just use a string ---  const months = " ABCDEHLMPRST";
 2. you can create an array with the results of other functions and the slice it --- const code = (s) => (getConsonents(s) + getVowels(s) + "XXX").slice(0, 3);
 3. if you need 3 different values from doing a split, use destructuring to name them  --- const [d, m, y] = person.dob.split("/")
 4. if you need to grab the last two digits, use negative slice --- y.slice(-2)
 5. he just added a 0 to every one, rather than doing an if statement, --- ("0" + d).slice(-2) --- and then sliced back to grab the essential values
*/