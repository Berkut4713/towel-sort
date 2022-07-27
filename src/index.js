
// You should implement your task here.

module.exports = function towelSort (matrix) {
  /*function towelSort(matrix) {*/
  let lines = matrix.length;
  let columns = matrix[0].length;
  let mass = [];
  for (let i = 0; i < lines; i++) {
    if (i%2 !== 0) {
        mass = mass.concat(matrix[i].reverse());
    } else {
        mass = mass.concat(matrix[i]);
    }
  }
  return mass;
}
towelSort ([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [9, 6, 4],
  ]);