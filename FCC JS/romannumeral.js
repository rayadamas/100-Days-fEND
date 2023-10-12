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
