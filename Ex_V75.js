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

