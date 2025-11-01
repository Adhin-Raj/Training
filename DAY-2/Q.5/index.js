// 5. Write a program that takes a string as input and returns the frequency of each character in the string.

function freqOfchar(word) {
  let freq = {};
  if (typeof word !== "string") return "input should be in string";
  for (const char of word) {
    if (!freq[char]) {
      freq[char] = 1;
    } else {
      freq[char]++;
    }
  }
  return freq;
}

function charFreqTestCase(array) {
  array.forEach((element,index) => {
    let flag = false;
    const actualOutput = freqOfchar(element[0]);
    if (actualOutput === element[1]) {
      console.log("Passed");
    } else {
      for (let actualKey in actualOutput) {
        if (actualOutput[actualKey] !== element[1][actualKey] && flag) {
          console.log("Failed");
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
  charFreqTestCase([
    ["hello", { h: 1, e: 1, l: 2, o: 1 }],
    ["programming", { p: 1, r: 2, o: 1, g: 2, a: 1, m: 2, i: 1, n: 1 }],
    [132,"input should be in string"],
    ["121", { 1: 2, 2: 1 }],
    [[], "input should be in string"],
    [["hello"], "input should be in string"],
    [undefined, "input should be in string"],
    [null, "input should be in string"],
    ["", { "": 1 }],
    ["$@#$", { $: 2, "@": 1, "#": 1 }],
    ["aaaaaaa", { a: 7 }],
    ["a a a a", { a: 4, " ": 3 }],
    ['.', {'.':1}],
    [() => console.log("hello"), "input should be in string"],
    ["hello123", { h: 1, e: 1, l: 2, o: 1, 1: 1, 2: 1, 3: 1 }],
  ])
);
