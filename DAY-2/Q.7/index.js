// 7. Write a program that takes a sentence as input and returns the longest word in the sentence.

function longestWord(sentence) {
  const arrSentence = sentence.split(" ");
  let words = [];
  let longestWord = arrSentence[0].length;
  for (const word of arrSentence) {
    if (word.length > longestWord) {
      longestWord = word.length;
    }
  }

  for (const word of arrSentence) {
    if (word.length === longestWord) {
      words.push(word);
    }
  }

  return words
}


console.log(longestWord("The quick brown fox jumps over the lazy dog"));
console.log(longestWord("Hello world of programming"))
console.log(longestWord("I love coding"))