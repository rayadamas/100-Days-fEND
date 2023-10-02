/*
 * Programming Quiz: Even or Odd (3-2)
 *
 * Write an if...else statement that prints `even` if the 
 * number is even and prints `odd` if the number is odd.
 *
 * Note - make sure to print only the string "even" or the string "odd"
 */

/*
 * QUIZ REQUIREMENTS
 * 1. Your code should have a variable `number`, and include an `if...else` statement
 * 2. Your conditional should use a strict comparison (`===` or `!==`), and use the modulo ( `%` ) operator
 * 3. Your code should produce the expected output - "even" or "odd" using console.log() method
 */
 
 
// change the value of `number` to test your if...else statement
var number = 2;

if (number % 2 === 0) {
    console.log("even");
} else {
    console.log("odd");
}

// Quiz: Musical Groups
// Write a series of conditional statements that:
// prints "not a group" if musicians is less than or equal to 0
// prints "solo" if musicians is equal to 1
// prints "duet" if musicians is equal to 2
// prints "trio" if musicians is equal to 3
// prints "quartet" if musicians is equal to 4
// prints "this is a large group" if musicians is greater than 4
// TIP: Make sure to test your code with different values. For example,
// If musicians equals 3, then trio should be printed to the console.
// If musicians equals 20, then this is a large group should be printed to the console.
// If musicians equals -1, then not a group should be printed to the console.
// change the value of `musicians` to test your conditional statements
var musicians = 5;
if (musicians <= 0) {
 console.log("not a group");
} else if (musicians === 1) {
 console.log("solo");
} else if (musicians === 2) {
 console.log("duet");
}
else if (musicians === 3) {
 console.log("trio");
}
else if (musicians === 4) {
 console.log("quartet");
}
else if (musicians > 4) {
 console.log("this is a large group");
}

(3 != 6 % 3) && !(24 > 45) && (!false); // true
// explain why this expression returns true
// 3 != 6 % 3 // true
// !(24 > 45) // true
// (!false) // true
// true && true && true // true
//
