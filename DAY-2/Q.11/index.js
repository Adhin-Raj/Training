// 11. Write a program that determines if a given number is a perfect square. A perfect square is an integer that is equal to the square of another integer.

function perfectSquare(n) {
  if (typeof n !== "number") {
    return "input should be number";
  }

  const sqrtArr = Math.sqrt(n).toString().split("");
  for (const item of sqrtArr) {
    if (item === ".") {
      return false;
    }
  }

  return true;
}

function perfectSquareTest(array) {
  array.forEach((element) => {
    const result = perfectSquare(element[0]);
    if (result === element[1]) {
      console.log("Passed");
    } else {
      console.log("Failed");
    }
  });

  return "Completed...!";
}

console.log(
  perfectSquareTest([
    [16, true],
    [10, false],
    [25, true],
    ["2", "input should be number"],
    [256, true],
    [[], "input should be number"],
    [5, false],
    [(item) => item + 2, "input should be number"],
    [56, false],
    [81, true],
    [{}, "input should be number"],
    ["true", "input should be number"],
    [10000, true],
    [65, false],
    [6.25, false],
  ])
);
