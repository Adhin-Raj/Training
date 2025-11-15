// Write a function romanToInteger(roman) that:
// Converts a Roman numeral string into its corresponding integer value.
// The function should correctly handle subtractive notation (e.g., IV = 4, IX = 9).​
// ​
// I = 1
// V = 5
// X = 10
// L = 50
// C = 100
// D = 500
// M = 1000
// ​
// Example:
// Input:
// roman = "MCMXCIV"
// Output:
// integer: 1994

const romanNumbers: { [key: string]: number } = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

function romanToInteger(roman: string) {
  let romanArr = [];

  let i = roman.length - 1;

  while (i >= 0) {
    if (roman.length > 1) {
      let diff;
      if (romanNumbers[roman[i]] > romanNumbers[roman[i - 1]]) {
        diff = romanNumbers[roman[i]] - romanNumbers[roman[i - 1]];
      } else {
        diff = romanNumbers[roman[i]] + romanNumbers[roman[i - 1]];
      }
      if (i >= 1) {
        i--;
        romanArr.push(diff);
      }
    }
    if (roman.length % 2 !== 0 && i == 0) {
      romanArr.push(romanNumbers[roman[i]]);
    }

    i--;
  }

  return romanArr.reduce((acc, item) => acc + item, 0);
}

console.log(romanToInteger("MCMXCIV")); //1994
console.log(romanToInteger("IV")); //4
console.log(romanToInteger("V")); //5
console.log(romanToInteger("IX")); //9
console.log(romanToInteger("XL")); //40
console.log(romanToInteger("MXCIV")); //1094
console.log(romanToInteger("LX")); //60
console.log(romanToInteger("CVI")); //106
