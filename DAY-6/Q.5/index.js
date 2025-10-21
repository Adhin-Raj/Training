// Implement your own version of JavaScript's Array.filter() function called myFilter() that works exactly the same.
// Then test it with a condition like "keep only numbers > 10".

function myFilter(arr, fun) {
  let filtered = [];
  for (let i = 0; i < arr.length; i++) {
    if (fun(arr[i])) {
      filtered.push(arr[i]);
    }
  }

  return filtered;
}

console.log(myFilter([1, 2, 3, 11, 12, 13, 14],(item) => item > 10));
