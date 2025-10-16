// 5. Write a program that takes a string as input and returns the frequency of each character in the string.

function freqOfchar(word) {
  let freq = {};
  for (const char of word) {
    if (!freq[char]) {
      freq[char] = 1;
    } else {
      freq[char]++;
    }
  }
  return freq;
}

function charFreqTestCase(input, expectOutput) {
  const actualOutput = freqOfchar(input);
  for (let actualKey in actualOutput) {
    if (actualOutput[actualKey] !== expectOutput[actualKey]) {
      return false;
    }
  }
  return true;
}

console.log(charFreqTestCase("hello", { h: 1, e: 1, l: 2, o: 1 }));
console.log(
  charFreqTestCase("programming", {
    p: 1,
    r: 2,
    o: 1,
    g: 2,
    a: 1,
    m: 2,
    i: 1,
    n: 1,
  })
);
