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