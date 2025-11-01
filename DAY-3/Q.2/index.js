// 2. Write a program to find whether a given number is an Armstrong number ( An Armstrong number is the sum of its own digits, each raised to the power of the number of digits).

function armstrongNumber(num) {
  if (typeof num !== "number") return "input should be number";

  const arrStr = num.toString().split("");
  const lengthNum = arrStr.length;
  const sum = arrStr.reduce(
    (acc, item) => Math.pow(Number(item), lengthNum) + acc,
    0
  );
  return sum === num ? true : false;
}

function armstrongTest(array) {
  array.forEach((element) => {
    const result = armstrongNumber(element[0]);
    if (result === element[1]) {
      console.log("Passed");
    } else {
      console.log("Failed");
    }
  });

  return "Completed...!"
}

console.log(
  armstrongTest([
    [153, true],
    [370, true],
    [372, false],
    [371, true],
    [true, "input should be number"],
    [[45], "input should be number"],
    ['123',"input should be number"],
    [-372,false],
    [1.35,false],
    [111,false],
    [9474,true],
    [()=>item * 3,"input should be number"],
    [{a:153},"input should be number"],
    [81,false],
    [98,false]
  ])
);
