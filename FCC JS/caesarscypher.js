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