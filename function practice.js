// Laught it off
/*
 * QUIZ REQUIREMENTS
 * - Your code should have a `laugh()` function
 * - Your `laugh()` function should return the correct output
 * - Your code should print `\"hahahahahahahahahaha!\"` by calling the `laugh()` function
 inside `console.log()`
 * - BE CAREFUL ABOUT THE PUNCTUATION AND THE EXACT WORDS TO BE PRINTED.
 */

 function laugh() {
  var output = "hahahahahahahahahaha!";
  return output;
 }

 console.log(laugh());

 // Laugh it off 2
 /*
 * Programming Quiz: Laugh it Off 2 (5-2)
 *
 * Write a function called `laugh` with a parameter named `num` that represents the number
 of "ha"s to return.
 *
 * Note:
 *  - make sure your the final character is an exclamation mark ("!")
 *  - make sure that your function produces the correct results when it is called multiple
 times
 */

/*
 * QUIZ REQUIREMENTS
 * - Your code should have a `laugh()` function
 * - Your `laugh()` function should have one parameter named `num`
 * - Your `laugh()` function should return the correct number of laughs
 */

function laughing(num) {
 var output = "";// output = ""; local variable
 for (var i = 0; i < num; i++) {
   output += "ha";// output = output + "ha";
 }
 output += "!";// output = output + "!";
 return output;// return the output
}

console.log(laughing(5));

// Build a Triangle

/*
For this quiz, you're going to create a function called buildTriangle() that will accept
an input (the triangle at its widest width) and will return the string representation of a triangle.
* 
* * 
 ***  
 ***  * 
 ***  * * 
 ***   ***  
 ***   ***  * 
 ***   ***  * * 
 ***   ***   ***  
* * * * * * * * * *
We've given you one function `makeLine()` to start with. The function takes in a line length, and builds a line of asterisks and returns
the line with a newline character.
*/

// this will need to be called in the buildTriangle() function
function makeLine(length) {// makeLine = function
  var line = "";// line = ""; local variable
  for (var j = 1; j <= length; j++) {
    line += "* "// line = line + "*";
  }
  return line + "\n";
}

