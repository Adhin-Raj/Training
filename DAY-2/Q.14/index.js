// 14. Write a program that checks if a given string is a palindrome, ignoring spaces and punctuation.

function isPalindrome(str) {
  const afterLowerStr = str.toLocaleLowerCase().split("");
  let arr = "";

  for (let i = 0; i < afterLowerStr.length; i++) {
    if (
      !(
        afterLowerStr[i] === " " ||
        afterLowerStr[i] === "," ||
        afterLowerStr[i] === "!"
      )
    ) {
      arr += afterLowerStr[i];
    }
  }

  return arr.split("").reverse().join("") === arr ? true : false;
}

console.log(isPalindrome("A man, a plan, a canal, Panama!"));
console.log(isPalindrome("Racecar"))
console.log(isPalindrome("Hello, world!"));
