/*
Crea una función que tomo como un argumento una secuencia  y de elementos sin ningún elemento con el mismo valor uno al lado del otro y conservando el orden original de los elementos.

Por ejemplo:
uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
uniqueInOrder([1,2,2,3,3])       == [1,2,3]

*/

const uniqueInOrder = (str) => {

    [...str]
    str
return [...str].filter((item, index, array) => item !== array[index - 1]);

   
}

console.log(uniqueInOrder('AAAABBBCCDAABBB'));
console.log(uniqueInOrder(('ABBCcAD')));
console.log(uniqueInOrder([1,2,2,3,3]));

/* 

1. [...str] convierte la cadena de entrada en una matriz.
2. filter() devuelve una nueva matriz con elementos que pasan la prueba
   implementada por la función de devolución de llamada.
3. item !== array[index - 1] compara el elemento actual con el elemento anterior.
   Si son diferentes, se retiene y se agrega a la matriz devuelta. 
   
*/