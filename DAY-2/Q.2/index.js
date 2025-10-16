// 2. Write a program that takes a sentence as input and returns the word count.

function wordCount(sentence) {
  let count;
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

function wordCountTestCase(input,output) {
  return  wordCount(input) === output ? true : false;   
}

console.log(wordCountTestCase("Hello world",2));
console.log(wordCountTestCase("This is a sample sentence.",5));
console.log(wordCountTestCase("Programming is fun!",3))
