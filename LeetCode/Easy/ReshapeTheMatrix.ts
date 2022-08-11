//Problem from: https://leetcode.com/problems/reshape-the-matrix/
//Pseudo Code
//Frist Check if the new Matrix has the same Rows and Colums by Doing Rows * Colums
//If false return the matrix as it is
//if true copy the old matrix to the new Matrix
//we do a two for loops one for rows and one for colums

var matrixReshape = function (mat: number[][], r: number, c: number) {
  let matrixRows: number = mat.length;
  let matrixColumns: number = mat[0].length;
  if (matrixRows * matrixColumns != r * c) return mat;
  //The Return array dimensions
  const result: number[][] = [];
  let row: number = 0;
  let col: number = 0;

  for (let i = 0; i < r; i++) {
    //Create a new Row for the number of r
    result.push([]);
    for (let j = 0; j < c; j++) {
      result[i].push(mat[row][col]);
      //When you reach the end of columns go to the next row and reset the columns
      if (++col === mat[0].length) {
        row++;
        col = 0;
      }
    }
  }
  return result;
};

console.log(
  matrixReshape(
    [
      [1, 2],
      [3, 4],
    ],
    1,
    4
  )
);
