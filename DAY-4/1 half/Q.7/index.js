// 7. Write a Function that Converts RGB to Hex Color Code.

function numToHex(i) {
  let colorCode = Math.floor(i).toString(16);
  if (colorCode.length < 2) {
    return colorCode.toUpperCase() + "0";
  } else {
    return colorCode.toUpperCase();
  }
}

function rgbToHex(arr) {
  for (const val of arr) {
    if (typeof val !== "number") return "input should be number";
    else if (val > 255) return "input values should be between 0-255";
  }
  return `${numToHex(arr[0])}${numToHex(arr[1])}${numToHex(arr[2])}`;
}

function rgbToHexTest(arr) {
  arr.forEach((item) => {
    const result = rgbToHex(item[0]);
    // console.log(result)
    if (result === item[1]) {
      console.log("Passed");
    } else {
      console.log("Failed");
    }
  });

  return "Completed...!";
}

console.log(
  rgbToHexTest([
    [[255, 165, 0], "FFA500"],
    [[100, 100, 100], "646464"],
    [[167, 100, 100], "A76464"],
    [["123", "234", 45], "input should be number"],
    [[500, "234", 45], "input values should be between 0-255"],
    [[true, 244, 144], "input should be number"],
    [[{}, 244, 12], "input should be number"],
    [[[255], 255, 255], "input should be number"],
    [[123, 141, 8], "7B8D80"],
    [[600, 256, "wew"], "input values should be between 0-255"],
    [[0, 0, 0], "000000"],
    [["134", "255", "123"], "input should be number"],
    [[(item) => item * 2, false, 25], "input should be number"],
    [[255, 255, 255], "FFFFFF"],
    [[102, 105, 108], "66696C"],
  ])
);
