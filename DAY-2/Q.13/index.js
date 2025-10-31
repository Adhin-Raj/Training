// 13. Write a program that takes a list of strings as input and returns the longest word among them.

function longestWord(wordList) {
  let wordLength = [];
  if(wordList.length < 2) return "minimum 2 words required"
  for (const word of wordList) {
    if (typeof word !== "string") return "input should be string";
    wordLength.push(word.length);
  }
  const indexOfLongest = wordLength.indexOf(Math.max(...wordLength));
  return wordList[indexOfLongest];
}

function longestWordTest(arr) {
  arr.forEach((item) => {
    const result = longestWord(item[0]);
    if (result === item[1]) {
      console.log("Passed");
    } else {
      console.log("Failed");
    }
  });

  return "Completed...!"
}

console.log(
  longestWordTest([
    [["apple", "banana", "orange"], "banana"],
    [["cat", "dog", "elephant", "tiger"], "elephant"],
    [["programming", "is", "fun"], "programming"],
    [["flower", "flow", "flight"], "flower"],
    [["dog", true, "car"], "input should be string"],
    [["apple", "app", "application"], "application"],
    [[12, 13, 14], "input should be string"],
    [["dance", "swim", true,["run"] ],"input should be string"],
    [["address"], "minimum 2 words required"],
    [["address", "addition"], "addition"],
    [["###flow", "###flower", "###flight"], "###flower"],
    [[NaN, 1, 2, "dance"], "input should be string"],
    [[1,2,4,false,true,"apple","application"],"input should be string"],
    [['javascript','java','c','c++','python'],"javascript"],
    [[(item)=>item * 2,'string',19],"input should be string"]
  ])
);
