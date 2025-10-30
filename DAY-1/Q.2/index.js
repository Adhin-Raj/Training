function patternPrint(word) {
  let arr = [];
  if (typeof word !== "string") return "input should be string";
  let i = 0;
  while (i < word.length) {
    let combine = "";
    for (let j = 0; j <= i; j++) {
      combine += word[j];
    }
    // console.log(combine)
    arr.push(combine);
    i++;
  }
  i = 0;
  while (i < word.length - 1) {
    let combined = "";
    for (let j = i + 1; j < word.length; j++) {
      combined += word[j];
    }
    // console.log(combined)
    arr.push(combined);
    i++;
  }
  return arr;
}

function patternPrintTest(arr) {
  arr.forEach((element) => {
    let flag = false;
    const result = patternPrint(element[0]);
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
        flag = false;
      }
    }
  });

  return `Completed...!`;
}

console.log(
  patternPrintTest([
    ["CAT", ["C", "CA", "CAT", "AT", "T"]],
    ["DANCE", ["D", "DA", "DAN", "DANC", "DANCE", "ANCE", "NCE", "CE", "E"]],
    ["123", ["1", "12", "123", "23", "3"]],
    [123, "input should be string"],
    ["!@#", ["!", "!@", "!@#", "@#", "#"]],
    ["", []],
    [true, "input should be string"],
    [
      "PROGRAMMING",
      [
        "P",
        "PR",
        "PRO",
        "PROG",
        "PROGR",
        "PROGRA",
        "PROGRAM",
        "PROGRAMM",
        "PROGRAMMI",
        "PROGRAMMIN",
        "PROGRAMMING",
        "ROGRAMMING",
        "OGRAMMING",
        "GRAMMING",
        "RAMMING",
        "AMMING",
        "MMING",
        "MING",
        "ING",
        "NG",
        "G",
      ],
    ],
    [[], "input should be string"],
    [{}, "input should be string"],
    [["1"], "input should be string"],
    [(item) => item, "input should be string"],
    ["1a2b", ["1", "1a", "1a2", "1a2b", "a2b", "2b", "b"]],
    ["a", ["a"]],
    ["d-a", ["d", "d-", "d-a", "-a", "a"]],
  ])
);
