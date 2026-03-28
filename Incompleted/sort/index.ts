// bubble sort 

function bubbleSort(arr:number[]) {
    for(let i=0;i< arr.length-1;i++) {
        for(let j=0;j<arr.length-i-1;j++) {
            if(arr[j] > arr[j+1]) {
                let temp = arr[j+1]
                arr[j+1] = arr[j]
                arr[j] = temp
            }
        }
    }

    return arr
}

console.log(bubbleSort([1,6,3,2,7,3])) 

// selection sort 

function selectionSort(arr:number[]) {
    let newArr = [...arr]
    for(let i = 0 ;i < newArr.length -1 ;i++) {
        let lowestIndex = i
        for(let j = i+1;j < newArr.length ;j++) {
            if(newArr[j] < newArr[lowestIndex]) {
                lowestIndex = j
            }
        }

        [newArr[i],newArr[lowestIndex]] = [newArr[lowestIndex],newArr[i]]
    }

    return newArr
}

console.log(selectionSort([1,6,3,2,7])) 


// insertion sort 

function insertionSort(arr:number[]) {
    
    for(let i=1;i<arr.length;i++){
     for(let j= i ;j>0;j--) {
        if(arr[j] < arr[j-1]) {
            [arr[j],arr[j-1]] = [arr[j-1],arr[j]]
        }
        else{
            break
        }
     }   
    }

    return arr
}

console.log(insertionSort([1,6,3,2,8]))


// Quick Sort 

function quickSort(arr:number[]):number[] {
    if(arr.length <= 1) return arr

    const pivot = arr[Math.floor(arr.length/2)]
    let left:number[] = []
    let right:number[] = []
    let equal:number[] = []

    for(let val of arr) {
        if(val < pivot) left.push(val)
        else if (val > pivot) right.push(val)
        else equal.push(val)
    }

    return [...quickSort(left),...equal,...quickSort(right)]
}

console.log(quickSort([4,1,5,6,8,2]))


// merge Sort 

function mergeSort(arr: number[]) {
  if (arr.length <= 1) return arr; 

  const mid = Math.floor(arr.length / 2);
  const left: number[] = mergeSort(arr.slice(0, mid));
  const right: number[] = mergeSort(arr.slice(mid));

  return merge(left, right);
}

function merge(left: number[], right: number[]) {
  const result = [];
  let i = 0,j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      result.push(left[i++]);
    } else {
      result.push(right[j++]);
    }
  }

  return result.concat(left.slice(i), right.slice(j));
}

console.log(mergeSort([5, 3, 8, 4, 2]));
 