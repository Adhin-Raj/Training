// 6. Write a program that takes a list of integers as input and returns the sum of all the numbers divisible by 3.

function sumDivByThree(arr) {
  const sum = arr
    .filter((num) => num % 3 === 0)
    .reduce((acc, item) => acc + item, 0);
  return sum;
}

function sumDivThreeTestCase(input, expectOutput) {
  const actualOutput = sumDivByThree(input);
 return actualOutput === expectOutput ? true : false;
}

console.log(sumDivThreeTestCase([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 18));
console.log(sumDivThreeTestCase([10, 20, 30, 40, 50], 30));
console.log(sumDivThreeTestCase([15, 25, 35, 45, 55], 105));

