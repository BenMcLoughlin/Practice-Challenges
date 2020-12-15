const Test = require("../tests/test");
//count letters in an array


const countLetters = (a, l) => a.flat().filter(d => d === l).length


Test.assertEquals(countLetters(['a', 1, 'b', ['a', 'a'], 'v', '4'], 'a'), 3);