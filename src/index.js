
// You should implement your task here.

module.exports = function towelSort (matrix) {
    console.log(matrix);
  if (matrix === undefined || matrix.length === 0) {
    return [];
  }
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