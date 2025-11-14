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


// function merge(nums1, m, nums2, n) {
//     let x = m-1
//     let y = n-1
//     for(let i=m+n-1;i >= 0;i--){
//         if(nums1[x] > nums2[y] || y < 0){
//             nums1[i] = nums1[x]
//             x--
//         } else {
//             nums1[i] = nums2[y]
//             y--
//         }
//     }
//     console.log(nums1)
// };
// merge(arr1,m,arr2,n)


// You are given an array prices where prices[i] is the price of a given stock on the ith day.
// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.
// Example 1:
// Input: prices = [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
// Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.


// function buySell(prices) {
//     let lowest = prices[0]
//     let profit = 0
//     for(let i=0;i<prices.length;i++) {
//      const newProfit = prices[i] - lowest
//         if(prices[i] < lowest  ) {
//             lowest = prices[i]
//         }
//         if(profit < newProfit) {
//             profit = newProfit
//         }
//     }

//     return profit
// }


// console.log(buySell([7,2,5,3,6,4,1]))
// console.log(buySell([1,2,3,4,5]))
// console.log(buySell([6,2,1,2,8,9,3]))
// console.log(buySell([1,1,18,1,1,1]))


