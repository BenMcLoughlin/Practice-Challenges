// Recursion: Shift Right by Addition
// The shift right operation is similar to floor division by powers of two. This can also be achieved with repetitive subtraction, thus, the process can be done recursively.
//9 Oct 2020 
//https://edabit.com/challenge/QMH7HFhjzTxapsoDf
// Sample calculation using the shift right operator (>>):

// 80 >> 3 = floor(80/2^3) = floor(80/8) = 10
// -24 >> 2 = floor(-24/2^2) = floor(-24/4) = -6
// -5 >> 1 = floor(-5/2^1) = floor(-5/2) = -3
// Create a recursive function that mimics the shift right operator and returns the result from the two given integers.

// Examples
// shiftRight(80, 3) ➞ 10

// shiftRight(-24, 2) ➞ -6

// shiftRight(-5, 1) ➞ -3

// shiftRight(4666, 6) ➞ 72

// shiftRight(3777, 6) ➞ 59

// shiftRight(-512, 10) ➞ -1
// Notes
// There will be no negative values for the second parameter y.
// You're expected to solve this challenge using a recursive approach.
// You can read on more topics about recursion (see Resources tab) if you aren't familiar with it yet or haven't fully understood the concept behind it before taking up this challenge.
// If you think recursion is fun, you can find a collection of those challenges here.