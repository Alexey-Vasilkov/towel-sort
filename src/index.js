
// You should implement your task here.

module.exports = function towelSort (matrix) { 
  let result = []
  if (matrix == null) return result;

  result = matrix.reduce((accumulator, current, index) => {
    if (index % 2 == 0) accumulator.push(...current)
    else accumulator.push(...current.reverse())
    return accumulator;
  }, []); 
  return result;
}
