// https://www.codewars.com/kata/5596700a386158e3aa000011/train/javascript


// Pirámide binaria 101
// convertir el resultado a binario
// volver como una cadena
// Ejemplo
// 1, 4  -->  1111010

// because:
//     1  // 1 in binary is 1
// +  10  // 2 in binary is 10
// +  11  // 3 in binary is 11
// + 100  // 4 in binary is 100
// -----
//   122  // 122 in binary is 1111010


function binaryPyramid(m, n) {
    let result = 0;
    for (let i = m; i <= n; i++) {
    console.log(i);
    result += parseInt(i.toString(2));
    console.log(result);
      
    }
    return result.toString(2);
    
    
  }
console.log(binaryPyramid(1,4));
// console.log(binaryPyramid(1,6));
// console.log(binaryPyramid(6,20));
// console.log(binaryPyramid(21,60));
/*
1. Comenzamos definiendo una función llamada binaryPyramid que toma dos argumentos m y n.
2. A continuación definimos una variable llamada resultado con valor 0. Este será el resultado final.
3. Utilizamos un bucle for para iterar desde m hasta n (ambos inclusive).
4. Dentro del bucle for, convertimos cada número de m a n en una cadena binaria usando toString(2) y 
    luego convertimos esa cadena binaria en un entero usando parseInt().
5. Añadimos este entero al resultado.
6. Finalmente, devolvemos el resultado final convertido de nuevo a cadena binaria utilizando toString(2). 

*/