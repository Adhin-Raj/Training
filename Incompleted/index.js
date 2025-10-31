let arr1= [1,3,6,0,0]
let arr2=[2,4,5]
let m=3
let n=3

// for(let i=0;i<=(m+n);i++){
//     if(arr1[i] === 0){
//         arr1.pop()
//         i--
//     }
// }

// for(let i=0;i<arr2.length;i++){
//     arr1.push(arr2[i]) 
// }

// for(let i=0;i<arr1.length;i++){
//     for(j=i+1;j<arr1.length-1;j++){
//         if(arr1[i] > arr1[j]){
//             let temp = arr1[i]
//             arr1[i] = arr1[j]
//             arr1[j] =temp
//         }
//     }
// }


function merge(nums1, m, nums2, n) {
    let x = m-1
    let y = n-1
    for(let i=m+n-1;i >= 0;i--){
        if(nums1[x] > nums2[y] || y < 0){
            nums1[i] = nums1[x]
            x--
        } else {
            nums1[i] = nums2[y]
            y--
        }
    }
    console.log(nums1)
};
merge(arr1,m,arr2,n)


