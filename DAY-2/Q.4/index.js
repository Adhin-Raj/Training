// 4. Write a program that determines if a string is an anagram of another string. An anagram is a word or phrase formed by rearranging the letters of another word or phrase.?

function isAnagram(word1, word2) {
  if (typeof word1 !== "string" || typeof word2 !== "string") {
    return false;
  }
  if (word1.length !== word2.length) return false;
  const sorted1 = word1.split("").sort();
  const sorted2 = word2.split("").sort();

  for (let i = 0; i < sorted1.length; i++) {
    if (sorted1[i] !== sorted2[i]) {
      return false;
    }
  }

  return true;
}

function anagramTestCase(arr) {
  arr.forEach((element) => {
    const result = isAnagram(element[0], element[1]);

    if (result === element[2]) {
      console.log("Passed");
    } else {
      console.log("Failed");
    }
  });
}

console.log(
  anagramTestCase([
    ["listen", "silent", true],
    ["restful", "fluster", true],
    ["hello", "world", false],
    ["care", "race", true],
    [123, 231, false],
    ["123", "231", true],
    [null, null, false],
    [undefined, undefined, false],
    [{},[],false],
    [["care"],["acre"],false],
    ["@#$","$@#",true],
    [()=>console.log("care"),"acre",false],
    [[],[],false],
    [NaN,NaN,false],
    ['eat','tea',true]
  ])
);
