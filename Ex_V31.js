// https://www.codewars.com/kata/576bb71bbbcf0951d5000044/train/javascript
// Dada una matriz de enteros.

// Devuelve una matriz, donde el primer elemento es el recuento de números positivos y el segundo e
// lemento es la suma de números negativos. 0 no es ni positivo ni negativo.

// Si la entrada es una matriz vacía o es nula, devuelve una matriz vacía.

// Ejemplo
// Para la entrada [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], debe volver [10, -65].


// Analisis_________________________________________________________-
let arrNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15];

let numPositive=arrNumbers.filter(arrNumber=> arrNumber>0)
console.log(numPositive);

let sumNumnegative= arrNumbers.filter(arrNumber=> arrNumber<0)
console.log(sumNumnegative);
    

// Solucion___________________________________________________-

const countPositivesSumNegatives =(input) =>{
    

    if (!input || input.length === 0) {
        return [];
    }

    let numPositive=input.filter(arrNumber=> arrNumber>0)//friltrandu numero positivos
    console.log(numPositive);
    let totalQtyPos= numPositive.length//Determinando las posiciones que tiene
    console.log(totalQtyPos);
    


    let sumNumnegative= input.filter(arrNumber=> arrNumber<0)//friltrandu numero negativos
    console.log(sumNumnegative);
    resulSum=sumNumnegative.reduce((a, b) => a + b, 0)    //Operacion suma de los negativos
    console.log(resulSum);
   
    let result= [totalQtyPos,resulSum]//Uniendo los resultados

    console.log(result);
  
    return result

}


   



console.log(countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]));
console.log(countPositivesSumNegatives([0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14]));


