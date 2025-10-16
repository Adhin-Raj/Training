// 14. Write a program that checks if a given string is a palindrome, ignoring spaces and punctuation.

function isPalindrome(str) {
  const afterLowerStr = str.toLocaleLowerCase();
  let arr = "";

  const pattern = /[a-z]/g;
  const result = afterLowerStr.match(pattern);

  const newResult = result.join("");

  return newResult === newResult.split("").reverse().join("") ? true : false;
}

console.log(isPalindrome("A man, a plan, a canal, Panama!"));
console.log(isPalindrome("Racecar"));
console.log(isPalindrome("Hello, world!"));
