const Test = require("../tests/test");
// Track the Robot (Part 2)
// This robot roams around a 2D grid. It starts at (0, 0) facing North. After each time it moves, the robot rotates 90 degrees clockwise. Given the amount the robot has moved each time, you have to calculate the robot's final position.

// To illustrate, if the robot is given the movements 20, 30, 10, 40 then it will move:

// 20 steps North, now at (0, 20)
// 30 steps East, now at (30, 20)
// 10 steps South. now at (30, 10)
// 40 steps West, now at (-10, 10)
// ...and will end up at coordinates (-10, 10).

// Examples
// trackRobot(20, 30, 10, 40) ➞ [-10, 10]

// trackRobot() ➞ [0, 0]
// // No movement means the robot stays at (0, 0).

// trackRobot(-10, 20, 10) ➞ [20, -20]
// // The amount to move can be negative.

const trackRobot2 = (...steps) =>
  steps.reduce(
    ([x, y], dist, i) =>
      ({
        0: [x, y + dist],
        1: [x + dist, y],
        2: [x, y - dist],
        3: [x - dist, y],
      }[i % 4]),
    [0, 0]
  );

const trackRobot4 = (...steps) =>
  steps.reduce(
    ([x, y], dist, i) =>
      ({
        0: [x, y + dist],
        1: [x + dist, y],
        2: [x, y - dist],
        3: [x - dist, y],
      }[i % 4]),
    [0, 0]
  );

function trackRobot3(...steps) {
  return steps.reduce(
    (a, c, i) => {
      a[(i + 1) % 2] += i % 4 > 1 ? -c : c;
      return a;
    },
    [0, 0]
  );
}

const trackRobot5 = (...steps) =>
  steps.reduce(
    (a, c, i) => {
      a[(i + 1) % 2] += i % 4 > 1 ? -c : c;
      return a;
    },
    [0, 0]
  );

const trackRobot = (...steps) =>
  steps.reduce(
    (a, dist, i) => {
      a[0] += i % 4 === 1 ? dist : i % 4 === 3 ? -dist : 0;
      a[1] += i % 4 === 0 ? dist : i % 4 === 2 ? -dist : 0;
      return a;
    },
    [0, 0]
  );

console.log(
  [20, 30, 10, 40].reduce(
    (a, dist, i) => {
      console.log(a);
      a[0] += i % 4 === 1 ? dist : i % 4 === 3 ? -dist : 0;
      a[1] += i % 4 === 0 ? dist : i % 4 === 2 ? -dist : 0;
      return a;
    },
    [0, 0]
  )
);

// function trackRobot(...s) {
//   const sumSteps = (arr, n) => arr.reduce(((a, num, i) => (i+4 -n) % 4 == 0 ? a + num : a),0)
//   const sumSteps = (arr, n) => arr.reduce(((a, num, i) => (i+4 -n) % 4 == 0 ? a + num : a),0)

//   const totalNorth = sumSteps(s, 0)
//   const totalSouth = sumSteps(s, 1)
//   const totalEast = sumSteps(s, 2)
//   const totalWest = sumSteps(s, 4)
// return  [sumSteps(s, 2)- sumSteps(s, 0), sumSteps(s, 3)- sumSteps(s, 1)]
// }

// const arr = [20, 30, 10, 40]

// const sumNth = (arr, n) => arr.reduce((acc, num, i) => i)

// const getNth = (arr, n) => arr.map((d,i) => (i + 4) % 4 === 0 ? d : 0)
// const getNth2 = (arr, n) => arr.map((d,i) => (i+4 -n) % 4 == 0 ? d : 0).reduce((a, num) => a + num)
// //const getNth2 = (arr, n) => arr.reduce((a,d,i) => (i+4 -n) % 4 == 0 ? a + d : a)

// console.log(getNth2(arr, 0) === sumSteps(arr, 0))
// console.log(getNth2(arr, 1) === sumSteps(arr, 1))
// console.log(getNth2(arr, 2) === sumSteps(arr, 2))
// console.log(getNth2(arr, 3) === sumSteps(arr, 3))
// console.log(getNth2(arr, 0) )
// console.log(getNth2(arr, 1) )
// console.log(getNth2(arr, 2))
// console.log(getNth2(arr, 3))
// console.log(sumSteps(arr, 0) )
// console.log(sumSteps(arr, 1) )
// console.log(sumSteps(arr, 2))
// console.log(sumSteps(arr, 3))

//Test.assertSimilar(trackRobot(1, 2, 3, 4, 5, 6, 7, 8, 9, 10), [6, 5])

Test.assertSimilar(trackRobot(20, 30, 10, 40), [-10, 10]);
Test.assertSimilar(trackRobot(10, -10, -10, 10), [-20, 20]);
Test.assertSimilar(trackRobot(), [0, 0]);
Test.assertSimilar(trackRobot(1, 2, 3, 4, 5, 6, 7, 8, 9, 10), [6, 5]);
Test.assertSimilar(trackRobot(1, 0, 2, 0, 3, 0, 4, 0, 5, 0), [0, 3]);
Test.assertSimilar(trackRobot(0, 1, 0, 2, 0, 3, 0, 4, 0, 5), [3, 0]);

//I Couldnt get it

//soilblue
// function trackRobot(...steps) {
//   var r = [0, 0];
//   for (var i in steps) {
//     var d = i % 4;
//     if (d == 0) r[1] += steps[i];
//     if (d == 1) r[0] += steps[i];
//     if (d == 2) r[1] -= steps[i];
//     if (d == 3) r[0] -= steps[i];
//   }
//   return r;
// }
