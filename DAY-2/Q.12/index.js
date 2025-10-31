// 12. Write a program that finds the maximum product of three numbers in a given list of integers.

function maxOfThreeNum(arr) {
  for (const item of arr) {
    if (typeof item !== "number") return "input should be numbers";
  }
  const desc = arr.sort((a, b) => b - a);
  const maxOfThree = desc.slice(0, 3).reduce((acc, item) => (acc *= item), 1);
  if (maxOfThree.toString().includes(".")) {
    return Number(maxOfThree.toFixed(2));
  } else {
    return Number(maxOfThree);
  }
}

function maxOfThreeNumTest(arr) {
  arr.forEach((element) => {
    const result = maxOfThreeNum(element[0]);
    if (result === element[1]) {
      console.log("Passed");
    } else {
      console.log("Failed");
    }
  });

  return "Completed...!";
}

console.log(
  maxOfThreeNumTest([
    [[1, 2, 3, 4], 24],
    [["1", "2", "3"], "input should be numbers"],
    [[-4, -3, -2, -1, 0], 0],
    [[true, false, true], "input should be numbers"],
    [[-1, -2, -3, -4, -5], -6],
    [[12, 14, 15, 16], 3360],
    [["1", 2, 3, "4"], "input should be numbers"],
    [[(item) => item * 2, 1, 2, 4, 5], "input should be numbers"],
    [[1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 720],
    [[1.2, 1.3, 1.4, 1.5, 1.6], 3.36],
    [[-1.2, -1.3, -1.4, -1.5, -1.6], -2.18],
    [[[1], [2], [3]], "input should be numbers"],
    [[{ a: 1 }, { b: 2 }, { c: 3 }], "input should be numbers"],
    [[1, 10, 100, 1000, 10000, 100000], 1000000000000],
    [[1, 2, 3, false, true, "2"], "input should be numbers"],
  ])
);
