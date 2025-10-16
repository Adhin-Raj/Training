// 10. Write a program that takes a list of strings as input and returns the longest common prefix among the strings.

function longestPrefix(wordList) {
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
  return prefix;
}

console.log(longestPrefix(["flower", "flow", "flight"]));
console.log(longestPrefix(["dog", "racecar", "car"]));
console.log(longestPrefix(["apple", "app", "application"]));
