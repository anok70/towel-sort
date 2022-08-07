

module.exports = function towelSort (matrix) {
let arrInt = [];

if (arguments.length){    //   когда есть параметры передаваемые в функцию
  if (matrix.length!== 0) {
    for (i = 0; i < matrix.length; i++){
      if (i%2) matrix[i].reverse(); 
      for (j = 0; j < matrix[i].length; j++) arrInt.push(matrix[i][j]);
    }
  }
}
return arrInt; 
}
