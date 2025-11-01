// 10. Write a program that takes a list of strings as input and returns the longest common prefix among the strings.

function longestPrefix(wordList) {
  if (wordList.length < 2) {
    return "minimum of 2 words required";
  }

  for (let i = 0; i < wordList.length; i++) {
    if (typeof wordList[i] !== "string") {
      return "input should be a string";
    }
  }

  const splitWordList = wordList[0].split("");
  let i = 0;
  let prefix = "";
  while (i < splitWordList.length) {
    let count = 0;
    for (let word of wordList) {
      if (word.includes(splitWordList[i])) {
        count++;
      }
      if (count === wordList.length) {
        prefix += splitWordList[i];
      }
    }
    i++;
  }

  return prefix.length > 0
    ? prefix
    : "There is no common prefix for given strings";
}

function longestPrefixTest(array) {
  array.forEach((element) => {
    const result = longestPrefix(element[0]);
    // console.log(result)
    if (result === element[1]) {
      console.log("Passed");
    } else {
      console.log("Failed");
    }
  });

  return "Completed...!";
}

console.log(
  longestPrefixTest([
    [["flower", "flow", "flight"], "fl"],
    [["dog", "racecar", "car"], "There is no common prefix for given strings"],
    [["apple", "app", "application"], "app"],
    [[12, 13, 14], "input should be a string"],
    [[true, false, true, false], "input should be a string"],
    [["dog", 1, 2], "input should be a string"],
    [["dog", "door", "dom"], "do"],
    [[(item) => item * 2, (item) => item + 1], "input should be a string"],
    [["123dance", "123sing", "123swim"], "123"],
    [["", "", ""], "There is no common prefix for given strings"],
    [["address"], "minimum of 2 words required"],
    [["address", "addition"], "add"],
    [["###flow", "###flower", "###flight"], "###fl"],
    [[NaN, 1, 2, "dance"], "input should be a string"],
    [[1,2,4,false,true,"apple","application"],"input should be a string"]
  ])
);
