function createSpiralMatrix(n) {
  const matrix = Array.from({ length: n }, (_) => Array(n).fill(0));

  let top = 0;
  let bottom = n - 1;
  let left = 0;
  let right = n - 1;
  let counter = 1;

  while (top <= bottom && left <= right) {
    for (let i = left; i <= right; i++) {
      matrix[top][i] = counter++;
    }

    top++;

    for (let i = top; i <= bottom; i++) {
      matrix[i][right] = counter++;
    }

    right--;

    if (top <= bottom) {
      for (let i = right; i >= left; i--) {
        matrix[bottom][i] = counter++;
      }
      bottom--;
    }

    if (left <= right) {
      for (let i = bottom; i >= top; i--) {
        matrix[i][left] = counter++;
      }
      left++;
    }
  }

  return matrix;
}

const size = 3
const spiralMatrix = createSpiralMatrix(size);

for (let r = 0; r < size; r++) {
  console.log(spiralMatrix[r].map(val => String(val).padStart(2, ' ')).join(' '));
}