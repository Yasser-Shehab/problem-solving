//Each Row in the matrex has a number of soliders that equals to 1
// We need to calculate the number of soliders and sort them from Weakest to strongest

var kWeakestRows = function (mat, k) {
  let weakestToStrongestObj = {};
  let resultArray = [];

  for (let i = 0; i < mat.length; i++) {
    weakestToStrongestObj[i] = mat[i].reduce((prev, curr) => prev + curr);
  }
  for (let value in weakestToStrongestObj) {
    resultArray.push([value, weakestToStrongestObj[value]]);
  }
  resultArray.sort((a, b) => a[1] - b[1]);

  return resultArray.slice(0, k).map((row) => {
    return row[0];
  });
};

console.log(
  kWeakestRows(
    [
      [1, 1, 0, 0, 0],
      [1, 1, 1, 1, 0],
      [1, 0, 0, 0, 0],
      [1, 1, 0, 0, 0],
      [1, 1, 1, 1, 1],
    ],
    3
  )
);
