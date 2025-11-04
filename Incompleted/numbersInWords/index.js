const ones = [
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
];
const teens = [
  "ten",
  "eleven",
  "twelve",
  "thirteen",
  "fourteen",
  "fifteen",
  "sixteen",
  "seventeen",
  "eighteen",
  "nineteen",
];
const tens = [
  "twenty",
  "thirty",
  "forty",
  "fifty",
  "sixty",
  "seventy",
  "eighty",
  "ninety",
];

function numbersInWords(num) {
  if (num >= 1000000) return "input should be less than 1000000(10 lakh)";
  if (typeof num !== "number") return "input should be number";
  let words = "";

  if(num === 0) {
    return 'zero'
  }

  if (num >= 100000 && num < 1000000) {
    words += `${ones[Math.floor(num / 100000) - 1]} lakh `;
    num %= 100000;
  }

  if (num >= 20000 && num < 100000) {
    words += `${tens[Math.floor(num / 10000) - 2]} thousand`;
    num %= 10000;
  }

  if (num >= 10000 && num < 20000) {
    words += `${teens[Math.floor(num / 1000) - 10]} thousand `;
    num %= 1000;
  }
  if (num >= 1000 && num < 10000) {
    if (words.includes("thousand")) {
      words = words.replace("thousand", "");
    }
    words += `${ones[Math.floor(num / 1000) - 1]} thousand `;
    num = num % 1000;
  }
  if (num >= 100 && num < 1000) {
    words += `${ones[Math.floor(num / 100) - 1]} hundred `;
    num = num % 100;
    if (num !== 0) {
      words += `and `;
    }
  }
  if (num < 100 && num >= 20) {
    words += `${tens[Math.floor(num / 10) - 2]} `;
    num = num % 10;
  }

  if (num >= 10 && num < 20) {
    num %= 10;
    words += teens[num];
    return words;
  }

  if (num < 10 && num > 0) {
    words += ones[num - 1];
    num %= num;
  }

  if (num === 0) {
    return words.trim();
  }

  return words.trim();
}

function test(array) {
  array.forEach((element) => {
    const result = numbersInWords(element[0]);
    // console.log(result);
    if (result === element[1]) {
      console.log("Passed");
    } else {
      console.log("Failed");
    }
  });

  return "Completed...!";
}

console.log(
  test([
    [999999, "nine lakh ninety nine thousand nine hundred and ninety nine"],
    [888889, "eight lakh eighty eight thousand eight hundred and eighty nine"],
    [0, "zero"],
    [true,"input should be number"],
    [111111111111111,"input should be less than 1000000(10 lakh)"],
    [undefined,"input should be number"],
    [isNaN,"input should be number"],
    ['1234',"input should be number"],
    [12,'twelve'],
    [2,'two'],
    [100,'one hundred'],
    [2000,'two thousand'],
    [[200],"input should be number"],
    [{num:321},"input should be number"],
    [1289831238,"input should be less than 1000000(10 lakh)"]
  ])
);
