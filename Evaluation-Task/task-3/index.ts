// Task 3: Given an array of integers, return all subsets whose sum equals a target value.
// ​
// ​
// Input: arr = [2,3,5], target = 5​
// Output: [[2,3],[5]]



function subsetOfSum(arr:number[],target:number){
    let subsetArr:number[][] = []
    let subArr = []

    for(let i=0;i<arr.length;i++){
        for(let j=i+1;j<arr.length;j++){
            if((arr[i] + arr[j]) === target || arr[j] === target || arr[i] === target ){
                if(!subsetArr.flat().includes(arr[j])){
                    subArr.push(arr[i])
                    subArr.push(arr[j])
                    subsetArr.push(subArr)
                    subArr =[]
                }
            }
        }
        
    }
    return subsetArr
}

console.log(subsetOfSum([2,3,5],5))