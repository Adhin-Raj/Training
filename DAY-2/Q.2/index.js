// 2. Write a program that takes a sentence as input and returns the word count.

function wordCount(sentence) {
  let count = 0;
  if (typeof sentence !== "string") return "input should be string";
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

function wordCountTestCase(arr) {
  arr.forEach((element) => {
    const result = wordCount(element[0]);
    if (result === element[1]) {
      console.log("Passed");
    } else {
      console.log("Failed");
    }
  });

  return "Completed...!";
}

console.log(
  wordCountTestCase([
    ["Hello world", 2],
    ["This is a sample sentence.", 5],
    ["Programming is fun!", 3],
    ["i don't have enemies and no one deserve to be hearted.", 11],
    ["1 2 3 4 5", 5],
    [1, "input should be string"],
    [true, "input should be string"],
    [() => console.log("hello"), "input should be string"],
    [{}, "input should be string"],
    [[], "input should be string"],
    [123, "input should be string"],
    ["$20 that i need!", 4],
    [["hello"], "input should be string"],
    ["hi", 1],
    [{ a: "hi" }, "input should be string"],
  ])
);
