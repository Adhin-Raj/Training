// 7. Write a program that takes a sentence as input and returns the longest word in the sentence.

function longestWord(sentence) {
  if (typeof sentence !== "string") return "input should be string";

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

  return words;
}

function longestWordTest(array) {
  array.forEach((element) => {
    const result = longestWord(element[0]);
    let flag = false;
    if (typeof result === "string" && result === element[1]) {
      console.log("Passed");
    } else {
      for (let i = 0; i < element[1].length; i++) {
        if (result[i] !== element[1][i]) {
          console.log("Failed");
          i = element[1].length;
          flag = true;
        }
      }

      if (!flag) {
        console.log("Passed");
      }
    }
  });

  return "Completed...!";
}

console.log(
  longestWordTest([
    [
      "The quick brown fox jumps over the lazy dog",
      ["quick", "brown", "jumps"],
    ],
    ["Hello world of programming", ["programming"]],
    ["I love coding", ["coding"]],
    ["2323", ["2323"]],
    [123, "input should be string"],
    [undefined, "input should be string"],
    [null, "input should be string"],
    [true, "input should be string"],
    [["hello world"], "input should be string"],
    [{}, "input should be string"],
    [
      "I don't have enemies and no one deserve to be hearted",
      ["enemies", "deserve", "hearted"],
    ],
    ["", [""]],
    [[], "input should be string"],
    [() => console.log("hello"), "input should be string"],
    ["5 10 15", ["10", "15"]],
  ])
);
