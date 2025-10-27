// 2. Write a program that takes a sentence as input and returns the word count.

function wordCount(sentence: string): number {
  let count = 0;
  if (sentence) {
    count = 1;
  }
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] === " ") {
      count++;
    }
  }
  return count;
}

console.log(wordCount("Hello world"));
console.log(wordCount("This is a sample sentence."));
console.log(wordCount("Programming is fun!"));
