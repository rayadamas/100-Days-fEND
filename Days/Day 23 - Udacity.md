# [10/3/2023, 13:03-14:41, 16:12-17:28]
- **Today's Progress**: Continuing w/ conditional quizzes.
- **Thoughts:** working through shorthand logic can get confusing p quick but it just takes a min to work through. gonna finish out this sections quizzes. 
---
```
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

// Quiz: Back to School
/*
Write a switch statement to set the average salary of a person based on their type of completed education.

Afterwards, print the following to the console.

In 2015, a person with __________ earned an average of __________/year.
Fill in the blanks with the type of education and the expected average salary. Make sure to use correct grammar in your printed statement, and watch out for any extra or missing characters
(including spaces and punctuation marks).
For help, refer to the findings above.

In 2015, a person with a Bachelor's degree earned an average of $59,124/year.
TIP: To print out the average salary with commas (i.e. 59,124), use the toLocaleString() method and pass it the locale "en-US".
For example, salary.toLocaleString("en-US").

TIP: Make sure to test your code with different values. For example,

If education equals "an Associate's degree", then the string"In 2015, a person with an Associate's degree earned an average of $41,496/year."
should be printed to the console.

no high school diploma earned an average of $25,636/year,
a high school diploma earned an average of $35,256/year,
an Associate's degree earned an average of $41,496/year,
a Bachelor's degree earned an average of $59,124/year,
a Master's degree earned an average of $69,732/year,
a Professional degree earned an average of $89,960/year,
and a Doctoral degree earned an average of $84,396/year.

 * Write a switch statement to set the average salary of a person based on their type of completed education.
 *
 */

/*
 * QUIZ REQUIREMENTS
 * - Your code should have the variables `education`, and `salary`
 * - Your code should include a switch statement
 * - Your code should produce the expected output
 * - Your code should not be empty
 * - BE CAREFUL ABOUT THE PUNCTUATION AND THE EXACT WORDS TO BE PRINTED.
 */ 

// change the value of `education` to test your code
var education = 'a Doctoral degree';

// set the value of this based on a person's education
var salary = 0;

switch (education) {
    case "no high school diploma":
        salary = 25636;
        break;
    case "a high school diploma":
        salary = 35256;
        break;
    case "an Associate's degree":
        salary = 41496;
        break;
    case "a Bachelor's degree":
        salary = 59124;
        break;
    case "a Master's degree":
        salary = 69732;
        break;
    case "a Professional degree":
        salary = 89960;
        break;
    case "a Doctoral degree":
        salary = 84396;
        break;
    }

salary = salary.toLocaleString("en-US");
console.log("In 2015, a person with " + education + " earned an average of $" + salary + "/year.");
```




























































