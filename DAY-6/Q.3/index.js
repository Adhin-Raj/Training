// Description:
// Given an array containing numbers from 1 to n with one missing, find the missing number.
// You cannot use .includes() or .indexOf() directly.

function findMissingNumber(arr) {
  for (let i = 1; i <= arr.length; i++) {
    if (arr[i - 1] !== i) {
      return i;
    }
  }

  return `no number is missing`;
}

console.log(findMissingNumber([1, 2, 3, 5, 6]));
console.log(findMissingNumber([1, 2, 3, 4, 5, 6, 7, 8, 10, 11]));
