// 6. Write a program that takes a list of integers as input and returns the sum of all the numbers divisible by 3.

function sumDivByThree(arr) {
  if (!Array.isArray(arr)) return "invalid input";

  for (let item of arr) {
    if (typeof item !== "number") return "invalid input";
  }

  const sum = arr
    .filter((num) => num % 3 === 0)
    .reduce((acc, item) => acc + item, 0);
  return sum;
}

function sumDivThreeTestCase(array) {
  array.forEach((element) => {
    const actualOutput = sumDivByThree(element[0]);
    actualOutput === element[1] ? console.log("Passed") : console.log("Failed");
  });
}

console.log(
  sumDivThreeTestCase([
    [[1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 18],
    [[10, 20, 30, 40, 50], 30],
    [[12412, 124151, 5123, 15436, 75667, 75763, 34563], 34563],
    [["1", "2"], "invalid input"],
    [[], 0],
    [{ a: 2, b: 3 }, "invalid input"],
    [[undefined, 1, 2, 3, 4, 5, 6], "invalid input"],
    [["1", 1, 2, "3", 4, 5, 6], "invalid input"],
    [[null, 1, 2, 3], "invalid input"],
    [1, "invalid input"],
    ["3", "invalid input"],
    [[2, 3, 4, 6, 9, 12], 30],
    [[22, 33, 42, 52, 78], 153],
    [() => new Array(), "invalid input"],
    [[(1)[(2, 3, 4)], 5, 6], "invalid input"],
  ])
);
