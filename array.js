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