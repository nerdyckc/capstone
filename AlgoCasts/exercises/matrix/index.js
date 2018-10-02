// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
  let result = [];
  let startRow = 0;
  let endRow = n-1;
  let startCol = 0;
  let endCol = n-1;

  for (let i = 0; i<n;i++) {
    result.push([]);
  }

  let square=0;
  for (let i = startCol;i <= endCol; i++) {
    result[startRow][i] = square;
    square += 1;
  }
  startRow += 1;
  for (startRow;startRow < endRow; startRow++) {
    result[startRow][startCol] = square;
    square += 1;
  }
  endCol -= 1;
  // for (endCol;endCol > startCol; endCol--) {
  //   result[][] = square;
  //   square += 1;
  // }

  return result;
}

module.exports = matrix;
