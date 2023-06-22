// DESCRIPCIÓN:
// Dada una matriz de enteros, su solución debe encontrar el entero más pequeño.

// Por ejemplo:

// Dada [34, 15, 88, 2]su solución volverá2
// Dada [34, -345, -1, 100]su solución volverá-345
// Puede suponer, a los efectos de este kata, que la matriz proporcionada no estará vacía.

class SmallestIntegerFinder {
    findSmallestInt(args) {
      let valMin= Math.min(...args)
      return valMin
    }
  }
  


    console.log(([78,56,232,12,8]),8);
    console.log(([78,56,232,12,18]),12);
    
    // assert.strictEqual(sif.findSmallestInt([78,56,232,12,18]),12,'Should return the smallest int 12');
    // assert.strictEqual(sif.findSmallestInt([78,56,232,412,228]),56,'Should return the smallest int 56');
    // assert.strictEqual(sif.findSmallestInt([78,56,232,12,0]),0,'Should return the smallest int 0');
    // assert.strictEqual(sif.findSmallestInt([1,56,232,12,8]),1,'Shou');