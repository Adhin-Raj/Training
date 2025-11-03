// 8. Write a program that finds the maximum product of three numbers in a given list of integers.

function maxOfProduct(arr) {
  if (!Array.isArray(arr)) {
    return "should be a list of numbers";
  } else {
    for (let i = 0; i < arr.length; i++) {
      if (typeof arr[i] !== "number") {
        return "input should be number";
      }
    }
  }

  const descArr = arr.sort((a, b) => b - a);
  return descArr.slice(0, 3).reduce((acc, item) => (acc *= item), 1);
}

function maxOfProductTest(arr) {
  arr.forEach((item) => {
    const result = maxOfProduct(item[0]);
    // console.log(result);
    if (result === item[1]) {
      console.log("Passed");
    } else {
      console.log("Failed");
    }
  });

  return "Completed...!";
}

console.log(
  maxOfProductTest([
    [[1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 720],
    [[10, 20, 30, 40, 50], 60000],
    [[12412, 124151, 5123, 15436, 75667, 75763, 34563], 711727752801071],
    [["1", "2"], "input should be number"],
    [[], 1],
    [{ a: 2, b: 3 }, "should be a list of numbers"],
    [[undefined, 1, 2, 3, 4, 5, 6], "input should be number"],
    [["1", 1, 2, "3", 4, 5, 6], "input should be number"],
    [[null, 1, 2, 3], "input should be number"],
    [1, "should be a list of numbers"],
    ["3", "should be a list of numbers"],
    [[2, 3, 4, 6, 9, 12], 648],
    [[22, 33, 42, 52, 78], 170352],
    [() => new Array(), "should be a list of numbers"],
    [[(1)[(2, 3, 4)], 5, 6], "input should be number"],
  ])
);
