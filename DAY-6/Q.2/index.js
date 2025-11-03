// Given a paragraph string, return an object showing the number of times each word appears (ignore case and punctuation).

function wordFrequencyCounter(wordList) {
  if (typeof wordList !== "string") return "input should be string";
  let freq = {};
  const regEx = /[a-z]/g;
  const words = wordList.split(" ");
  const wordsArr = words.map((item) => item.toLowerCase().match(regEx));
  const newArr = wordsArr.map((item) => String(item).replaceAll(",", ""));

  for (const item of newArr) {
    if (!freq[item]) {
      freq[item] = 1;
    } else {
      freq[item] = freq[item] + 1;
    }
  }

  return freq;
}

function wordFrequencyTest(array) {
  array.forEach((item) => {
    let flag = false;
    const result = wordFrequencyCounter(item[0]);
    // console.log(result)
    if (typeof result === "string" && result === item[1]) {
      console.log("Passed");
    } else {
      const resultArr = Object.entries(result);
      const expectArr = Object.entries(item[1]);

      for (let i = 0; i < resultArr.length; i++) {
        for (let j = 0; j < resultArr[i].length; j++) {
          if (resultArr[i][j] !== expectArr[i][j]) {
            flag = true;
            console.log("Failed");
          }
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
  wordFrequencyTest([
    ["Hello hello world, world!", { hello: 2, world: 2 }],
    ["Do your best!, do your best!", { do: 2, your: 2, best: 2 }],
    ["give up, don't give up", { give: 2, up: 2, dont: 1 }],
    [1234521, "input should be string"],
    [{}, "input should be string"],
    [true, "input should be string"],
    ["wake up, wake up", { wake: 2, up: 2 }],
    [["welcome ,welcome"], "input should be string"],
    [
      "why do you need sword, sword is meant to kill people. You have no enemies ,no one in the this world deserve to be hurt",
      {
        why: 1,
        do: 1,
        you: 2,
        need: 1,
        sword: 2,
        is: 1,
        meant: 1,
        to: 2,
        kill: 1,
        people: 1,
        have: 1,
        no: 2,
        enemies: 1,
        one: 1,
        in: 1,
        the: 1,
        this: 1,
        world: 1,
        deserve: 1,
        be: 1,
        hurt: 1,
      },
    ],
    [[true,false],"input should be string"],
    ["India won the women's world cup for first time",{india:1,won:1,the:1,womens:1,world:1,cup:1,for:1,first:1,time:1}],
    [[1,3,4,5],"input should be string"],
    [NaN,"input should be string"],
    [undefined,"input should be string"]
  ])
);
