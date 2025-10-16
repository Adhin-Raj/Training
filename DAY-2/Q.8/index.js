// 8. Write a program that finds the missing number in an array containing consecutive integers from 1 to n, with one number missing.

function missingInteger(arr) {
  for (let i = 1; i <= arr.length; i++) {
    if (arr[i - 1] !== i) {
      return i;
    }
  }
  return `no number is missing`;
}

console.log(missingInteger([2, 3, 4, 5, 6]));
console.log(missingInteger([1, 2, 3, 5, 6]));