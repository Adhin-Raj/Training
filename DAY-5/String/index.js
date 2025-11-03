//1

const str = " Hello, World! ";
console.log(str.trim().replace(", ", "").replace("!", "").toLowerCase());

//2

function extractUserName(str) {
  if (typeof str !== "string") return "input should be string";
  else if (!str.includes("@")) return "input should contain '@' symbol";
  const index = str.indexOf("@");
  return str.slice(0, index);
}

function extractUserNameTest(array) {
  array.forEach((element) => {
    const result = extractUserName(element[0]);
    if (result === element[1]) {
      console.log("Passed");
    } else {
      console.log("Failed");
    }
  });

  return "Completed...!";
}

console.log(
  extractUserNameTest([
    ["walter@gmail.com", "walter"],
    ["jasse.pinkman@gmail.com", "jasse.pinkman"],
    [1242422424, "input should be string"],
    [true, "input should be string"],
    ["donald", "input should contain '@' symbol"],
    [null, "input should be string"],
    [undefined, "input should be string"],
    ["sample@gmail.com", "sample"],
    [{}, "input should be string"],
    [["walter@gmail.com"], "input should be string"],
    ["username@yahoo.in", "username"],
    ["", "input should contain '@' symbol"],
    [Infinity, "input should be string"],
    ["user#!123@gmail.com", "user#!123"],
    ["1234@gmail.com", "1234"],
  ])
);

//3

function capitalize(sentence) {
  if (typeof sentence !== "string") return "input should be string";
  const sentenceArr = sentence.split(" ");

  let capitalize = "";
  for (let j = 0; j < sentenceArr.length; j++) {
    for (let i = 0; i < sentenceArr[j].length; i++) {
      if (i === 0) {
        capitalize += sentenceArr[j][i].toUpperCase();
      } else {
        capitalize += sentenceArr[j][i];
      }
    }
    if (j < sentenceArr.length - 1) {
      capitalize += " ";
    }
  }

  return capitalize;
}

function capitalizeTest(array) {
  array.forEach((element) => {
    const result = capitalize(element[0]);
    if (result === element[1]) {
      console.log("Passed");
    } else {
      console.log("Failed");
    }
  });

  return "Completed...!";
}

console.log(
  capitalizeTest([
    ["hello world", "Hello World"],
    ["why do you want sword!", "Why Do You Want Sword!"],
    ["sword is meant to kill", "Sword Is Meant To Kill"],
    ["You have no enemies", "You Have No Enemies"],
    [12345, "input should be string"],
    [true, "input should be string"],
    [null, "input should be string"],
    [undefined, "input should be string"],
    ["123 hello world", "123 Hello World"],
    ["", ""],
    [
      "no one in the world deserve to be hurt",
      "No One In The World Deserve To Be Hurt",
    ],
    [["Password must be strong"], "input should be string"],
    [{ sentence: "Password must be strong" }, "input should be string"],
    [NaN, "input should be string"],
    ["rat race", "Rat Race"],
  ])
);

//4

function reverseWords(sentence) {
  if (typeof sentence !== "string") return "input should be string";
  return sentence.split(" ").reverse().join(" ");
}

function reverseWordsTest(array) {
  array.forEach((element) => {
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
    ["reverses the order of words", "words of order the reverses"],
    ["hello world", "world hello"],
    [12345, "input should be string"],
    ["You have no enemies", "enemies no have You"],
    [true, "input should be string"],
    [null, "input should be string"],
    ["sword is meant to kill", "kill to meant is sword"],
    [undefined, "input should be string"],
    ["", ""],
    [["Password must be strong"], "input should be string"],
    [{ sentence: "Password must be strong" }, "input should be string"],
    [NaN, "input should be string"],
    ["rat race", "race rat"],
    ["say my name", "name my say"],
    [Infinity, "input should be string"],
  ])
);

//5

function vowelCount(str) {
  if (typeof str !== "string") return "input should be string";
  const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  let count = 0;
  for (const word of str) {
    if (vowels.includes(word)) {
      count++;
    }
  }

  return count;
}

function vowelCountTest(array) {
  array.forEach((element) => {
    const result = vowelCount(element[0]);
    if (result === element[1]) {
      console.log("Passed");
    } else {
      console.log("Failed");
    }
  });

  return "Completed...!";
}

console.log(
  vowelCountTest([
    ["hello", 2],
    ["count the vowels", 5],
    [13224, "input should be string"],
    ["You have no enemies", 9],
    [true, "input should be string"],
    [null, "input should be string"],
    ["sword is meant to kill", 6],
    ["A true warrior doesn't need sword", 11],
    [["count the word"], "input should be string"],
    [{ a: "word" }, "input should be string"],
    [undefined, "input should be string"],
    ["no one in the world deserve to be hurt", 12],
    [Infinity, "input should be string"],
    ["fly", 0],
    ["", 0],
  ])
);
