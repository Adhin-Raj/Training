// Write a function that takes an array of integers and returns a new array where all even numbers appear first, followed by all odd numbers, while maintaining their relative order.

function rearrangeNumbers(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] !== "number") {
      return "input should be numbers";
    }
  }

  const even = arr.filter((item) => item % 2 === 0);
  const odd = arr.filter((item) => item % 2 !== 0);

  return [even, odd].flat();
}

function rearrangeNumbersTest(arr) {
  arr.forEach((item) => {
    let flag = true;
    const result = rearrangeNumbers(item[0]);
    if (result === item[1]) {
      console.log("Passed");
    } else {
      for (let i = 0; i < result.length; i++) {
        if (result[i] !== item[1][i]) {
          console.log("Failed");
          flag = false;
          i = result.length;
        }
      }

      if (flag) {
        console.log("Passed");
      }
    }
  });

  return "Completed...!";
}

console.log(
  rearrangeNumbersTest([
    [
      [3, 2, 4, 1, 5, 8],
      [2, 4, 8, 3, 1, 5],
    ],
    [
      [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      [2, 4, 6, 8, 10, 1, 3, 5, 7, 9],
    ],
    [
      [3, 56, 2, 62, 25, 69, 92],
      [56, 2, 62, 92, 3, 25, 69],
    ],
    [
      [4, 62, 27, 72, 7, 28, 95],
      [4, 62, 72, 28, 27, 7, 95],
    ],
    [
      [2, 4, 6, 19, 39, 358, 234, 25],
      [2, 4, 6, 358, 234, 19, 39, 25],
    ],
    [
      [5, 2, 6, 79, 0, 6],
      [2, 6, 0, 6, 5, 79],
    ],
    [["1", 2, 5, 56, 7], "input should be numbers"],
    [
      [1, 2, 4, 5, 8, 0],
      [2, 4, 8, 0, 1, 5],
    ],
    [[true, false, 4, 5, 8, 0], "input should be numbers"],
    [[true, 2, 5, "2"], "input should be numbers"],
    [[[1], [2], 4], "input should be numbers"],
    [[{ a: 1 }, { b: 2 }], "input should be numbers"],
    [[2,3,5,6,8],[2,6,8,3,5]],
    [[-1,-2,-3,-4],[-2,-4,-1,-3]],
    [[5,8,29,758,28],[8,758,28,5,29]]
  ])
);
