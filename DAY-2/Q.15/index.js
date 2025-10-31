// 15. Write a program that takes a string as input and returns the reverse of each word in the string while preserving the word order.

function reverseWords(sentence) {

  if(typeof sentence !== 'string') return "input should be string"
  
  const wordsArr = sentence.split(" ");
  let rev = [];
  for (const word of wordsArr) {
    rev.push(word.split("").reverse().join(""));
  }

  return rev.join(" ");
}

function reverseWordsTest(arr) {
  arr.forEach((element) => {
    const result = reverseWords(element[0]);
    if (result === element[1]) {
      console.log("Passed");
    } else {
      console.log("Failed");
    }
  });

  return "Completed...!";
}

console.log(
  reverseWordsTest([
    ["Hello world", "olleH dlrow"],
    ["Programmers are awesome", "sremmargorP era emosewa"],
    ["Programming is fun", "gnimmargorP si nuf"],
    [12234234,"input should be string"],
    [NaN,"input should be string"],
    ["once up on a time",'ecno pu no a emit'],
    ['12 26 85 90','21 62 58 09'],
    ['@#$ 12 try',"$#@ 21 yrt"],
    [["welcome to programming"],"input should be string"],
    [{a:"welcome to programming"},"input should be string"],
    ["takes a string as input and returns the reverse of each word","sekat a gnirts sa tupni dna snruter eht esrever fo hcae drow"],
    ["you have passed !","uoy evah dessap !"],
    [true,"input should be string"],
    ["true","eurt"],
    [String("dance"),"ecnad"]
  ])
);
