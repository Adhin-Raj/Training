// 16. Write a program that takes a list of strings as input and returns the list sorted based on the length of the strings, with shorter strings appearing first. If two strings have the same length, maintain their relative order.

function stringSortLength(strList) {
  let lengthStr = {};

  for (const word of strList) {
    lengthStr[word] = word.length;
  }

  const sortedArr = Object.entries(lengthStr)
    .sort((a, b) => a[1] - b[1])
    .flat();
  const filterByType = sortedArr.filter(
    (item) => typeof item === "string" && item
  );

  return filterByType;
}

console.log(stringSortLength(["open", "source", "programming", "is", "fun"]));
console.log(stringSortLength(["hello", "world"]));
console.log(stringSortLength(["cat", "dog", "elephant", "tiger"]));
