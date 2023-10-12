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
