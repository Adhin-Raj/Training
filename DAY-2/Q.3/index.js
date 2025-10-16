// 3. Write a program that takes a list of integers as input and returns a new list with only the even numbers.

function listOfEven(arr) {
  let evenList = [];
  for (const num of arr) {
    if (num % 2 === 0) {
      evenList.push(num);
    }
  }

  return evenList;
}

function listOfEvenTestCase(input, output) {
  const actualOutput = listOfEven(input);

  if (actualOutput.length !== output.length) return false;
  for (let i = 0; i < actualOutput.length; i++) {
    if (actualOutput[i] !== output[i]) {
      return false;
    }
  }

  return true;
}

console.log(listOfEvenTestCase([1, 2, 3, 4, 5, 6], [2, 4, 6]));
console.log(listOfEvenTestCase([7, 8, 9, 10, 11, 12], [8, 10, 12]));
console.log(listOfEvenTestCase([2, 4, 6, 8, 10], [2, 4, 6, 8, 10]));
