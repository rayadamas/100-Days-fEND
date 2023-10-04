# [10/2/2023, 11:58-13:18]
- **Today's Progress**: working on conditionals. 
- **Thoughts:** 
---
## If...else statements
- **If...else statements** allow you to execute certain pieces of code based on a condition, or set of conditions, being met.
```
if (/ *this expression is true* /) {
  // run this code
} else {
  // run this code
}
```

```
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

// Murder Mystery
/*
Here's what we know! In this murder mystery there are:

- **four rooms**: the ballroom, gallery, billiards room, and dining room,
- **four weapons**: poison, a trophy, a pool stick, and a knife,
- and **four suspects**: Mr. Parkes, Ms. Van Cleve, Mrs. Sparr, and Mr. Kalehoff.

We also know that each weapon _corresponds_ to a particular room, so...

- the `poison` belongs to the `ballroom`,
- the `trophy` belongs to the `gallery`,
- the `pool stick` belongs to the `billiards room`,
- and the `knife` belongs to the `dining room`.

And we know that each suspect was located in a specific room at the time of the murder.

- `Mr. Parkes` was located in the `dining room`.
- `Ms. Van Cleve` was located in the `gallery`.
- `Mrs. Sparr` was located in the `billiards room`.
- `Mr. Kalehoff` was located in the `ballroom`.

To help solve this mystery, write a combination of conditional statements that:

1. sets the value of `weapon` based on the `room` and
2. sets the value of `solved` to `true` if the value of `room` matches the `suspect`'s room

Afterwards, use this template to print a message to the console if the mystery was solved:

`__________ did it in the __________ with the __________!`

*/

var room = "dining room";
var suspect = "Mr. Kalehoff";

var weapon = "";
var solved = false;

if (room === "ballroom" && suspect === "Mr. Kalehoff") {
    weapon = "poison";
    solved = true;
} else if (room === "billiards room" && suspect === "Mrs. Sparr") {
    weapon = "pool stick";
    solved = true;
} else if (room === "gallery" && suspect === "Ms. Van Cleve") {
    weapon = "trophy";
    solved = true;
} else if (room === "dining room" && suspect === "Mr. Parkes") {
    weapon = "knife";
    solved = true;
}

if (solved) {
    console.log(suspect + " did it in the " + room + " with the " + weapon + "!");
}
```

==end of pomo==































