// Write a function findLongestChain(arr) that:
// Finds the first longest strictly increasing chain in the array.​
// Example:​
// Input: [5, 1, 2, 3, 0, 4, 6]
// Output: ​
// List: 1,2,3,4,6
// length: 5​
// Returns both:
// the chain itself
// the length of the chain

function findLongestChain(arr: number[]) {
  let subArr: number[] = [];
  let longest: number[] = [];

  for (let i = 0; i < arr.length; i++) {
    let highest = arr[i];
    for (let j = i; j < arr.length; j++) {
      if (!subArr.includes(highest)) {
        subArr.push(highest);
      }
      if (highest < arr[j]) {
        highest = arr[j];
        subArr.push(highest);
      }
    }
    if (longest.length === 0 || longest.length < subArr.length) {
      longest = subArr;
    } 
    subArr = [];
  }
  return { List: longest, length: longest.length };
}

console.log(findLongestChain([5, 1, 2, 3, 0, 4, 6]));
console.log(findLongestChain([2,5,2,7,3,8,1]));
console.log(findLongestChain([3,1,4,6,1,1,2,3,4,5,6,2,4,23,46,632]));
console.log(findLongestChain([1,2,3,4,5,6,7,8,9,10]));
console.log(findLongestChain([1,-1,1,2,4]));
console.log(findLongestChain([2,4,2,5,2,5,6,8,9]));





