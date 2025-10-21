// Write a function that takes an array of integers and returns a new array where all even numbers appear first, followed by all odd numbers, while maintaining their relative order.

function rearrangeNumbers(arr) {
  const even = arr.filter((item) => item % 2 === 0);
  const odd = arr.filter((item) => item % 2 !== 0);

  return [even, odd].flat();
}

console.log(rearrangeNumbers([3, 2, 4, 1, 5, 8]));
console.log(rearrangeNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
