/**
 * @format
 * @param {number[][]} mat
 * @return {number}
 */

var diagonalSum = function (mat) {
  let sum = 0;
  let mid = 0;
  if (mat.length == 1) return mat[0][0];
  for (let i = 0, j = 0; i < mat.length; i++, j++) {
    sum += mat[i][j];
  }
  for (let i = 0, j = mat[0].length - 1; i < mat.length; i++, j--) {
    if (mat.length % 2 != 0 && i == Math.floor(mat.length / 2)) {
      mid = mat[i][j];
    } else {
      sum += mat[i][j];
    }
  }
  return sum;
};

let mat = [
  [1, 1, 1, 1],
  [1, 1, 1, 1],
  [1, 1, 1, 1],
  [1, 1, 1, 1],
];

let result = diagonalSum(mat);

console.log(result);
