
// Retornar el valor promedio de un array

function findAverage(array) {
    // your code here
    if (array.length===0) {return 0};
    return array.reduce((acc,cur)=>acc+cur,0)/array.length
    
  }

  console.log(findAverage([1,2,3]));
  console.log(findAverage([1,2,3,4]));
  console.log(findAverage([]));
  
  