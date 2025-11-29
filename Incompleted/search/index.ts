//linear search

// function linearSearch(numArr:number[],tar:number) {
//     for(let i=0;i<numArr.length;i++) {
//         if(numArr[i] === tar) {
//             return i
//         }
//     }

//     return -1
// }

// console.log(linearSearch([1,2,4,5,6],42))


// binary search 

function binarySearch(arr:number[], target:number) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      return mid;
    }

    if (arr[mid] < target) {
      left = mid + 1; 
    } else {
      right = mid - 1; 
    }
  }

  return -1
}


console.log(binarySearch([1, 3, 5, 7, 9, 11, 13, 15, 17, 19],15))
