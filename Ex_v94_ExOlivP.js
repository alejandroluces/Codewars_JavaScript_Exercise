/*
1)
Duplicar los números en un array:
Planteamiento: Escribe una función que tome un array de números como entrada y devuelva un nuevo array donde cada número se haya duplicado.

Entrada: [3, 5, 7, 9]
Retorno: [6, 10, 14, 18]


*/

const duplicateNumbers = numbers => {
    return numbers.map(number => number * 2);
}
console.log(duplicateNumbers([3, 5, 7, 9]));

/*
2)
Convertir nombres en iniciales:
Planteamiento: Escribe una función que tome un array de nombres completos y devuelva un nuevo array con las iniciales de cada nombre.

Entrada: ["John Doe", "Jane Smith", "Michael Johnson"]
Retorno: ["JD", "JS", "MJ"]


*/

const getInitials = names => {
    let dividir = names.map(name => name.split(" "));
    console.log(dividir);
    return dividir.map(name => name[0][0] + name[1][0]);

}
console.log(getInitials(["John Doe", "Jane Smith", "Michael Johnson"]));


/*
3)
Calcular el cuadrado de los números en un array:
Planteamiento: Escribe una función que tome un array de números como entrada y devuelva un nuevo array donde cada número se haya elevado al cuadrado.

Entrada: [2, 4, 6, 8]
Retorno: [4, 16, 36, 64]


*/

const squareNumbers = numbers => {
    return numbers.map(number => number * number);
}

console.log(squareNumbers([2, 4, 6, 8]));


/*
4)
Filtrar números primos:
Planteamiento: Escribe una función que tome un array de números como entrada y devuelva un nuevo array que contenga solo los números primos.

Entrada: [2, 3, 4, 5, 6, 7, 8, 9]
Retorno: [2, 3, 5, 7]


*/

const isPrime = number => {
  return number.filter(number => number>1 && number<=3 || number%2!==0 && number%3!==0);
}
console.log(isPrime([2, 3, 4, 5, 6, 7, 8, 9]));



/*
5)
Filtrar palabras que empiezan con una letra específica:
Planteamiento: Escribe una función que tome un array de palabras y una letra como entrada, y devuelva un nuevo array con las palabras que empiezan con la letra dada.
Entrada: ["apple", "banana", "avocado", "grape"], Letra: "a"
Retorno: ["apple", "avocado"]

*/

const filterWords = (words, letter) => {
    return words.filter(word => word[0] === letter);
}
console.log(filterWords(["apple", "banana", "avocado", "grape"], "a"));



/*
6)
Filtrar números mayores que un valor específico:
Planteamiento: Escribe una función que tome un array de números y un valor mínimo como entrada, y devuelva un nuevo array con los números mayores que el valor dado.

Entrada: [12, 25, 6, 40, 8, 15], Valor mínimo: 20
Retorno: [25, 40]


*/

const filterNumbers = (numbers, min) => {
    return numbers.filter(number => number > min);
}
console.log(filterNumbers([12, 25, 6, 40, 8, 15], 20));



/*
7)
Encontrar el primer múltiplo de un número dado:
Planteamiento: Escribe una función que tome un array de números y un número objetivo como entrada, y devuelva el primer número en el array que sea un múltiplo del número objetivo.

Entrada: [5, 10, 15, 20, 25], Número objetivo: 3
Retorno: 15


*/

const findMultiple = (numbers, target) => {

    return numbers.find(number => number % target === 0);
}
console.log(findMultiple([5, 10, 15, 20, 25], 3));


/*
8)
Encontrar el primer nombre con más de cierta cantidad de caracteres:
Planteamiento: Escribe una función que tome un array de nombres y una longitud mínima como entrada, y devuelva el primer nombre en el array que tenga más caracteres que la longitud mínima.

Entrada: ["Alice", "Bob", "Charlie", "David", "Eve"], Longitud mínima: 6
Retorno: "Charlie"


*/

const findName = (names, min) => {
    return names.find(name => name.length > min);
}
console.log(findName(["Alice", "Bob", "Charlie", "Davidd", "Eve"], 6));


/*
9)
Encontrar el primer número par mayor que un valor específico:
Planteamiento: Escribe una función que tome un array de números y un valor mínimo como entrada, y devuelva el primer número par en el array que sea mayor que el valor mínimo.

Entrada: [5, 7, 8, 10, 12, 15], Valor mínimo: 9
Retorno: 10


*/

const findNumber = (numbers, min) => {
    return numbers.find(number => number > min && number % 2 === 0);
}
console.log(findNumber([5, 7, 8, 10, 12, 15], 9));



/*
10)
Encontrar el índice del primer número divisible por un número dado:
Planteamiento: Escribe una función que tome un array de números y un número divisor como entrada, y devuelva el índice del primer número en el array que sea divisible por el número divisor.

Entrada: [15, 25, 30, 35, 40], Número divisor: 5
Retorno: 1


*/

