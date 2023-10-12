# [10/12/2023, 14:15-18:00]
- **Today's Progress**: finishing out the 5 JS projects i have open on my FCC account. 
- **Thoughts:** i HATE regex.
---
```
/*
Palindrome Checker
Return true if the given string is a palindrome. Otherwise, return false.

A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case,
and spacing.

Note: You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything into
the same case (lower or upper case) in order to check for palindromes.

We'll pass strings with varying formats, such as racecar, RaceCar, and race CAR among others.

We'll also pass strings with special symbols, such as 2A3*3a2, 2A3 3a2, and 2_A3*3#A2.
*/

function palindrome(str) {
  // Remove all non-alphanumeric characters
  str = str.replace(/[^a-zA-Z0-9]/g, "");
  /*
 The regular expression "RegEx" /[^a-zA-Z0-9]/g is used as the first argument of the replace method.
 The regular expression pattern [^a-zA-Z0-9] matches any character that is not an uppercase letter (A-Z),
 lowercase letter (a-z), or a digit (0-9).
 The g flag after the closing delimiter / indicates that the replacement should be done globally, meaning
 all matches in the string should be replaced, not just the first match.
 The second argument of the replace method is an empty string "". This means that any character matching
 the pattern will be replaced with an empty string, effectively removing it from the original string.
 */
  // Make all letters lowercase
  str = str.toLowerCase();
  // Check if the string is equal to its reverse
  return (str === str.split("").reverse().join(""));
}

console.log(palindrome("eye")); // true
console.log(palindrome("_eye")); // true
console.log(palindrome("race car")); // false
console.log(palindrome("not a palindrome")); // false
console.log(palindrome("A man, a plan, a canal: Panama")); // true
console.log(palindrome("never odd or even")); // true
console.log(palindrome("nope")); // false
console.log(palindrome("almostomla")); // false
console.log(palindrome("My age is 0, 0 si ega ym")); // true
console.log(palindrome("1 eye for of 1 eye.")); // false
console.log(palindrome("0_0 (: /- :) 0-0")); // true
console.log(palindrome("five|_/|four")); // false

```

```
/*
One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher.
In a shift cipher the meanings of the letters are shifted by some set amount.

A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places.
Thus A ↔ N, B ↔ O and so on.

Write a function which takes a ROT13 encoded string as input and returns a decoded string.

All letters will be uppercase.
Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.
*/

function rot13(str) {
    let newStr = "";
    for (let i = 0; i < str.length; i++) {
        let charCode = str.charCodeAt(i);
        if (charCode >= 65 && charCode <= 90) {
            charCode += 13;
            if (charCode > 90) {
                charCode -= 26;
            }
        }
        newStr += String.fromCharCode(charCode);
    }
    return newStr;
}

console.log(rot13("SERR PBQR PNZC")); // should decode to "FREE CODE CAMP"
/*
The if statement in the code snippet is used to check if the Unicode value of a character falls within the range of
uppercase letters (A-Z). (https://en.wikipedia.org/wiki/List_of_Unicode_characters)

If the character is an uppercase letter, the code inside the if block is executed.
It increments the Unicode value of the character by 13, effectively shifting it 13 positions in the Unicode alphabet.

However, if the resulting Unicode value is greater than 90 (the Unicode value for 'Z'),
it means that the shifted character would be beyond the range of uppercase letters.
In that case, the code subtracts 26 to wrap it back to the beginning of the uppercase letters range.
*/
```

```
/*
Return true if the passed string looks like a valid US phone number.

The user may fill out the form field any way they choose as long as it has the format of a valid US number.
The following are examples of valid formats for US numbers (refer to the tests below for other variants):

555-555-5555
(555)555-5555
(555) 555-5555
555 555 5555
5555555555
1 555 555 5555

For this challenge you will be presented with a string such as 800-692-7753 or 8oo-six427676;laskdjf.
Your job is to validate or reject the US phone number based on any combination of the formats provided above.
The area code is required. If the country code is provided, you must confirm that the country code is 1.
Return true if the string is a valid US phone number; otherwise return false.
*/

function telephoneCheck(str) {
 var regex = /^(1\s?)?(\d{3}|\(\d{3}\))[\-\s]?\d{3}[\-\s]?\d{4}$/;
 return regex.test(str);
}

console.log(telephoneCheck("555-555-5555"));

/*
/ and / are delimiters that enclose the regular expression pattern.
^ asserts the start of the string.
(1\s?)? matches an optional "1" followed by an optional whitespace character.
(\d{3}|\(\d{3}\)) matches either three digits or three digits enclosed in parentheses.
[\-\s]? matches an optional hyphen or whitespace.
\d{3} matches three digits.
[\-\s]? matches an optional hyphen or whitespace.
\d{4} matches four digits.
$ asserts the end of the string.
*/
```

