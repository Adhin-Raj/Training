// 13. Write a program that takes a list of strings as input and returns the longest word among them.

function longestWord(wordList) {
  let wordLength = [];

  for (const word of wordList) {
    wordLength.push(word.length);
  }
  const indexOfLongest = wordLength.indexOf(Math.max(...wordLength));
  return wordList[indexOfLongest];
}

console.log(longestWord(["apple", "banana", "orange"]));
console.log(longestWord( ["cat", "dog", "elephant", "tiger"]))
console.log(longestWord(["programming", "is", "fun"]))
