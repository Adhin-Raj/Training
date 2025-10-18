// 1. Write a function to flatten an array of arbitrarily nested arrays into a flat array.

function flattenArr(arr){
  return arr.flat(Infinity)
}

console.log(flattenArr([1, [2, [3, [4]], 5]]))