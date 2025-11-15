// Write a function frequencySort(arr) that sorts numbers by their frequency (most frequent
// first). If two numbers have the same frequency, smaller number comes first.​
// Input: [4,5,6,5,4,3]
// Output: [4,4,5,5,3,6]

function frequencySort(arr: number[]) {
  let newArr = [];

  let obj: { [key: string]: number } = {};

  for (const num of arr) {
    if (!obj[num]) {
      obj[num] = 1;
    } else {
      obj[num] = obj[num] + 1;
    }
  }

  const sortedObjArr = Object.entries(obj).sort((a,b)=> b[1] - a[1])

  for(let i=0;i<sortedObjArr.length;i++) {
    let j=0
    while(j<sortedObjArr[i][1]){
        newArr.push(Number(sortedObjArr[i][0]))
        j++
    }
  }

  return newArr
}

console.log(frequencySort([4, 5, 6, 5, 4, 3]));
console.log(frequencySort([2,3,4,1,2,2,6,2]));
console.log(frequencySort([7,1,5,1,6,6,1,6,1,6,6,1,7,6]));
console.log(frequencySort([2,5,1,6,1,2,4,6]));




