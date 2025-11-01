// 14. Write a program that checks if a given string is a palindrome, ignoring spaces and punctuation.

function isSentencePalindrome(str) {
  if (typeof str !== "string") return "input should be string";

  const afterLowerStr = str.toLocaleLowerCase();

  const pattern = /[a-z]|[0-9]/g;
  const result = afterLowerStr.match(pattern);
  const newResult = result.join("");

  return newResult === newResult.split("").reverse().join("") ? true : false;
}

function sentencePalindromeTest(arr) {
  arr.forEach((item) => {
    const result = isSentencePalindrome(item[0]);
    if (result === item[1]) {
      console.log("Passed");
    } else {
      console.log("Failed");
    }
  });

  return "Completed...!";
}

console.log(
  sentencePalindromeTest([
    ["A man, a plan, a canal, Panama!", true],
    ["Racecar", true],
    ["Hello, world!", false],
    ["A Toyota", true],
    ["malayalam", true],
    ["once upon a time", false],
    [1221, "input should be string"],
    [true, "input should be string"],
    ["1234321", true],
    [["dad"], "input should be string"],
    [{ a: "string" }, "input should be string"],
    ["c",true],
    [(item)=>item+item,"input should be string"],
    ['true',false],
    ["NaN",true],
    [NaN,"input should be string"]
  ])
);
