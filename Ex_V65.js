/*
Enunciado
Desarrollar una función en JavaScript que acepte un array de números enteros como entrada y calcule la suma de todos los números que sean múltiplos de 3 y 5 dentro del array.

Entrada:

Un array de números enteros numeros.
Salida:

La función debe imprimir en la consola la suma total de los números que sean múltiplos de 3 y 5.
Ejemplo de Entrada y Salida
Entrada:

numeros: [3, 5, 15, 22, 9, 30].
Salida en la Consola:

Suma de los múltiplos de 3 y 5: 62.
La función debe recorrer el array de números, identificando aquellos que sean múltiplos de 3 y 5, sumarlos y luego imprimir el resultado en la consola en el formato descrito en el ejemplo.


*/

const numeros = [3, 5, 15, 22, 9, 30];

const sumaMultiplos = (numeros) => {
    return numeros.filter((numero) => numero % 3 === 0 || numero % 5 === 0).reduce((a, b) => a + b);
}

console.log(sumaMultiplos(numeros));
