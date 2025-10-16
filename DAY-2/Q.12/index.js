// 12. Write a program that finds the maximum product of three numbers in a given list of integers.

function maxOfThreeNum(arr) {
  const desc = arr.sort((a, b) => b - a);
  const maxOfThree = desc.slice(0, 3).reduce((acc, item) => (acc *= item), 1);
  return maxOfThree;
}

console.log(maxOfThreeNum([1, 2, 3, 4]));
console.log(maxOfThreeNum([-4, -3, -2, -1, 0]));
console.log(maxOfThreeNum([-1, -2, -3, -4, -5]));
