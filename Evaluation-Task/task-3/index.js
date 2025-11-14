// Task 3: Given an array of integers, return all subsets whose sum equals a target value.
// ​
// ​
// Input: arr = [2,3,5], target = 5​
// Output: [[2,3],[5]]
function subsetOfSum(arr, target) {
    var combination = [];
    var subArr = [];
    for (var i = 0; i < arr.length; i++) {
        var j = i + 1;
        subArr.push(arr[i]);
        combination.push(subArr);
        subArr = [];
        while (j < arr.length) {
            //   subArr.push(arr[i]);
            subArr.push(arr[j]);
            if (combination.includes(subArr)) {
                combination.push(subArr);
                subArr = [];
            }
            j++;
        }
    }
    var subSets = [];
    for (var _i = 0, combination_1 = combination; _i < combination_1.length; _i++) {
        var item = combination_1[_i];
        var total = item.reduce(function (item, acc) { return item + acc; }, 0);
        if (total === target) {
            subSets.push(item);
        }
    }
    return subSets;
}
console.log(subsetOfSum([2, 3, 5], 5));
console.log(subsetOfSum([1, 3, 4], 4));
console.log(subsetOfSum([1, 2, 3, 4, 5, 6], 6));
