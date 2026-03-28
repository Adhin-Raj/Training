// Write a function wordPattern(pattern, str) that:
// Checks whether the given string follows the same pattern defined by the characters in
// pattern.
// Each character in the pattern must map to one unique word, and the mapping must be
// consistent.
// Example:
// Input:
// pattern = "abba"
// str = "dog cat cat dog"
// Output:
// matches: true

function wordPattern(pattern: string, str: string) {
  let patternObj: { [key: string]: number[] } = {};
  let strObj: { [key: string]: number[] } = {};

  if (pattern.split("").length !== str.split(" ").length) return false;

  for (let i = 0; i < pattern.length; i++) {
    if (!patternObj[pattern[i]]) {
      patternObj[pattern[i]] = [i];
    } else {
      patternObj[pattern[i]].push(i);
    }
  }
  let words = str.split(" ");

  for (let i = 0; i < words.length; i++) {
    if (!strObj[words[i]]) {
      strObj[words[i]] = [i];
    } else {
      strObj[words[i]].push(i);
    }
  }

  let patternValues = Object.values(patternObj);
  let strValues = Object.values(strObj);
  if (
    Object.keys(strObj).length !== Object.keys(patternObj).length ||
    patternValues.length !== strValues.length
  )
    return false;

  if (JSON.stringify(patternValues) === JSON.stringify(strValues)) {
    return true;
  } else {
    return false;
  }
}

console.log(wordPattern("abba", "dog cat cat dog"));
console.log(wordPattern("abc", "dog cat rat"));
console.log(wordPattern("abc", "dog cat dog"));
console.log(wordPattern("abbbc", "dog cat cat cat rat"));
console.log(wordPattern("abbaab", "dog cat cat dog dog cat"));


