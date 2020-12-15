const Test = require("../tests/test");
/*
Primal Strength
In number theory, a prime number is balanced if it is equidistant from the prime before it and the prime after it.
 It is therefore the arithmetic mean of those primes. For example, 5 is a balanced prime, two units away from 3, and two
  from 7. 211 is 12 units away from the previous prime, 199, and 12 away from the next, 223.

A prime that is greater than the arithmetic mean of the primes before and after it is called a strong prime. 
It is closer to the prime after it than the one before it. For example, the strong prime 17 is closer to 19 than it is to 13 (see note at bottom).

A prime that is lesser than the arithmetic mean of the primes before and after it is called weak prime. 
For example, 19.

Create a function that takes a prime number as input and returns "Strong" if it is a strong prime, 
"Weak" if it is a weak prime, or "Balanced".

Examples
primalStrength(211) ➞ "Balanced"

primalStrength(17) ➞ "Strong"

primalStrength(19) ➞ "Weak"
Notes
This definition of strong primes is not to be confused with strong primes as defined in cryptography, 
which are much more complicated than this. You are all welcome to make a challenge based on cryptographically strong primes.
*/

// const isPrime = (n) => {
//   for (let i = 2; i < n; i++) {
//     console.log(i)
//     if (n % i == 0) return 0;
//   }
//   return n >= 2;
// };

// const isPrime = (n) => ![2, 3].map((d) => n % d === 0).includes(true) || n === 3 ? true : 0

function primalStrength1(n) {
  let res = ["Balanced", "Strong", "Weak"];
  const isPrime = (n) => {
    for (let i = 2; i < n; i++) {
      if (n % i == 0) return 0;
    }
    return n >= 2;
  };
  for (let i = 1; i <= n; i++) {
    if (isPrime(n + i) && isPrime(n - i)) return res[0];
    if (isPrime(n + i)) return res[1];
    if (isPrime(n - i)) return res[2];
  }
}

const isPrime1 = (n) => {
  for (let i = 2; i < n; i++) {
    if (n % i == 0) return 0;
  }
  return n >= 2;
};



const isPrime2 = (n) => (![2, 3, 5].map((d) => n % d === 0).includes(true) || n === 3 ? true : 0);

const myPrimArray = () => {
  let array = [];
  for (let i = 2; i < 100; i++) {
    if (JSON.stringify(isPrime1(i)) !== JSON.stringify(isPrime2(i))) {
      array.push(i)
    }
    // array.push({
    //   isPrime1: isPrime1(i),
    //   isPrime2: isPrime2(i),
    //   sameSame: JSON.stringify(isPrime1(i)) === JSON.stringify(isPrime2(i)),
    // });
    //array.push([i, JSON.stringify(isPrime1(i)) === JSON.stringify(isPrime2(i))]);
  }
  return array;
};

console.log('Math.sqrt(n):', Math.sqrt(25))

function primalStrength2(n) {
  let res = ["Balanced", "Strong", "Weak"];

  const isPrime = (n) => (![2, 3].map((d) => n % d === 0).includes(true) || n === 3 ? true : 0);

  for (let i = 1; i <= n; i++) {
    console.log(n + i);
    console.log("isPrime(n+i):", isPrime2(n + i));

    if (isPrime(n + i) && isPrime(n - i)) return res[0];
    if (isPrime(n + i)) return res[1];
    if (isPrime(n - i)) return res[2];
  }
}
// }

//   }

//   //   console.log(isPrime(2970));
//   //   console.log(isPrime2(2970));
// // function primalStrength(n) {
// //   let res = ["Balanced", "Strong", "Weak"];

// //   const isPrime = (n) => (![2, 3].map((d) => n % d === 0).includes(true) || n === 3 ? true : 0);

// //   for (let i = 1; i <= n; i++) {
// //     console.log('(isPrime(n + i)):', (isPRrime(n + i)))
// //     console.log('(isPrime(n + i)):', (isPrime(n - i)))
// //     if (isPrime(n + i) && isPrime(n - i)) return res[0];
// //     if (isPrime(n + i)) return res[1];
// //     if (isPrime(n - i)) return res[2];
// //   }
// // }

//Test.assertEquals(primalStrength(5), "Balanced");
//Test.assertEquals(primalStrength(211), "Balanced");
// Test.assertEquals(primalStrength(593), "Balanced");
// Test.assertEquals(primalStrength(1693), "Strong");
// Test.assertEquals(primalStrength(599), "Strong");
// Test.assertEquals(primalStrength(2203), "Strong");
// Test.assertEquals(primalStrength(19), "Weak");
// Test.assertEquals(primalStrength(2971), "Weak");
// Test.assertEquals(primalStrength(1493), "Weak");

// const primalStrength = n => {
// const primeNumbers = []
// const primalStrength = (n, i = 2) => {
//   const isPrime = (d) => {while (i < 5) d % i === 0 ? false : true}

//   let res = ["Balanced", "Strong", "Weak"];

//   while (i < n) {
//     if (isPrime(n + i) && isPrime(n - i)) return res[0];
//     if (isPrime(n + i)) return res[1];
//     if (isPrime(n - i)) return res[2];
//   }

//   //   for (var i = 12; i < n; i++) {
//   //     isPrime(n - i) && isPrime(n + 1) ? 0 : isPrime(n + i) ? 1 : isPrime(n - i) ? 2 : null;
//   //   }
// };

// function primalStrength1(n) {
//   let res = ["Balanced", "Strong", "Weak"];
//   const isPrime = (n) => {
//     for (let i = 2; i < n; i++) {
//       if (n % i == 0) return 0;
//     }
//     return n >= 2;
//   };
//   for (let i = 1; i <= n; i++) {
//     if (isPrime(n + i) && isPrime(n - i)) return res[0];
//     if (isPrime(n + i)) return res[1];
//     if (isPrime(n - i)) return res[2];
//   }
// }

// // function primalStrength(n) {

// //      const primeNumbers = [2]
// //      for (let i = 2; i < n; i++) {
// //          n % i === 0 ? null : primeNumbers.push(n)
// //      }
// //      return primeNumbers
// // }

// // const isPrime = (n) =>
// //   ![...Array(n).keys()]
// //     .slice(2)
// //     .map((i) => !(n % i))
// //     .includes(true) && ![0, 1].includes(n);

// Test.assertEquals(primalStrength(5), "Balanced");
// Test.assertEquals(primalStrength(211), "Balanced");
// Test.assertEquals(primalStrength(593), "Balanced");
// Test.assertEquals(primalStrength(1693), "Strong");
// Test.assertEquals(primalStrength(599), "Strong");
// Test.assertEquals(primalStrength(2203), "Strong");
// Test.assertEquals(primalStrength(19), "Weak");
// Test.assertEquals(primalStrength(2971), "Weak");
// Test.assertEquals(primalStrength(1493), "Weak");

//Adamqwery

// function primalStrength_Adamqwery(n) {
// 	let res=["Balanced", "Strong", "Weak"]
// 	const isPrime = n => {
// 		for (let i = 2; i < n; i++) {
// 			if (n % i == 0) return 0;}
// 			return n >= 2;}
// 	for(let i=1;i<=n;i++){
// 		if(isPrime(n+i) && isPrime(n-i)) return res[0]
// 		if(isPrime(n+i)) return res[1]
// 		if(isPrime(n-i)) return res[2]
// 	}
// }
