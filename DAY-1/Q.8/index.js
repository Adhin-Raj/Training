// anagram
const wordList = ["care", "race", "acre", "dog", "god", "cat"];
function anagram(wordList) {
  let groupingList = [];
  let grouping = [];
  for (let i = 0; i < wordList.length; i++) {
    for (let j = i + 1; j < wordList.length; j++) {
      const anagram = anagramCheck(wordList[i], wordList[j]);
      if (anagram) {
         if(!grouping[wordList[i]]){
            grouping.push(wordList[i])
         }

         if(!grouping[wordList[i]]){
            
         }
      }
    }
  }
}

function anagramCheck(word1, word2) {
  let charCount = {};
  if (word1.length !== word2.length) {
    return false;
  }
  for (const char of word1) {
    if (!charCount[char]) {
      charCount[char] = 1;
    } else {
      charCount[char]++;
    }
  }

  for (const char of word2) {
    if (!charCount[char]) {
      return false;
    } else {
      charCount[char]--;
    }
  }

  return true;
}

console.log(anagramCheck("care", "race"));
