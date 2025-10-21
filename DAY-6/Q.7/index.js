// Without using .flat(), write a recursive function to flatten an array of arbitrary depth.

function flattenArr(arr, i = 0) {
  let newArr = [];

  if (i >= arr.length) {
    return newArr;
  }

  while (i < arr.length) {
    if (Array.isArray(arr[i])) {
      let j = 0;
      newArr = newArr.concat(flattenArr(arr[i], j));
    } else {
      newArr.push(arr[i]);
    }
    i++;
  }
  return newArr;
}

console.log(flattenArr([1, [2, [3, [4]], 6, 5]]));
console.log(flattenArr([1, [2, [3, [4]], 5]]));

