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
