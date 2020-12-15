const Test = require("../tests/test");
/*
Nth Fibonacci Number
Create a function to return the Nth number in the Fibonacci sequence as a string.

Examples
fibonacci(10) ➞ "55"

fibonacci(20) ➞ "6765"

fibonacci(30) ➞ "832040"

fibonacci(40) ➞ "102334155"

fibonacci(50) ➞ "12586269025"

fibonacci(60) ➞ "1548008755920"
Notes
Your function is expected to calculate numbers greater
 than the 64-bit unsigned integer limit where n can be as large as but not greater than 200.
*/

const range = (start, end) => {
  const length = end - start;
  return Array.from({ length }, (_, i) => start + i);
};

console.log(range(2000, 2020))
const fibonacci = n => {
  const numbers = [...Array(n).keys()]
  
  return numbers.map((d,i, a) => {
  return i === 0 ? 0 :
         i === 1 ? 1 :
         i === 2 ? 2 :
         (numbers[i-1] + numbers[i-2])
})
}
//Test.assertEquals(fibonacci(11), "55")
// Test.assertEquals(fibonacci(20), "6765")
// Test.assertEquals(fibonacci(30), "832040")
// Test.assertEquals(fibonacci(40), "102334155")
// Test.assertEquals(fibonacci(50), "12586269025")
// Test.assertEquals(fibonacci(60), "1548008755920")
// Test.assertEquals(fibonacci(70), "190392490709135")
// Test.assertEquals(fibonacci(80), "23416728348467685")
// Test.assertEquals(fibonacci(90), "2880067194370816120")
// Test.assertEquals(fibonacci(100), "354224848179261915075")
// Test.assertEquals(fibonacci(110), "43566776258854844738105")
// Test.assertEquals(fibonacci(120), "5358359254990966640871840")
// Test.assertEquals(fibonacci(130), "659034621587630041982498215")
// Test.assertEquals(fibonacci(140), "81055900096023504197206408605")
// Test.assertEquals(fibonacci(150), "9969216677189303386214405760200")
// Test.assertEquals(fibonacci(160), "1226132595394188293000174702095995")
// Test.assertEquals(fibonacci(170), "150804340016807970735635273952047185")
// Test.assertEquals(fibonacci(180), "18547707689471986212190138521399707760")
// Test.assertEquals(fibonacci(190), "2281217241465037496128651402858212007295")
// Test.assertEquals(fibonacci(200), "280571172992510140037611932413038677189525")