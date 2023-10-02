// for (var i = 0; i < 10; i++) {
//     console.log(i)
// }

// Quiz: First Expression
// write an expression that uses at least 3 different arithmetic operators
// whose result evaluates to 42
console.log(31 + 13 - 2);
console.log(210 / 5);
console.log(142 % 5 + 40);

// Quiz: Converting Temperatures
// convert celsius to fahrenheit
var celsius = 12;
var fahrenheit = celsius * 1.8 + 32;
console.log(fahrenheit);

// Quiz: Favorite Food
// create a string with the name of your favorite food
// and save it to a variable called favoriteFood
var favoriteFood = "Stir Fry";
console.log(favoriteFood);

// Quiz: String Equality for All
// fix the right side of the expression
// so it evaluates to true
var answer = "ALL Strings are CrEaTeD equal" == "ALL Strings are CrEaTeD equal";
console.log(answer);

// Quiz: All Tied Up
// build a single string that resembles the following joke
// Why couldn't the shoes go out and play?
// They were all "tied" up!
// Your joke should take the format of a question and answer.
// The first line should be a question and the second line should be an answer.
// Hint: You will need to use special characters to produce the following output.
// For example, to insert quotation marks, you will need to use \".
var joke = "Why couldn't the shoes go out and play?\nThey were all \"tied\" up!";
console.log(joke);

// Quiz: Yosa Buson
// Build a string using concatenation by combining the lines from this famous haiku poem by Yosa Buson.
// Blowing from the west
// Fallen leaves gather
// In the east.
// Each string should be printed on its own line.
// Hint: You will need to use special characters to produce the following output.
// For example, to insert a line break, you will need to use \n.
var haiku = "Blowing from the west\n" + "Fallen leaves gather\n" + "In the east.";
console.log(haiku);

// Quiz: Semicolons!
// Correct the following code to print out the letter 'A'
// You may only add code below the line
var thingOne = "red";
var thingTwo = "blue";
console.log(thingOne + " " + thingTwo);

// Quiz: What's my Name?
// Create a variable called fullName and assign it your full name as a string.
var fullName = "Diamond Ray";
console.log(fullName);

// Quiz: Out to Dinner
// Create a variable called bill and assign it the result of 10.25 + 3.99 + 7.15
// (don't perform the calculation yourself, let JavaScript do it!).
// Next, create a variable called tip and assign it the result of multiplying bill by a 15% tip rate.
// Finally, add the bill and tip together and store it into a variable called total.
// Print the total to the JavaScript console.
var bill = 10.25 + 3.99 + 7.15;
console.log(bill);
var tip = bill * 0.15;
console.log(tip);
var total = bill + tip;
console.log(total);

// Quiz: Mad Libs
// Mad Libs is a word game where players have fun substituting words for blanks in a story.
// For this exercise, use the adjective variables below to fill in the blanks and complete the following message.
// "The Intro to JavaScript course is __________. James and Julia are so __________.
// I cannot wait to work through the rest of this __________ content!"
var adjective1 = "amazing";
var adjective2 = "fun";
var adjective3 = "entertaining";
// Assign the resulting string to a variable called madLib.
var madLib = "The Intro to JavaScript course is " + adjective1 + ". James and Julia are so " + adjective2 + ". I cannot wait to work through the rest of this " + adjective3 + " content!";
console.log(madLib);
