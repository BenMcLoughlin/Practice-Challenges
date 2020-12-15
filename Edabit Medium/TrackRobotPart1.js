const Test = require("../tests/test")
// Track the Robot (Part 1)
//Oct 15 2020
//https://edabit.com/challenge/t3iJRARc9K9x9AAdr
// A robot has been given a list of movement instructions. Each instruction is either left, right, up or down, 
// followed by a distance to move. The robot starts at [0, 0]. You want to calculate where the robot will end up and return its final position as an array.

// To illustrate, if the robot is given the following instructions:

// ["right 10", "up 50", "left 30", "down 10"]
// It will end up 20 left and 40 up from where it started, so we return [-20, 40].

// Examples
// trackRobot(["right 10", "up 50", "left 30", "down 10"]) ➞ [-20, 40]

// trackRobot([]) ➞ [0, 0]
// // If there are no instructions, the robot doesn't move.

// trackRobot(["right 100", "right 100", "up 500", "up 10000"]) ➞ [200, 10500]
// Notes
// The only instructions given will be left, right, up or down.
// The distance after the instruction is always a positive whole number.



Test.assertSimilar(trackRobot(["right 10", "up 50", "left 30", "down 10"]),[-20,40])
Test.assertSimilar(trackRobot([]),[0,0])
Test.assertSimilar(trackRobot(["left 10", "left 100", "left 1000", "left 10000"]),[-11110,0])
Test.assertSimilar(trackRobot(["right 100", "right 100", "up 500", "up 10000"]),[200,10500])
Test.assertSimilar(trackRobot(["left 10", "right 10", "down 10", "up 10"]),[ 0, 0 ])


//My Answer
// const trackRobot = arr => {

//   const m= ['right', 'left', 'up', 'down'].map(str => arr.reduce(((a,n) => n.includes(str) ? a + +n.match(/\d+/g) : a),0))
//   return [m[0]-m[1],m[2]-m[3],]
 
//  }
 

//MB Bentleys Answer
function trackRobot(instructions) {
	let pos = [0, 0];
	for (let i of instructions) {
		[d, a] = i.split(' ');
		pos[+['up','down'].includes(d)] += +a * (['left','down'].includes(d) ? -1 : 1);
	}
	return pos;
}