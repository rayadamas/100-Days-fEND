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

function buildTriangle(x) {
  var triangle = "";// line = ""; local variable
  for (var i = 1; i <= x; i++) {
   triangle += makeLine(i);// line = line + makeLine(i);
  }
  return triangle;
}

console.log(buildTriangle(5));// this will print 5 lines of asterisks

// Anonymous Function
var myFunction = function() {
  // Function body
  console.log("This is an anonymous function");
};

// Calling the anonymous function
myFunction();

// Function Expression
var myFunction = function() {
  // Function body
  console.log("This is a function expression");
}

// Calling the function expression
myFunction();

// Inline Function
function myJuice(truthfulStatement, name) {
 truthfulStatement(name);
}

myJuice(function bestJuice(name) {// bestJuice = function body (local variable)
  console.log(name + " is the best juice!");
}, "Orange");// this is a callback function that will be called with the name as an argument

// Laugh 
/*
Write an anonymous function that stores a function in a variable called "laugh" and
outputs the number of "ha"s that you pass in as an argument.
*/

var LOL = "";// LOL = ""; local variable 
var laugh = function(num) {// var laugh = function
  for (var i = 0; i < num; i++) {
    LOL += "ha";// LOL = LOL + "ha";
  }
  return "Boy that was funny... " + LOL + "!";
};

console.log(laugh(5));// this will print "Boy that was funny... hahaha!"

// Cry
/*
Write a function expression that stores the function in a variable called `cry` and
returns "boohoo!". Make sure you call the function using the variable name.
*/

var cry = function() {
  return "boohoo!";
};

console.log(cry());// this will print "boohoo!"

// Inline
/*
Call the emotions() function so that it prints the output below, but instead of passing in
laugh() as an argument, pass an inline function instead.
emotions("happy", laugh(2)); // you can use your laugh function from the previous quizzes here
*/

// don't change this code
function emotions(myString, myFunc) {
  console.log("I am " + myString + ", " + myFunc(2));
}

// Call the emotions() function with two arguments
// Argument 1 - "happy" string
// Argument 2 - an inline function expression
emotions("happy", function laugh(x) {// parenthesis is important here to make it an inline function expression
 var LOL = '';
 for (var i = 0; i < num; i++) {
   LOL += "ha";
 }
 return "Boy that was funny... " + LOL + "!";
});
