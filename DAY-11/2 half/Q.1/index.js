// 1. Find the highest increasing ordered chain in the given input of numbers. The order of the input should not be changed. Maximum input length can be 50.
// Test cases:
// Input: [10, 20, 15, 30, 22, 400]
// Output: [10, 15, 22, 40] or [10, 20, 30, 40] or [10, 15, 30, 40]
// input: [6, 9, 2, 0, 5, 7, 8, 2, 8]
// Output: [2, 5, 7, 8] or [0, 5, 7, 8]

function highestIncreasingOrder(arr) {
  let highestArr = [];
  let subArr = [];
  let k = 0;

  while (k < arr.length) {
    let largest = arr[k];
    for (let i = k ; i < arr.length; i++) {
      if (!subArr.includes(largest)) {
        subArr.push(largest);
      }
      if (largest < arr[i]) {
        largest = arr[i];
        subArr.push(largest);
      }
    }
    if (highestArr.length === 0 || highestArr.length < subArr.length) {
      highestArr = subArr;
    }
    subArr = [];
    k++;
  }
  return highestArr;
}

console.log(highestIncreasingOrder([10, 20, 15, 30, 22, 40]));
console.log(highestIncreasingOrder([6, 9, 2, 0, 5, 7, 8, 2, 8]));
console.log(highestIncreasingOrder([5, 2, 5, 2, 6, 7, 8, 2, 3, 4, 8, 9, 4]));
console.log(
  highestIncreasingOrder([
    2, 3, 4, 5, 1, 1, 3, 5, 6, 1, 9, 3, 4, 6, 8, 2, 7, 8, 1, 2, 3, 4, 5, 6, 7,
    8, 9,
  ])
);
console.log(
  highestIncreasingOrder([
    1, 2, 41, 23, 34, 6, 24, 23, 7, 123, 42, 55, 235, 6, 16, 1, 717, 17, 71, 8,
    181, 81, 8, 8, 1, 61, 11, 61, 6, 1, 61, 6, 1, 6, 1, 61, 6, 1, 7, 17, 7, 17,
    1, 7,
  ])
);
console.log(
  highestIncreasingOrder([
    12, 35, 2, 56, 61, 62, 362, 67, 4, 67, 1, 34, 5, 62, 7, 5, 8, 12, 17, 89,
    18, 98, 12, 19, 12, 45, 21, 15, 65, 22, 52, 66, 21, 25, 66, 28, 31, 78, 36,
    98, 39, 41, 56, 45, 70, 49, 17, 19, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59,
    60,
  ])
);
console.log(
  highestIncreasingOrder([
    1, 23, 2, 15, 3, 15, 4, 15, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17,
    18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36,
    37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50,
  ])
);
console.log(highestIncreasingOrder([1, 2, 3, 4, 5]));
console.log(highestIncreasingOrder([9, 7, 5, 3, 1]));
console.log(highestIncreasingOrder([4, 4, 4, 4, 4]));
console.log(highestIncreasingOrder([3, 10, 2, 1, 20]));
console.log(highestIncreasingOrder([50, 3, 10, 7, 40, 80]));
console.log(highestIncreasingOrder([-5, -4, -3, -2, -1]));
console.log(highestIncreasingOrder([-3, 4, -1, 0, 6, 2, 3]));
console.log(highestIncreasingOrder([]));
console.log(highestIncreasingOrder([42]));
console.log(highestIncreasingOrder([1, 2, 3, 2, 5, 6]));
console.log(highestIncreasingOrder([9, 8, 7, 3, 4, 5, 6]));
console.log(highestIncreasingOrder([1, 3, 2, 4, 3, 5, 4, 6]));
console.log(highestIncreasingOrder([1, 2, 2, 3, 3, 4, 4, 5]));
console.log(
  highestIncreasingOrder([
    10, 22, 9, 33, 21, 50, 41, 60, 80, 3, 5, 8, 9, 10, 11, 12,
  ])
);
console.log(
  highestIncreasingOrder([
    5, 1, 6, 2, 7, 3, 8, 4, 9, 10, 11, 12, 13, 0, 14, 15, 16, 17, 18, 2, 19, 20,
    21, 3, 22, 23, 24, 25, 4, 26, 27, 28, 29, 30, 5, 31, 32, 33, 34, 35, 36, 6,
    37, 38, 39, 40, 41, 42, 43, 44,
  ])
);
