
// 4. Write a function which accepts two arrays and a position value, where the values of the second array should be placed in the given position of the first array. The function should return an updated array.

function positionChanging(arr1,arr2,target){
   const noOfDelete =0
   const revArr2 = arr2.reverse()
   for(let item of revArr2){
      arr1.splice(target,noOfDelete,item)
   }
   return arr1
}

console.log(positionChanging( [1, 2, 3], [4, 5, 6], 2))
console.log(positionChanging( [4,5,6,7], [7,9,2], 1))
