// 15. Write a program that takes a string as input and returns the reverse of each word in the string while preserving the word order.

function reverseWords(sentence) {
  const wordsArr = sentence.split(" ");
  let rev = [];
  for (const word of wordsArr) {
    rev.push(word.split("").reverse().join(""));
  }

  return rev.join(" ");
}

console.log(reverseWords("Hello world"));
console.log(reverseWords("Programmers are awesome"));
console.log(reverseWords("Programming is fun"));
