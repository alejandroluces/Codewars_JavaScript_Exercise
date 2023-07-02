// Los números que terminan en ceros son aburridos.

// Pueden ser divertidos en tu mundo, pero no aquí.

// Deshazte de ellos. Solo los finales.

// 1450 -> 145
// 960000 -> 96
// 1050 -> 105
// -1050 -> -105
// Cero solo está bien, no te preocupes por eso. pobre tipo de todos modos
// la solucion de codewars
const noBoringZeros=(n)=> {

    while (n % 10 == 0 && n != 0) {
        n = n / 10
    }
    return n
}
console.log(noBoringZeros(1450));
console.log(noBoringZeros(960000));
console.log(noBoringZeros(1050));
console.log(noBoringZeros(-1050));
console.log(noBoringZeros(0));

// La funcion noBoringZeros recibe un parametro n
// La funcion noBoringZeros tiene un bucle while que se ejecuta mientras n modulo 10 es igual a 0 y n es diferente de 0
// n es igual a n dividido 10
// La funcion noBoringZeros retorna n
// Path: desvd.js


