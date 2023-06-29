// https://www.codewars.com/kata/56b29582461215098d00000f/train/javascript

// La pipesconexión de las etapas de su nivel debe arreglarse antes de que reciba más quejas.

// La lista de tuberías es correcta cuando cada uno pipedespués del primer índice es mayor (+1) que el anterior y no hay duplicados.

// Tarea
// Dada la lista de numbers, devuelva una lista fija para que los valores aumenten en 1 
// para cada índice desde el valor mínimo hasta el valor máximo (ambos incluidos).

// Ejemplo
// Input:  1,3,5,6,7,8 Output: 1,2,3,4,5,6,7,8


//Analizando....
// let arrNum=[1,8]
// let firstNum=arrNum[0]
// console.log(firstNum);
// let lastNum=arrNum[arrNum.length-1]
// console.log(lastNum);

// Solucion____________________________
const pipeFix =(numbers) =>{

    let firstNum=numbers[0]
    let lastNum=numbers[numbers.length-1]

 if( firstNum < [lastNum]){
    for (let i = 0; i < lastNum-firstNum+1; i++){
        numbers[i]=numbers[0]+i
    }
 }
 return numbers
}

console.log(pipeFix([1,2,3,5,6,8,9]));
console.log(pipeFix([1,2,3,12]));
console.log(pipeFix([6,9]));
console.log(pipeFix([-1,4]));
console.log(pipeFix([1,2,3]));

/*

1. En la primera línea, declaramos la función pipeFix que recibe un array de números como parámetro.

2. En la segunda y tercera línea, declaramos dos variables, firstNum que representa el primer número 
    del array y lastNum que representa el último número del array.

3. En la cuarta línea, creamos una condición que comprueba si el primer número del array es menor que el último número del array.

4. Si la condición es verdadera, entonces iniciamos un bucle for que itera desde 0 hasta la diferencia 
    entre el último número y el primer número (más 1, para incluir el último número) y en cada iteración 
    sumamos el primer número al índice de la iteración.

5. Finalmente, devolvemos el array. 

*/