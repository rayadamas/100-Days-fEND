// Arrays
var donuts = ["glazed", "sprinkled", "chocolate"]; // this is an array using 3 string elements

var mixedData = ["qwerty", 123, true, "hello"]; // this is an array using 4 different types of data

var arraysInArrays = [ [1, 2, 3], [4, 5, 6], [7, 8, 9]]; // this is an array in an array

var arraysInArraysInArrays = [
  [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ],
]; // this is an array in an array in an array

console.log(donuts[2]); // prints out "chocolate" to the console
console.log(donuts[3]); // prints out undefined to the console

donuts[2] ="french cruler"; // changes "chocolate" to "french cruler"
console.log(donuts[2]); // prints out "french cruler" to the console

// UdaciFamily
/*
 * QUIZ REQUIREMENTS
 * - Your code should have a variable `udaciFamily`
 * - The variable `udaciFamily` should be an array containing the values `"Julia"`, `"James"`, and one other name
 * - Your code should print `udaciFamily` to the console
 * - BE CAREFUL ABOUT THE EXACT WORDS TO BE PRINTED.
 */


// your code goes here
var udaciFamily = ["Julia", "James", "Rei"];
console.log(udaciFamily);

// Building the Crew
/*
Create an array called crew to organize the Serenity’s crew and set it equal to the variables below.
You don't need to type out the actual strings, just use the provided variables.

var captain = "Mal";
var second = "Zoe";
var pilot = "Wash";
var companion = "Inara";
var mercenary = "Jayne";
var mechanic = "Kaylee";
Then, print the crew array to the console.



 * QUIZ REQUIREMENTS
 * - Your code should have a variable `crew`
 * - The variable `crew` should be an array containing the Serenity\'s crew
 * - Your code should print `crew` to the console as an array. Do not iterate over the elements. 
 * - BE CAREFUL ABOUT THE PUNCTUATION AND THE EXACT WORDS TO BE PRINTED.
 */

var captain = "Mal";
var second = "Zoe";
var pilot = "Wash";
var companion = "Inara";
var mercenary = "Jayne";
var mechanics = "Kaylee";

var crew = [captain, second, pilot, companion, mercenary, mechanics];
console.log(crew);

// The Price is Right
/*
Starting with this array of prices, change the prices of the 1st, 3rd, and 7th elements in the array.

var prices = [1.23, 48.11, 90.11, 8.50, 9.99, 1.00, 1.10, 67.00];
TIP: The 1st element of any array has an index of 0.

Afterwards, print out the prices array to the console.

 * QUIZ REQUIREMENTS
 * - Your code should have a variable `prices`
 * - The variable `prices` should be an array having different values for the 1st, 3rd, and 7th elements
 * - Your code should print `prices` to the console as an array. Do not iterate over the elements. 
 */

var prices = [1.23, 48.11, 90.11, 8.50, 9.99, 1.00, 1.10, 67.00];

prices[0] = 1.00;
prices[2] = 1.69;
prices[6] = 1.21;

console.log(prices);

donuts.push("sprinkled"); // adds "sprinkled" to the end of the array. the push method returns the new length of the array
console.log(donuts); // prints out the array to the console

donuts.pop(); // removes "sprinkled" from the end of the array
console.log(donuts); // prints out the array to the console

donuts.splice(-2, 0, "jelly", "blueberry"); // adds "jelly" and "blueberry" to the end of the array
console.log(donuts); // prints out the array to the console

// Colors of the Rainbow
/*
Directions:
James was creating an array with the colors of the rainbow, and he forgot some colors. The standard rainbow colors are usually listed in this order:

var rainbow = ["Red", "Orange", "Yellow", "Green", "Blue", "Purple"];
but James had this:

var rainbow = ["Red", "Orange", "Blackberry", "Blue"];
Using only the splice() method, insert the missing colors into the array, and remove the color "Blackberry" by following these steps:

Remove "Blackberry"
Add "Yellow" and "Green"
Add "Purple"

 * Use only the splice() method to modify the rainbow variable:
 *  - remove "Blackberry"
 *  - add "Yellow" and "Green"
 *  - add "Purple"
 */

var rainbow = ['Red', 'Orange', 'Blackberry', 'Blue'];
rainbow.splice(2, 1, 'Yellow', 'Green');
rainbow.splice(4, 0, 'Purple');
console.log(rainbow); // prints out the array to the console

