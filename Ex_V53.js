// Los números triangulares se llaman así por la forma triangular equilátera que ocupan cuando se disponen como puntos. es decir

// 1st (1)   2nd (3)    3rd (6)
// *          **        ***
//            *         **
//                      *

// Necesitas devolver el n-ésimo número triangular. Debe devolver 0 para valores fuera de rango:

// Por ejemplo: ( Entrada --> Salida )

// 0 --> 0
// 2 --> 3
// 3 --> 6
// -10 --> 0
// solucion:


const triangular =(n) =>{

    if (n <= 0) {
        return 0;
      } else {
        return (n * (n + 1)) / 2;
      }

}

/* 
    //otra solucion:
    function triangular( n ) {
        return (n > 0) ? ((n * n) + n) / 2 : 0;
      }
*/

console.log(triangular(2));
console.log(triangular(4));
console.log(triangular(-454));

/* 

1. La función se llama triangular y toma un parámetro n.
2. Si n es menor o igual que 0, la función devuelve 0.
3. En caso contrario, la función devuelve el resultado de la siguiente fórmula:
    (n * (n + 1)) / 2 
  
*/