const findIndex = (numbers, divisor) => {
    return numbers.findIndex(number => number % divisor === 0);
}
console.log(findIndex([4, 2, 30, 35, 40], 5));


/* 
11)
Encontrar el índice del primer nombre con más de cierta longitud:
Planteamiento: Escribe una función que tome un array de nombres y una longitud mínima como entrada, y devuelva el índice del primer nombre en el array que tenga más caracteres que la longitud mínima.

Entrada: ["Alice", "Bob", "Charlie", "David", "Eve"], Longitud mínima: 6
Retorno: 2
*/

const findIndexName = (names, min) => {
    return names.findIndex(name => name.length > min);
}
console.log(findIndexName(["Alice", "Bob", "Charlie", "David", "Eve"], 6));


/*
12)
Encontrar el índice del primer número impar mayor que un valor específico:
Planteamiento: Escribe una función que tome un array de números y un valor mínimo como entrada, y devuelva el índice del primer número impar en el array que sea mayor que el valor mínimo.

Entrada: [5, 7, 8, 10, 12, 15], Valor mínimo: 9
Retorno: 5


*/

const findIndexNumber = (numbers, min) => {
    return numbers.findIndex(number => number > min && number % 2 !== 0);
}
console.log(findIndexNumber([5, 7, 8, 10, 12, 15], 9));


/*
13)
Ordenar nombres por longitud de manera descendente:
Planteamiento: Escribe una función que tome un array de nombres y los ordene de manera descendente según su longitud.

Entrada: ["Alice", "Bob", "Charlie", "David", "Eve"]
Retorno: ["Charlie", "David", "Alice", "Eve", "Bob"]


*/

const sortNames = names => {
    return names.sort((a, b) => b.length - a.length);
}
console.log(sortNames(["Alice", "Bob", "Charlie", "David", "Eve"]));



/*
14)
Ordenar números por cantidad de dígitos de manera ascendente:
Planteamiento: Escribe una función que tome un array de números y los ordene de manera ascendente según la cantidad de dígitos que tienen.

Entrada: [10, 7, 345, 23, 12, 4567]
Retorno: [7, 10, 23, 12, 345, 4567]


*/

const sortNumbers = numbers => {
    return numbers.sort((a, b) => a.toString().length - b.toString().length);
}

console.log(sortNumbers([10, 7, 345, 23, 12, 4567]));



/*
15)
Ordenar palabras alfabéticamente ignorando mayúsculas/minúsculas:
Planteamiento: Escribe una función que tome un array de palabras y las ordene alfabéticamente sin tener en cuenta las diferencias entre mayúsculas y minúsculas.

Entrada: ["apple", "banana", "Orange", "grape", "Kiwi"]
Retorno: ["apple", "banana", "grape", "Kiwi", "Orange"]


*/

const sortWords = words => {
    return words.sort((a, b) => a.localeCompare(b));
}
console.log(sortWords(["apple", "Banana", "Orange", "grape", "Kiwi"]));

/*

16)
Duplicar los elementos pares y triplicar los impares:
Planteamiento: Dado un array de números, crea un nuevo array donde los números pares se dupliquen y los números impares se tripliquen.

Entrada: [1, 2, 3, 4, 5]
Salida: [3, 4, 9, 8, 15]

*/

const numDupli = numbers => {

    return numbers.map(number => number % 2 === 0 ? number * 2 : number * 3);

}
console.log(numDupli([1, 2, 3, 4, 5]));


/*

17)
Encontrar el promedio de los elementos en un subarray:
Planteamiento: Dado un array de números y dos índices inicio y fin, encuentra el promedio de los elementos en el subarray que va desde el índice inicio hasta el índice fin (ambos inclusive).

Entrada: Array: [5, 10, 15, 20, 25, 30, 35, 40], Inicio: 2, Fin: 5
Salida: 22.5 (Promedio de [15, 20, 25, 30])

*/

const calculateAverage = (numbers, start, end) => {
    let arrayTwo = numbers.slice(start, end+1 );
    console.log(arrayTwo);
    return arrayTwo.reduce((acc, number) => acc + number) / arrayTwo.length;
}
console.log(calculateAverage([5, 10, 15, 20, 25, 30, 35, 40], 2, 5));

/*
18
Encontrar el segundo número más grande:
Planteamiento: Dado un array de números, encuentra y devuelve el segundo número más grande del array.

Entrada: [7, 12, 9, 2, 15, 3, 10]
Salida: 12


*/

const findSecondLargest = numbers => {
    return arrayTwo = numbers.sort((a, b) => b - a)[1];
}
console.log(findSecondLargest([7, 12, 9, 2, 15, 3, 10]));