```
/*
Convert the given number to a roman numeral.
Roman numerals	Arabic numerals
M |	1000
CM |	900
D |	500
CD |	400
C |	100
XC |	90
L |	50
XL |	40
X |	10
IX |	9
V |	5
IV |	4
I |	1
*/

function convertToRoman(num) {
  var roman = "";
  var romanNumeral = [
    { value: 1000, symbol: "M" },
    { value: 900, symbol: "CM" },
    { value: 500, symbol: "D" },
    { value: 400, symbol: "CD" },
    { value: 100, symbol: "C" },
    { value: 90, symbol: "XC" },
    { value: 50, symbol: "L" },
    { value: 40, symbol: "XL" },
    { value: 10, symbol: "X" },
    { value: 9, symbol: "IX" },
    { value: 5, symbol: "V" },
    { value: 4, symbol: "IV" },
    { value: 1, symbol: "I" },
  ];
  for (var i = 0; i < romanNumeral.length; i++) {
    while (num >= romanNumeral[i].value) {
      roman += romanNumeral[i].symbol; // roman = roman + romanNumeral[i].symbol;
      num -= romanNumeral[i].value; // num = num - romanNumeral[i].value;
    }
  }
  return roman;
}

console.log(convertToRoman(16));

/*
The code starts with a for loop that iterates over the romanNumeral array.
This array likely contains objects representing Roman numeral symbols and their corresponding numeric values.
Inside the loop, there is a while loop that continues as long as num is greater than or equal to the
current romanNumeral[i].value.
Within the while loop, the code appends the corresponding romanNumeral[i].symbol to the roman variable.
It also subtracts the romanNumeral[i].value from num to keep track of the remaining value to convert.
This process continues until num is no longer greater than or equal to the current value in the romanNumeral array.
After the for loop finishes, the function returns the final roman variable, which represents the Roman numeral
representation of the given number.
*/

```

```
/*
Design a cash register drawer function checkCashRegister() that accepts purchase price as
the first argument (price),
payment as the second argument (cash),
and cash-in-drawer (cid) as the third argument.

cid is a 2D array listing available currency.

The checkCashRegister() function should always return an object with a status key and a change key.

Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due,
or if you cannot return
the exact change.

Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due.

Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order,
as the value of the change key.

Currency Unit |	Amount
Penny |	$0.01 (PENNY)
Nickel |	$0.05 (NICKEL)
Dime |	$0.1 (DIME)
Quarter |	$0.25 (QUARTER)
Dollar |	$1 (ONE)
Five Dollars |	$5 (FIVE)
Ten Dollars |	$10 (TEN)
Twenty Dollars |	$20 (TWENTY)
One-hundred Dollars |	$100 (ONE HUNDRED)

See below for an example of a cash-in-drawer array:

[
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100]
]
*/

function checkCashRegister(price, cash, cid) {
  var change = cash - price; // Calculate the change due to the customer
  var cidTotal = 0; // Initialize a variable to store the total cash in the cash register
  var changeDue = []; // Initialize an empty array to store the breakdown of the change due
  var changeDueTotal = 0; // Initialize a variable to store the total change given back to the customer
  var status = ""; // Initialize a variable to store the status of the transaction
  // Define the value of each currency denomination in an object
  var currency = {
    PENNY: 0.01,
    NICKEL: 0.05,
    DIME: 0.1,
    QUARTER: 0.25,
    ONE: 1,
    FIVE: 5,
    TEN: 10,
    TWENTY: 20,
    "ONE HUNDRED": 100,
  };

  // Loop through the cash register to calculate its total value
  for (var i = 0; i < cid.length; i++) {
    cidTotal += cid[i][1]; // Add the amount of each denomination to the total
  }

  cidTotal = Math.round(cidTotal * 100) / 100; // Round the cash register total to two decimal places

  // Check if there's not enough money in the cash register to give change
  if (cidTotal < change) {
    status = "INSUFFICIENT_FUNDS";
  }
  // Check if the cash in the register is equal to the change due
  else if (cidTotal == change) {
    status = "CLOSED";
    changeDue = cid; // If the status is CLOSED, give all the cash in the register as change
  } else {
    status = "OPEN"; // If there's enough money in the register, set the status to OPEN
    // Loop through the cash register from highest to lowest denomination
    for (var j = cid.length - 1; j >= 0; j--) {
      var cidCurrency = cid[j][0]; // Get the currency denomination name
      var cidAmount = cid[j][1]; // Get the amount of that denomination in the register
      var cidCurrencyTotal = 0; // Initialize a variable to store the amount of that denomination given as change

      // While there's still change due and there's still currency of this denomination in the register
      while (change >= currency[cidCurrency] && cidAmount > 0) {
        change -= currency[cidCurrency]; // Subtract the value of the denomination from the change due
        change = Math.round(change * 100) / 100; // Round the change due to two decimal places
        cidAmount -= currency[cidCurrency]; // Subtract the value of the denomination from the cash register
        cidAmount = Math.round(cidAmount * 100) / 100; // Round the amount of that denomination in the register to two decimal places
        cidCurrencyTotal += currency[cidCurrency]; // Add the value of the denomination to the total change of that denomination
        cidCurrencyTotal = Math.round(cidCurrencyTotal * 100) / 100; // Round the total change of that denomination to two decimal places
      }

      // If any currency of this denomination was given as change
      if (cidCurrencyTotal > 0) {
        changeDue.push([cidCurrency, cidCurrencyTotal]); // Add the denomination and its total to the change due array
        changeDueTotal += cidCurrencyTotal; // Add the total change of this denomination to the overall change due total
        changeDueTotal = Math.round(changeDueTotal * 100) / 100; // Round the overall change due total to two decimal places
      }
    }

    // If there's still change due after giving all available denominations
    if (change > 0) {
      status = "INSUFFICIENT_FUNDS"; // Update the status to indicate insufficient funds
      changeDue = []; // Reset the change due array
    }
  }

  // Return the final status and the change due
  return {
    status: status,
    change: changeDue,
  };
}

console.log(
  checkCashRegister(19.5, 20, [
    ["PENNY", 1.01],
    ["NICKEL", 2.05],
    ["DIME", 3.1],
    ["QUARTER", 4.25],
    ["ONE", 90],
    ["FIVE", 55],
    ["TEN", 20],
    ["TWENTY", 60],
    ["ONE HUNDRED", 100],
  ])
); // {status: "OPEN", change: [["QUARTER", 0.5]]}

```





