// Quidditch Cup
/*
var team = ["Oliver Wood", "Angelina Johnson", "Katie Bell", "Alicia Spinnet", "George Weasley", "Fred Weasley", "Harry Potter"];
Create a function called hasEnoughPlayers() that takes the team array as an argument and
returns true or false depending on if the array has at least seven players.
* QUIZ REQUIREMENTS
 * - Your code should have a function `hasEnoughPlayers()`
 * - Your function `hasEnoughPlayers()` should accept one parameter
 * - Your function `hasEnoughPlayers()` should return the expected output - a Boolean value - true or false
 * - Return true if the array size is atleast 7, otherwise false. 
 *
 */

var team = ["Oliver Wood", "Angelina Johnson", "Katie Bell", "Alicia Spinnet", "George Weasley", "Fred Weasley", "Harry Potter"];

function hasEnoughPlayers(team) {
  if (team.length >= 7) {
    return true;
  } else {
    return false;
  }
}

console.log(hasEnoughPlayers(team)); // prints out true to the console

// Joining the Crew
// In an earlier exercise, you created a crew array to represent Mal’s crew from the hit show Firefly.

var captain = "Mal";
var second = "Zoe";
var pilot = "Wash";
var companion = "Inara";
var mercenary = "Jayne";
var mechanic = "Kaylee";

var crew = [captain, second, pilot, companion, mercenary, mechanic];
// Later in the show, Mal takes on three new crew members named "Simon", "River", and "Book".
// Use the push() method to add the three new crew members to the crew array.

var doctor = "Simon";
var sister = "River";
var shepherd = "Book";

crew.push(doctor, sister, shepherd);// adds "Simon", "River", and "Book" to the end of the array
console.log(crew); // prints out the array to the console

// Reverse Method
var numbers = [1, 2, 3, 4, 5];
numbers.reverse(); // reverses the order of the array
console.log(numbers); // prints out the array to the console

// Sort Method
var letters = ["b", "d", "c", "a"];
letters.sort(); // sorts the array
console.log(letters); // prints out the array to the console

// Shift Method
var removed = letters.shift(); // removes the first element of the array
console.log(letters); // prints out the array to the console
console.log(removed); // prints out the removed element to the console

// Splice Method
var removed = letters.splice(1, 1); // removes the second element of the array
console.log(letters); // prints out the array to the console
console.log(removed); // prints out the removed element to the console

// Join Method
var name = ["D", "i", "a", "m", "o", "n", "d"];
var joined = name.join(""); // joins the array into a string
console.log(joined); // prints out the joined string to the console


// Array Loops
console.log(donuts);
for (var i = 0; i < donuts.length; i++) {
  donuts[i] += " munchkin";
  console.log(donuts[i]);
}

// ForEach Loop
words = ["what", "is", "up", 5];
words.forEach(function(word, num, items) {
  console.log("Value " + num + " in " + items.toString() + " is " + word);
});

// Another Type of Loop
// Use the array's forEach() method to loop over the following array and add 100 to each of the values if the value is divisible by 3.
/*
* Things to note:
 *  - Inside the loop, you must use an `if` statement to verify code is divisible by 3
 *  - Inside the loop, you can updade an element ONLY by using the arrayName[index]
 *  - Outside the loop, you can use `console.log` to verify the `test` variable 
 */

var test = [12, 929, 11, 3, 199, 1000, 7, 1, 24, 37, 4, 19, 300, 3775, 299, 36, 209, 148, 169, 299, 6, 109, 20, 58, 139, 59, 3, 1, 139];

test.forEach(function(value, index, array) {
  if (value % 3 === 0) {// checks if the value is divisible by 3 using the modulus operator to check for a remainder of 0
    console.log(value);// prints out the value if it is divisible by 3
    array[index] += 100;// updates the array element by adding 100 to it
    console.log(array[index]);// prints out the updated array element to the console
  }
});

// Map Method
console.log(donuts);
var donuts = donuts.map(function(donut) {
  donut += " toasted";
  return donut;
});
console.log(donuts);

// I Got Bills
// Use the map() method to take the array of bill amounts shown below, and create a second array of numbers called totals
// that shows the bill amounts with a 15% tip added.

var bills = [50.23, 19.12, 34.01, 100.11, 12.15, 9.90, 29.11, 12.99, 10.00, 99.22, 102.20, 100.10, 6.77, 2.22];
// Print out the new totals array using console.log.

/*
* Use the .map() method to take the bills array below and create a second array
 * of numbers called totals. The totals array should contains each amount from the
 * bills array but with a 15% tip added. Log the totals array to the console.
 *
 * For example, the first two entries in the totals array would be:
 *
 * [57.76, 21.99, ... ]
 *
 * Things to note:
 *  - each entry in the totals array must be a number
 *  - each number must have an accuracy of two decimal points
 */

