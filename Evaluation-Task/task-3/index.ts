// Task 3: Given an array of integers, return all subsets whose sum equals a target value.
// ​
// ​
// Input: arr = [2,3,5], target = 5​
// Output: [[2,3],[5]]

function subsetOfSum(arr: number[], target: number) {
  let combination: number[][] = [];
  let subArr: number[] = [];

  for (let i = 0; i < arr.length; i++) {
    let j = i + 1;
    subArr.push(arr[i]);
    combination.push(subArr);
    subArr = [];
    while (j < arr.length) {
      //   subArr.push(arr[i]);
      subArr.push(arr[j]);
      if (combination.(subArr)) {
        combination.push(subArr);
        subArr = [];
      }
      j++;
    }
  }

  let subSets = [];

  for (let item of combination) {
    const total = item.reduce((item, acc) => item + acc, 0);
    if (total === target) {
      subSets.push(item);
    }
  }

  return subSets;
}

console.log(subsetOfSum([2, 3, 5], 5));
console.log(subsetOfSum([1, 3, 4], 4));
console.log(subsetOfSum([1, 2, 3, 4, 5, 6], 6));
