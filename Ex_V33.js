// En este sencillo ejercicio, construirá un programa que toma un valor, integer y devuelve una lista 
// de sus múltiplos hasta otro valor, limit . Si limites un múltiplo de integer, también debe incluirse. 
// Solo se pasarán enteros positivos a la función, que no consistan en 0. El límite siempre será mayor que la base.

// Por ejemplo, si los parámetros pasados ​​son (2, 6), la función debería 
// regresar [2, 4, 6]como 2, 4 y 6 son los múltiplos de 2 hasta 6.

const findMultiples =(integer, limit) =>{
    let result=[]
    for(let i=integer;i<=limit;i+=integer){
        result.push(i)  
    }
    return result
}

console.log(findMultiples(5, 25));
console.log(findMultiples(1, 2));
console.log(findMultiples(5, 7));
console.log(findMultiples(4, 27));
console.log(findMultiples(11, 54));


// /* He aquí la explicación del código anterior:
// 1. Crea una función llamada encontrarMúltiplos que toma dos parámetros: entero y límite(integer and limit)
// 2.  Crea un array vacío llamado resultado(result)
// 3.  Crear un bucle for que empiece en el entero(integer ) y termine en el límite(limit ) e incremente por el entero(integer)
// 4.  Introduce el resultado (Push )del bucle en el array result
// 5.  Devolver la matriz de resultados */