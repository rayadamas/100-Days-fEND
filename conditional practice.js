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
} else if (musicians === 3) {
  console.log("trio");
} else if (musicians === 4) {
  console.log("quartet");
} else if (musicians > 4) {
  console.log("this is a large group");
}

3 != 6 % 3 && !(24 > 45) && !false; // true
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

// Quiz: Checking Your Balance
/*
 * QUIZ REQUIREMENTS
 * 1. Your code should have the variables `balance`, `checkBalance`, `isActive`
 * 2. Your code should include an `if...else` conditional statement
 * 3. Your code should produce the expected output
 * 4. Your code should not be empty
 * 5. BE CAREFUL ABOUT THE PUNCTUATION AND THE EXACT WORDS TO BE PRINTED.
 *    For example, if balance is 325.00, then "Your balance is $325.00" should be printed to the console
 * To print out the account balance w/ decimal points, use `toFixed(2)`
 */

var balance = 325.0;
var isActive = true;
var checkBalance = true;

if (checkBalance) {
  if (isActive && balance > 0) {
    console.log("Your balance is $" + balance.toFixed(2));
  } else if (isActive && balance === 0) {
    console.log("Your balance is $0.00");
  } else if (isActive && balance < 0) {
    console.log("Your balance is negative");
  } else if (!isActive) {
    console.log("Your account is not active");
  } else {
    console.log("Have a nice day!");
  }
}

// Ice Cream
/*
* Write a single if statement that logs out the message:
 * 
 * "I'd like two scoops of __________ ice cream in a __________ with __________."
 * 
 * ...only if:
 *   - flavor is "vanilla" or "chocolate"
 *   - vessel is "cone" or "bowl"
 *   - toppings is "sprinkles" or "peanuts"
 *
 * We're only testing the if statement and your boolean operators. 
 * It's okay if the output string doesn't match exactly.
 */

/*
 * QUIZ REQUIREMENTS
 * 1. Your code should have the variables `flavor`, `vessel`, and `toppings`
 * 2. Your code should have an `if` statement
 * 3. Your code should use logical expressions
 * 4. Your code should work with 
 *  - `flavor=vanilla`, `vessel=cone`, and `toppings=sprinkles`
 *  - `flavor=vanilla`, `vessel=cone`, and `toppings=peanuts`
 *  - `flavor=vanilla`, `vessel=bowl`, and `toppings=sprinkles`
 *  - `flavor=vanilla`, `vessel=bowl`, and `toppings=peanuts`
 * 
 *  - `flavor=chocolate`, `vessel=cone`, and `toppings=sprinkles`
 *  - `flavor=chocolate`, `vessel=cone`, and `toppings=peanuts`
 *  - `flavor=chocolate`, `vessel=bowl`, and `toppings=sprinkles`
 *  - `flavor=chocolate`, `vessel=bowl`, and `toppings=peanuts`
 *   
 * 5. Your code should NOT log (print) anything when 
 *  - the flavor is something other than "vanilla" or "chocolate"
 *  - the vessel is something other than "cone" or "bowl"
 *  - the toppings is something other than "sprinkles" or "peanuts"
*/

// change the values of `flavor`, `vessel`, and `toppings` to test your code
var flavor = "chocolate";
var vessel = "cone";
var toppings = "peanuts";

if (flavor === "vanilla" || flavor === "chocolate") {
  if (vessel === "cone" || vessel === "bowl") {
    if (toppings === "sprinkles" || toppings === "peanuts") {
      console.log("I'd like two scoops of " + flavor + " ice cream in a " + vessel + " with " + toppings + ".");
    }
  }
}

// Quiz: What do I Wear?

