// 7. Write a Function that Converts RGB to Hex Color Code.

let hexValue = "";

function numToHex(i) {
  let colorCode = Math.floor(i).toString(16);
  if (colorCode.length < 2) {
    return colorCode.toLowerCase() + "0";
  } else {
    return colorCode.toLowerCase();
  }
}

function rgbToHex(arr) {
  const obj = { r: arr[0], g: arr[1], b: arr[2] };

  return `${numToHex(obj.r)}${numToHex(obj.g)}${numToHex(obj.b)}`;
}

console.log(rgbToHex([255, 165, 0]));
console.log(rgbToHex([100, 100, 100]));
console.log(rgbToHex([167, 100, 100]));
