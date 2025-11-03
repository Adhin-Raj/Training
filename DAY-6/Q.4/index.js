// Write a program that prints this pattern for n = 5

function stringPattern(n) {
  if (typeof n !== "number") return "input should be number";
  
  if(n >0 && n < 27) {
    let patternArr = [];
  let start = 65;

  for (let i = 0; i < n; i++) {
    let charCode = start + i;
    let combine = "";
    let char = String.fromCharCode(charCode);
    for (let j = 0; j <= i; j++) {
      combine += char;
    }
    patternArr.push(combine);
    // console.log(combine);
  }
  return patternArr;
  }
  else {
    return 'input should be between 0 and 26'
  }
}

function stringPatternTest(array) {
  array.forEach((item) => {
    const result = stringPattern(item[0]);
    console.log(result);
    if (JSON.stringify(result) === JSON.stringify(item[1])) {
      console.log("Passed");
    } else {
      console.log("Failed");
    }
  });

  return "Completed...!";
}

console.log(
  stringPatternTest([
    [4, ["A", "BB", "CCC", "DDDD"]],
    [7, ["A", "BB", "CCC", "DDDD", "EEEEE", "FFFFFF", "GGGGGGG"]],
    [1, ["A"]],
    ["1", "input should be number"],
    [
      10,
      [
        "A",
        "BB",
        "CCC",
        "DDDD",
        "EEEEE",
        "FFFFFF",
        "GGGGGGG",
        "HHHHHHHH",
        "IIIIIIIII",
        "JJJJJJJJJJ",
      ],
    ],
    [true, "input should be number"],
    [null, "input should be number"],
    [undefined, "input should be number"],
    [26,[
  'A',
  'BB',
  'CCC',
  'DDDD',
  'EEEEE',
  'FFFFFF',
  'GGGGGGG',
  'HHHHHHHH',
  'IIIIIIIII',
  'JJJJJJJJJJ',
  'KKKKKKKKKKK',
  'LLLLLLLLLLLL',
  'MMMMMMMMMMMMM',
  'NNNNNNNNNNNNNN',
  'OOOOOOOOOOOOOOO',
  'PPPPPPPPPPPPPPPP',
  'QQQQQQQQQQQQQQQQQ',
  'RRRRRRRRRRRRRRRRRR',
  'SSSSSSSSSSSSSSSSSSS',
  'TTTTTTTTTTTTTTTTTTTT',
  'UUUUUUUUUUUUUUUUUUUUU',
  'VVVVVVVVVVVVVVVVVVVVVV',
  'WWWWWWWWWWWWWWWWWWWWWWW',
  'XXXXXXXXXXXXXXXXXXXXXXXX',
  'YYYYYYYYYYYYYYYYYYYYYYYYY',
  'ZZZZZZZZZZZZZZZZZZZZZZZZZZ'
]],
  [0,"input should be between 0 and 26"],
  [90,"input should be between 0 and 26"],
  [2,['A','BB']]
  [[25],"input should be number"],
  [{num:17},"input should be number"],
  [Infinity,"input should be number"]
])
);