/*
|**Size**|**Width**|**Length**|**Sleeve**|
|---|---|---|---|
|S|18"|28"|8.13"|
|M|20"|29"|8.38"|
|L|22"|30"|8.63"|
|XL|24"|31"|8.88"|
|2XL|26"|33"|9.63"|
|3XL|28"|34"|10.13"|

Use the sizing chart above, create a series of logical expressions that prints the **size** of a t-shirt based on the measurements of
`shirtWidth`, `shirtLength`, and `shirtSleeve`. Valid sizes include `S`, `M`, `L`, `XL`, `2XL`, and `3XL`.

For example, if...

`var shirtWidth = 23; // size L (large) var shirtLength = 30; // size L (large) var shirtSleeve = 8.71; // size L (large)`

Then print `L` to the console.

**Hint:** _You will need to compare a range of values when checking for `shirtWidth`, `shirtLength`, and `shirtSleeve`.
For example, if the shirt's **width** is at least **20"**, but no more than **22"**, then the t-shirt should be
**medium (M)** — as long as the other values for the shirt's **length** and **sleeve** measurements match up._

---

If `shirtWidth`, `shirtLength`, and `shirtSleeve` don't fit within the range of acceptable values for a specific **size**,
then print `NA` to the console. For example, if...

`var shirtWidth = 18; // size S (small) var shirtLength = 29; // size M (medium) var shirtSleeve = 8.47; // size M (medium)`

Then print `N/A` to the console because the measurements don't all match up with one particular `size`.

> **TIP:** Make sure to test your code with different values. For example,  
>   
> If `shirtWidth` equals `19`, `shirtLength` equals `28` and `shirtSleeve` equals `8.21`, then `S` should be printed to the console.  
> If `shirtWidth` equals `26`, `shirtLength` equals `33` and `shirtSleeve` equals `9.63`, then `2XL` should be printed to the console.  
> If `shirtWidth` equals `18`, `shirtLength` equals `29` and `shirtSleeve` equals `8.47`, then `NA` should be printed to the console.

 * Using if/else statements, create a series of logical expressions that logs the size of a t-shirt based on the measurements of:
 *   - shirtWidth
 *   - shirtLength
 *   - shirtSleeve
 *
 * Use the chart above to print out one of the following correct values:
 *   - S, M, L, XL, 2XL, or 3XL
 */

/*
 * QUIZ REQUIREMENTS
 * 1. Your code should have the variables `shirtWidth`, `shirtLength`, and `shirtSleeve`
 * 2. Your code should include an `if...else` conditional statement
 * 3. Your code should use logical expressions
 * 4. Your code should produce the expected output
 * 6. Your code should not be empty
 * 7. BE CAREFUL ABOUT THE EXACT CHARACTERS TO BE PRINTED

*/

//

// change the values of `shirtWidth`, `shirtLength`, and `shirtSleeve` to test your code
let shirtWidth = 19; // Test different values for shirtWidth
let shirtLength = 28; // Test different values for shirtLength
let shirtSleeve = 8.21; // Test different values for shirtSleeve
let size = "";

// Add your logical expressions here to determine the size of the t-shirt based on the measurements
if (shirtWidth >= 18 && shirtWidth < 20 && shirtLength >= 28 && shirtLength < 29 && shirtSleeve >= 8.13 && shirtSleeve < 8.38) {
  console.log("S");
} else if (shirtWidth >= 20 && shirtWidth < 22 && shirtLength >= 29 && shirtLength < 30 && shirtSleeve >= 8.38 && shirtSleeve < 8.63) {
  console.log("M");
} else if (shirtWidth >= 22 && shirtWidth < 24 && shirtLength >= 30 && shirtLength < 31 && shirtSleeve >= 8.63 && shirtSleeve < 8.88) {
  console.log("L");
} else if (shirtWidth >= 24 && shirtWidth < 26 && shirtLength >= 31 && shirtLength < 32 && shirtSleeve >= 8.88 && shirtSleeve < 9.13) {
  console.log("XL");
} else if (shirtWidth >= 26 && shirtWidth < 28 && shirtLength >= 32 && shirtLength < 33 && shirtSleeve >= 9.13 && shirtSleeve < 9.38) {
  console.log("2XL");
} else if (shirtWidth >= 28 && shirtWidth < 30 && shirtLength >= 33 && shirtLength < 34 && shirtSleeve >= 9.38 && shirtSleeve < 9.63) {
  console.log("3XL");
} else {
  console.log("NA");
}

// Navigating the Food Chain
/*
## Directions:

Write a series of ternary statements that sets the variable `category` equal to:

- `"herbivore"` if an animal eats plants
- `"carnivore"` if an animal eats animals
- `"omnivore"` if an animal eats plants and animals
- `"undefined"` if an animal doesn't eat plants or animals

Use the `eatsPlants` and `eatsAnimals` variables to test your code.

> **TIP:** Make sure to test your code with different values. For example,  
>   
> If `eatsPlants` equals `true` and `eatsAnimals` equals `false`, then `herbivore` should be printed to the console.
    
    */

// change the values of `eatsPlants` and `eatsAnimals` to test your code
let eatsPlants = !true;
let eatsAnimals = !false;

var category = eatsAnimals ? (eatsPlants ? "omnivore" : "herbivore") : eatsPlants (eatsAnimals ? "carnivore" : "undefined");
console.log(category);