// 4. Write a program that takes a word and prints a pattern like this:

// Input: CAT
// Output:
// C
// CA
// CAT
// AT
// T

function patternPrint(str) {
  let i = 0;

  let newStr = "";
  while (i < str.length) {
    newStr = "";
    for (let j = 0; j <= i; j++) {
      newStr += str[j];
    }
    console.log(newStr);
    i++;
  }
  i = 0;

  while (i < str.length - 1) {
    newStr = "";
    for (let j = i + 1; j < str.length; j++) {
      newStr += str[j];
    }
    console.log(newStr);
    i++;
  }
}

console.log(patternPrint("CAT"));
