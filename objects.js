// Objects
typeof [1, 2, 3]; // "object"
typeof {}; // "object"

// Umbrella Object
/*
 * QUIZ REQUIREMENTS
 * - Your code should have a variable `umbrella`
 * - The variable `umbrella` should be an object
 * - Your `umbrella` object should have the `color` and `isOpen` property
 * - Your `umbrella` object should have an `open()` method that toggles the value of `isOpen` property
 * - Your `umbrella` object should have an `close()` method that toggles the value of `isOpen`
 */


var umbrella = {
  color: "black",
  isOpen: true,
  open: function () {
   if (umbrella.isOpen === true) {
    return "The umbrella is open!";
   } else {
    umbrella.isOpen = true;// toggles the value of isOpen to true if it is currently false
    return "The umbrella is now open!";
   }
  },
  close: function () {
   if (umbrella.isOpen === true) {
    umbrella.isOpen = false;// toggles the value of isOpen to false if it is currently true
    return "The umbrella is now closed!";
   } else {
    return "The umbrella is already closed!";
   }
  }
};

console.log(umbrella.close());
console.log(umbrella.open());

var myObject = {
 color: "orange",
 shape: "diamond",
 type: "pendant",
 size: "small",
 wear: function () {
  return "You wear the " + myObject.size + " " + myObject.color + " " + myObject.shape + " " + myObject.type + ".";
 }
};

console.log(myObject.wear());

// Menu Items
/*
Create a breakfast object to represent the following menu item:

The Lumberjack - $9.95
eggs, sausage, toast, hashbrowns, pancakes
The object should contain properties for the name, price, and ingredients.
*/

var breakfast = {
 name: "The Lumberjack",
 price: "$9.95",
 ingredients: ["eggs", "sausage", "toast", "hashbrowns", "pancakes"]
}

console.log(breakfast.price);

// Bank Accounts
// Using the given object:
/*
add a printAccountSummary() method that returns the following account message:

Welcome!
Your balance is currently $1000 and your interest rate is 1%.
*/

var savingsAccount = {
 balance: 1000,
 interestRatePercent: 1,
 deposit: function addMoney(amount) {
   if (amount > 0) {
     savingsAccount.balance += amount;
   }
 },
 withdraw: function removeMoney(amount) {
   var verifyBalance = savingsAccount.balance - amount;
   if (amount > 0 && verifyBalance >= 0) {
     savingsAccount.balance -= amount;
   }
 },
 printAccountSummary: function printAccountSummary() {
  return "Welcome!\nYour balance is currently $" + savingsAccount.balance + " and your interest rate is " + savingsAccount.interestRatePercent + "%.";
 }
};

console.log(savingsAccount.deposit(100));
console.log(savingsAccount.printAccountSummary());

// Facebook Friends
/*
Create an object called facebookProfile. The object should have 3 properties:
-your name
-the number of friends you have, and
-an array of messages you've posted (as strings)

The object should also have 4 methods:
-postMessage(message) - adds a new message string to the array
-deleteMessage(index) - removes the message corresponding to the index provided
-addFriend() - increases the friend count by 1
-removeFriend() - decreases the friend count by 1
 */

// TIP - 
// In an array, 
// - addition at the end is done using push() method
// - addition at a specific index is done using splice() method
// - deletion from the beginning is done using pop() method
// - deletion from a specific index is done using splice() method

var facebookProfile = {
 name: "Diamond",
 friends: 0,
 messages: ["Hello", "I'm Diamond", "I love to code"],
 postMessage: function (message) {
   this.messages.push(message);// adds the message to the end of the array
 },
 deleteMessage: function (index) {
   this.messages.splice(index, 1);// removes the message corresponding to the index provided
 },
 addFriend: function () {
   this.friends++;// increases the friend count by 1
 },
 removeFriend: function () {
   this.friends--;// decreases the friend count by 1
 }
};

console.log(facebookProfile.name);
facebookProfile.addFriend();
console.log(facebookProfile.friends);
console.log(facebookProfile.messages);
facebookProfile.postMessage("BIG YERRRR");
console.log(facebookProfile.messages);
facebookProfile.removeFriend();
console.log(facebookProfile.friends);

// Donuts Revisited
var donuts = [
 { name: "Jelly", cost: 1.22 },
 { name: "Chocolate", cost: 2.45 },
 { name: "Cider", cost: 1.59 },
 { name: "Boston Cream", cost: 5.99 }
]

/*
Use the forEach() method to loop over the array and print out the following donut summaries using console.log.

Jelly donuts cost $1.22 each
Chocolate donuts cost $2.45 each
Cider donuts cost $1.59 each
Boston Cream donuts cost $5.99 each
*/

donuts.forEach(function(donut) {
  console.log(donut.name + " donuts cost $" + donut.cost + " each");
})