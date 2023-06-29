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

1. Creamos una función llamada pipeFix con un parámetro números
2. Creamos una variable llamada firstNum y le asignamos el primer valor del array numbers
3. Creamos una variable llamada lastNum y le asignamos el último valor del array numbers
4. Creamos una sentencia if que diga que si el primerNum es menor que el últimoNum, entonces haremos lo siguiente:
5. Creamos un bucle for que empezará en 0, y subirá hasta el últimoNum menos el primerNum 
    (hacemos esto para saber cuántas veces tenemos que añadir el valor del primerNum al array)
6. Asignamos a los números del array el valor del firstNum más el valor de i, que es el índice del bucle for
7. Devolvemos los números del array 

*/