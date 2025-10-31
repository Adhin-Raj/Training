// 16. Write a program that takes a list of strings as input and returns the list sorted based on the length of the strings, with shorter strings appearing first. If two strings have the same length, maintain their relative order.

function stringSortLength(strList) {
  let lengthStr = {};

  for (const word of strList) {
    if (typeof word !== "string") return "input should be string";
    lengthStr[word] = word.length;
  }

  const sortedArr = Object.entries(lengthStr)
    .sort((a, b) => a[1] - b[1])
    .flat();
  const filterByType = sortedArr.filter(
    (item) => typeof item === "string" && item
  );

  return filterByType;
}

function stringSortLengthTest(array) {
  array.forEach((element) => {
    let flag = false;
    const resultArr = stringSortLength(element[0]);
    for (let i = 0; i < resultArr.length; i++) {
      if (resultArr[i] !== element[1][i]) {
        console.log("Failed");
        i = resultArr.length;
        flag = true;
      }
    }

    if (!flag) {
      console.log("Passed");
    }
  });

  return "Completed...!";
}

console.log(
  stringSortLengthTest([
    [
      ["open", "source", "programming", "is", "fun"],
      ["is", "fun", "open", "source", "programming"],
    ],
    [
      ["hello", "world"],
      ["hello", "world"],
    ],
    [
      ["cat", "dog", "elephant", "tiger"],
      ["cat", "dog", "tiger", "elephant"],
    ],
    [
      ["12", "52", "3", "11"],
      ["3", "11", "12", "52"],
    ],
    [[12, 52, 3, 11], "input should be string"],
    [[true, false, true, false, false], "input should be string"],
    [
      ["it", "cost", "around", "54", "dollars"],
      ["54", "it", "cost", "around", "dollars"],
    ],
    [["one", 1, "two", 2, "three", 3, "four", 4], "input should be string"],
    [
      ["  ", "welcome", "to", "programming"],
      ["  ", "to", "welcome", "programming"],
    ],
    [[NaN, "welcome", "brother"], "input should be string"],
    [[(item) => item + " ", (item) => item + 2], "input should be string"],
    [
      [["javascript"],["java"],["python"]],
      "input should be string"
    ],
    [
      ["hello",true,"welcome"],
      "input should be string"
    ],
    [
      ["#!#","@4@%^#","2342385",'hello'],
      ["#!#","hello","@4@%^#","2342385"]
    ]
  ])
);
