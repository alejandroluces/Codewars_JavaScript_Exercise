/*

Dos enteros son coprimos si su único máximo común divisor es 1.

Tarea
En este kata, se le dará un número n >= 2y se generará una lista con todos los números enteros positivos menores que gcd(n, k) == 1, ksiendo cualquiera de los números de salida.

La lista no puede incluir entradas duplicadas y debe ordenarse.

Ejemplos
2 -> [1]
3 -> [1, 2]
6 -> [1, 5]
10 -> [1, 3, 7, 9]
20 -> [1, 3, 7, 9, 11, 13, 17, 19]
25 -> [1, 2, 3, 4, 6, 7, 8, 9, 11, 12, 13, 14, 16, 17, 18, 19, 21, 22, 23, 24]
30 -> [1, 7, 11, 13, 17, 19, 23, 29]

*/

const coprimes = n => {
    let arr = [];
    for (let i = 1; i < n; i++) {
        if (gcd(n, i) === 1) arr.push(i);
        
    }
    return arr;
    }

    const gcd = (a, b) => {
    if (b === 0) return a;
    return gcd(b, a % b);

    }

    console.log(coprimes(2)); // [1]
    console.log(coprimes(3)); // [1, 2]
    console.log(coprimes(6)); // [1, 5]
    console.log(coprimes(10)); // [1, 3, 7, 9]

    