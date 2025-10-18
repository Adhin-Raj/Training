// 4. Write a program which takes a natural number as input and should return its corresponding roman number. Maximum input limit will be 2000.

// Test cases:
// Input: 5
// Output: V
// Input: 60
// Output: LX

const romanList = {
  1: "I",
  2: "II",
  3: "III",
  4: "IV",
  5: "V",
  6: "VI",
  7: "VII",
  8: "VIII",
  9: "IX",
  10: "X",
  50: "L",
  100: "C",
  500: "D",
  1000: "M",
};
const divideNum = [1, 10, 100, 1000];

function romanNumber(num) {
  let roman = "";
  const numLen = num.toString().length;
  for (let i = numLen - 1; i >= 0; i--) {
    if (num >= 10 && num < 50) {
      roman += romanList[10];
    } else if (num >= 50 && num < 100) {
      roman += romanList[50];
    } else if (num >= 100 && num < 500) {
      roman += romanList[100];
    } else if (num >= 500 && num < 1000) {
      roman += romanList[500];
    } else if (num >= 1000) {
      roman += romanList[1000];
    } else {
      const last = Object.entries(romanList)
        .filter((item) => Number(item[0]) === num && item[0])
        .flat();

      roman += last[1];
    }

    num = num % divideNum[i];
  }

  return roman;
}

console.log(romanNumber(40));
