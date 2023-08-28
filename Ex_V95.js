/*

Si enumeramos todos los números naturales menores de 10 que son múltiplos de 3 o 5, obtenemos 3, 5, 6 y 9. La suma de estos múltiplos es 23.

Termine la solución para que devuelva la suma de todos los múltiplos de 3 o 5 debajo del número pasado.

Además, si el número es negativo, devuelve 0.

Nota: Si el número es múltiplo de 3 y 5, cuéntalo solo una vez .

*/


const solution = (number) => {
  let sum = 0;
  for (let i = 0; i < number; i++) {
    if (i % 3 == 0 || i % 5 == 0) sum += i;
  }
  return sum;
}

console.log(solution(10)); // 23

   




