// Given a paragraph string, return an object showing the number of times each word appears (ignore case and punctuation).

function wordFrequencyCounter(wordList) {
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

console.log(wordFrequencyCounter("Hello hello world, world!"));
