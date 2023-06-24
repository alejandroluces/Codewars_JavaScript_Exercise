function betterThanAverage(classPoints, yourPoints) {
    // Your code here
    // if (yourPoints>classPoints) return true;
    return yourPoints > classPoints.reduce((acc,cur)=>acc+cur,0)/classPoints.length;


  }

  console.log(betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75));
  console.log(betterThanAverage([12, 23, 34, 45, 56, 67, 78, 89, 90], 9));
  
  
  