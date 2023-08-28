/*

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

Encontrar el primer nombre con más de cierta cantidad de caracteres:
Planteamiento: Escribe una función que tome un array de nombres y una longitud mínima como entrada, y devuelva el primer nombre en el array que tenga más caracteres que la longitud mínima.

Entrada: ["Alice", "Bob", "Charlie", "David", "Eve"], Longitud mínima: 6
Retorno: "Charlie"


*/

const findName = (names, min) => {
    return names.find(name => name.length > min);
}
console.log(findName(["Alice", "Bob", "Charlie", "Davidd", "Eve"], 6));