// anagram
const wordList = ["care", "race", "dog", "god", "cat", "acre"];
function groupAnagram(wordList) {
  let sortedList = new Array();
  let groupedAnagram = new Array();
  let subArr = new Array();
  for (let item of wordList) {
    if (typeof item !== "string") return "input should be string";

    let sortWord1 = item.split("").sort().join("");
    sortedList.push(sortWord1);
  }

  for (let i = 0; i < sortedList.length; i++) {
    for (let j = i; j < sortedList.length; j++) {
      if (
        sortedList[i] === sortedList[j] &&
        !groupedAnagram.flat().includes(wordList[j])
      ) {
        subArr.push(wordList[j]);
      }
    }

    if (subArr.length > 0) {
      groupedAnagram.push(subArr);
      subArr = [];
    }
  }

  return groupedAnagram;
}

function groupAnagramTest(array) {
  array.forEach((element) => {
    let flag = false;
    const result = groupAnagram(element[0]);

    if (typeof result === "string") {
      console.log("Failed");
    } else {
      let flatResult = result.flat();
      let flatExpected = element[1].flat();
      for (let i = 0; i < result.length; i++) {
        if (flatResult[i] !== flatExpected[i]) {
          console.log("Failed");
          i = result.length;
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
  groupAnagramTest([
    [
      ["care", "race", "dog", "god", "cat", "acre"],
      [["care", "race", "acre"], ["dog", "god"], ["cat"]],
    ],
    [
      ["care", "cat", "acre"],
      [["care", "acre"], ["cat"]],
    ],
    [
      ["123", "231", "57"],
      [["123", "231"], ["57"]],
    ],
    [
      ["@!#", "#@!", "$%"],
      [["@!#", "#@!"], ["$%"]],
    ],
    [
      [123, 231, 56],
      [[123, 231], [56]],
    ],
    [
      [null, "231", "57"],
      [[null], ["231"], ["57"]],
    ],
    [
      [undefined, "231", "57"],
      [[undefined], ["231"], ["57"]],
    ],
    [["silent", "listen"], [["silent", "listen"]]],
    [
      [
        "care",
        "race",
        "dog",
        "god",
        "cat",
        "acre",
        "silent",
        "listen",
        "restful",
        "fluster",
        "hello",
        "world",
      ],
      [
        ["care", "race", "acre"],
        ["dog", "god"],
        ["cat"],
        ["silent", "listen"],
        ["restful", "fluster"],
        ["hello"],
        ["world"],
      ],
    ],
    [
      [
        [[], "race", "care", "dog"],
        [[[]], ["race", "care"], ["dog"]],
      ],
    ],
    [
      [
        [{}, "race", "care", "dog"],
        [[{}], ["race", "care"], ["dog"]],
      ],
    ],
    [
      [
        ["race", undefined, null, "dog"],
        [["race"], [undefined], [null], ["dog"]],
      ],
    ],
    [["eat", "tea"], [["eat", "tea"]]],
    [["race123#", "acre#31"], [["race123#", "acre#31"]]],
    [["", "", "", ""], [["", "", "", ""]]],
  ])
);
