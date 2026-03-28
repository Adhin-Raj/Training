// Write an async function getValueUntilGreaterThanTen(fetchFn) that:
// Repeatedly calls the provided async function fetchFn() until it returns a value greater
// than 10, and then returns that value.
// Example:
// Input:
// fetchFn → an async function that returns random numbers between 1 and 20
// Output: value: 14



async function getValueUntilGreaterThanTen(fetchFn: Function) {
  let value = 1;

  while (value <= 10) {
    value = fetchFn();
  }

  return value;
}

console.log(getValueUntilGreaterThanTen(() => Math.floor(Math.random() * 20)));

