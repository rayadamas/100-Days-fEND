// JuliaJames Quiz
/*
 * QUIZ REQUIREMENTS
 * - Your code should have a variable `x` with a starting value of `1`
 * - Your code should include a `while` loop
 * - Your `while` loop should have a stop condition
 * - Your code should use a conditional statement
 * - Your code should increment `x` by `1` each time the loop executes
 * - Your code should produce the expected output
 * - Your code should not be empty
 * - BE CAREFUL ABOUT THE PUNCTUATION AND THE EXACT WORDS TO BE PRINTED.
 */

// change the value of `x` to test your code
var x = 1;

while (x <= 20) {
  if (x % 3 === 0 && x % 5 === 0) {
    console.log("JuliaJames");
  } else if (x % 3 === 0) {
    console.log("James");
  } else if (x % 5 === 0) {
    console.log("Julia");
  } else {
    console.log(x);
  }
  x++;
}

/*
 * Programming Quiz: 99 Bottles of Juice (4-2)
 *
 * Use the following `while` loop to write out the song "99 bottles of juice".
 * Log the your lyrics to the console.
 *
 * Note
 *   - Each line of the lyrics needs to be logged to the same line.
 *   - The pluralization of the word "bottle" changes from "2 bottles" to "1 bottle" to
 "0 bottles".
 */

/*
 * QUIZ REQUIREMENTS
 * - Your code should have a variable `num` with a starting value of `99`
 * - Your code should include a `while` loop
 * - Your `while` loop should have a stop condition
 * - Your code should produce the expected output, as explained above
 * - Your code should not be empty
 * - BE CAREFUL ABOUT THE PUNCTUATION AND THE EXACT WORDS TO BE PRINTED.
 */

// change the value of `num` to test your code
var num = 99;

while (num >= 1) {
  if (num === 2) {
    console.log(
      num +
        " bottles of juice on the wall! " +
        num +
        " bottles of juice! Take one down, pass it around... " +
        (num - 1) +
        " bottle of juice on the wall!"
    );
  } else if (num === 1) {
    console.log(
      num +
        " bottle of juice on the wall! " +
        num +
        " bottle of juice! Take one down, pass it around... " +
        (num - 1) +
        " bottles of juice on the wall!"
    );
  } else {
    console.log(
      num +
        " bottles of juice on the wall! " +
        num +
        " bottles of juice! Take one down, pass it around... " +
        (num - 1) +
        " bottles of juice on the wall!"
    );
  }
  num--;
}

/*
 * Programming Quiz: Countdown, Liftoff! (4-3)
 *
 * Using a while loop, print out the countdown output above.
 */

/*
 * QUIZ REQUIREMENTS
 * - Your code should include a `while` loop
 * - Your `while` loop should have a stop condition
 * - Your code should produce the expected output, as explained above
 * - Your code should not be empty
 * - BE CAREFUL ABOUT THE PUNCTUATION AND THE EXACT WORDS TO BE PRINTED.
 * Orbiter transfers from ground to internal power (T-50 seconds)
   Ground launch sequencer is go for auto sequence start (T-31 seconds)
   Activate main engine hydrogen burnoff system (T-10 seconds)
   Main engine start (T-6 seconds)
   Solid rocket booster ignition and liftoff! (T-0 seconds)
 */

// change the value of `num` to test your code
var sec = 60;

while (sec >= 0) {
  if (sec === 50) {
    console.log(
      "Orbiter transfers from ground to internal power (T-50 seconds)"
    );
  } else if (sec === 31) {
    console.log(
      "Ground launch sequencer is go for auto sequence start (T-31 seconds)"
    );
  } else if (sec === 10) {
    console.log("Activate main engine hydrogen burnoff system (T-10 seconds)");
  } else if (sec === 6) {
    console.log("Main engine start (T-6 seconds)");
  } else if (sec === 0) {
    console.log("Solid rocket booster ignition and liftoff! (T-0 seconds)");
  } else {
    console.log("T-" + sec + " seconds");
  }
  sec--;
}

// Rewrite the following while loop as a for loop:

var x = 9;
while (x >= 1) {
  console.log("hello " + x);
  x = x - 1;
}

/*
 * QUIZ REQUIREMENTS
 * - Your code should use a `for` loop
 * - Your `for` loop should specify a starting condition `x` with the value of `9`
 * - Your `for` loop should have a stop condition for the value of `x`
 * - Your `for` loop should decrement `x` each time it executes
 * - Your code should produce the expected output, as explained above
 * - Your code should not be empty
 * - BE CAREFUL ABOUT THE PUNCTUATION AND THE EXACT WORDS TO BE PRINTED.
 */

// change the value of `x` to test your code
for (var x = 9; x >= 1; x--) {
  console.log("hello " + x);
}

// Changing the loop to a for loop
var x = 9;
while (x >= 1) {
  console.log("hello " + x);
  x = x - 1;
}

for (var x = 9; x >= 1; x--) {
  console.log("hello " + x);
}

// The for loop below has an error. Fix it!
/*
 * QUIZ REQUIREMENTS
 * - Your code should use a `for` loop
 * - Your `for` loop should specify a starting condition `k` with the value of `0`
 * - Your `for` loop should have a stop condition for the value of `k`
 * - Your `for` loop should increment `k` each time it executes
 * - Your code should produce the expected output, as explained above
 * - Your code should not be empty
 * - BE CAREFUL ABOUT THE PUNCTUATION AND THE EXACT WORDS TO BE PRINTED.
 */
 
// fix the for loop
for (var k = 0; k < 200; k++) { // added semicolons
 console.log(k);
}
