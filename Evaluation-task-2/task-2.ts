// Write a function groupAnagrams(words) that groups a list of words by their anagram
// type.​
// Input: ["eat", "tea", "tan", "ate", "nat", "bat"]
// Output: [["eat","tea","ate"], ["tan","nat"], ["bat"]]


function groupAnagram(wordList:string[]):string[][] {
    let sortedWordList:string[] = [];
    let sub:string[] = [];
    let groupedAnagram:string[][] = [];


  for (let item of wordList) {
    let sortedWord = item.split("").sort().join("");
    sortedWordList.push(sortedWord);
  }

  for (let i = 0; i < sortedWordList.length; i++) {
    for (let j = i; j < sortedWordList.length; j++) {
      if (sortedWordList[i] === sortedWordList[j] && !groupedAnagram.flat().includes(wordList[j])) {
        sub.push(wordList[j]);
      }
    }

    if (sub.length > 0) {
      groupedAnagram.push(sub);
      sub = [];
    }
  }

  return groupedAnagram;
}

console.log(groupAnagram(["eat", "tea", "tan", "ate", "nat", "bat"]))
console.log(groupAnagram(["eat", "tea", "tan", ]))
console.log(groupAnagram(["silent", "listen", "tan",'go']))


