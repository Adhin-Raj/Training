// Write a program that prints this pattern for n = 5

function stringPattern(n) {
  let start = 65;

  for (let i = 0; i < n; i++) {
    let charCode = start + i;
    let combine = "";
    let char = String.fromCharCode(charCode);
    for (let j = 0; j <= i; j++) {
      combine += char;
    }
    console.log(combine);
  }
  return;
}

console.log(stringPattern(4));
