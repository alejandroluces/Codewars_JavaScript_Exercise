/*

Enunciado:
Desarrolla una función en JavaScript que tome como entrada un número entero edad. La función debe determinar si la persona con esa edad puede ingresar a una película clasificada como "Todas las edades" o si es necesario tener al menos 18 años para ingresar a una película clasificada como "Mayores de 18". La función debe retornar "Puede ingresar" si la persona cumple con los requisitos de edad, o "No puede ingresar" en caso contrario.

Entrada:
Un número entero edad, donde 0 <= edad <= 120, que representa la edad de la persona.
Ejemplo de Entrada:
javascript
Copy code
edad = 20
Salida:
La función debe imprimir en consola si la persona puede o no ingresar a la película, utilizando el operador ternario para tomar la decisión.

Ejemplo de Salida:
arduino
Copy code
"Puede ingresar"
En este caso, la persona tiene 20 años, lo que le permite ingresar a la película clasificada como "Mayores de 18".


*/

const puedeIngresar = (edad) => {
    return edad >= 18 ? "Puede ingresar" : "No puede ingresar";
    }

    console.log(puedeIngresar(17));

/*

Enunciado:
Desarrolla una función en JavaScript que tome como entrada un número entero nota. La función debe determinar la calificación correspondiente a la nota de un estudiante, siguiendo la siguiente escala:

Nota mayor o igual a 90: "A"
Nota entre 80 y 89: "B"
Nota entre 70 y 79: "C"
Nota entre 60 y 69: "D"
Nota menor a 60: "F"
La función debe retornar la calificación correspondiente a la nota.

Entrada:
Un número entero nota, donde 0 <= nota <= 100, que representa la nota del estudiante.
Ejemplo de Entrada:
javascript
Copy code
nota = 75
Salida:
La función debe imprimir en consola la calificación correspondiente a la nota del estudiante, utilizando operadores ternarios para tomar la decisión.

Ejemplo de Salida:
arduino
Copy code
"C"

*/

const calificacion = (nota) => {
    return nota >= 90 ? "A" : nota >= 80 ? "B" : nota >= 70 ? "C" : nota >= 60 ? "D" : "F";
    }

    console.log(calificacion(75));



    /*
    
    Enunciado:
Desarrolla una función en JavaScript que tome como entrada un arreglo de números enteros numeros. La función debe determinar si todos los números en el arreglo son positivos (mayores que 0). Si todos los números son positivos, la función debe retornar "Todos son positivos". Si hay al menos un número negativo o igual a 0 en el arreglo, la función debe retornar "No todos son positivos".

Entrada:
Un arreglo de números enteros numeros, donde 1 <= numeros.length <= 100 y -10000 <= numeros[i] <= 10000.
Ejemplo de Entrada:
javascript
Copy code
numeros = [3, 7, 1, 9]
Salida:
La función debe imprimir en consola si todos los números en el arreglo son positivos o no, utilizando operadores ternarios para tomar la decisión.

Ejemplo de Salida:
arduino
Copy code
"Todos son positivos"
En este caso, todos los números en el arreglo son positivos, por lo que la función debe retornar "Todos son positivos".
    
    */

    const todosPositivos = (numeros) => {
        return numeros.every((numero) => numero > 0) ? "Todos son positivos" : "No todos son positivos";
        }

        console.log(todosPositivos([3, 7, 1, 9]));



/*

Enunciado:
Desarrolla una función en JavaScript que tome como entrada un arreglo de números enteros numeros. La función debe determinar si todos los números en el arreglo son pares. Si todos los números son pares, la función debe retornar "Todos son pares". Si hay al menos un número impar en el arreglo, la función debe retornar "No todos son pares".

Entrada:
Un arreglo de números enteros numeros, donde 1 <= numeros.length <= 100 y -10000 <= numeros[i] <= 10000.
Ejemplo de Entrada:
javascript
Copy code
numeros = [2, 4, 6, 8]
Salida:
La función debe imprimir en consola si todos los números en el arreglo son pares o no, utilizando operadores ternarios para tomar la decisión.

Ejemplo de Salida:
arduino
Copy code
"Todos son pares"
En este caso, todos los números en el arreglo son pares, por lo que la función debe retornar "Todos son pares".

*/

const todosPares = (numeros) => {
    return numeros.every((numero) => numero % 2 === 0) ? "Todos son pares" : "No todos son pares";
    }

    console.log(todosPares([2, 4, 6, 8]));

    /*
    
    Enunciado:
Desarrolla una función en JavaScript que tome como entrada un arreglo de números enteros numeros. La función debe determinar si la suma de todos los números en el arreglo es positiva, negativa o igual a cero. Si la suma es positiva, la función debe retornar "Suma positiva". Si la suma es negativa, la función debe retornar "Suma negativa". Si la suma es igual a cero, la función debe retornar "Suma igual a cero".

Entrada:
Un arreglo de números enteros numeros, donde 1 <= numeros.length <= 100 y -10000 <= numeros[i] <= 10000.
Ejemplo de Entrada:
javascript
Copy code
numeros = [2, -3, 5, -1]
Salida:
La función debe imprimir en consola si la suma de los números en el arreglo es positiva, negativa o igual a cero, utilizando operadores ternarios para tomar la decisión.

Ejemplo de Salida:
arduino
Copy code
"Suma positiva"
En este caso, la suma de los números en el arreglo es 2 + (-3) + 5 + (-1) = 3, que es positiva, por lo que la función debe retornar "Suma positiva".
    
    */

    const sumaPositiva = (numeros) => {
        const suma = numeros.reduce((acumulador, numero) => acumulador + numero, 0);
        return suma > 0 ? "Suma positiva" : suma < 0 ? "Suma negativa" : "Suma igual a cero";
        }       

        console.log(sumaPositiva([2, -3, 5, -1]));


/*

Enunciado:
Desarrolla una función en JavaScript que tome como entrada un arreglo de números enteros numeros y un número entero objetivo. La función debe determinar si existe un par de números en el arreglo que sume exactamente al valor del objetivo. Si existe dicho par, la función debe retornar "Existe un par". Si no existe tal par, la función debe retornar "No existe un par".

Entrada:
Un arreglo de números enteros numeros, donde 2 <= numeros.length <= 100 y -10000 <= numeros[i] <= 10000.
Un número entero objetivo, donde -20000 <= objetivo <= 20000.
Ejemplo de Entrada:
javascript
Copy code
numeros = [3, 7, 1, 9, 5]
objetivo = 10
Salida:
La función debe imprimir en consola si existe un par de números en el arreglo que sume al valor del objetivo o no, utilizando operadores ternarios para tomar la decisión.

Ejemplo de Salida:
arduino
Copy code
"Existe un par"
En este caso, los números 1 y 9 suman exactamente 10, que es el valor del objetivo, por lo que la función debe retornar "Existe un par".

*/

const existePar = (numeros, objetivo) => {
    return numeros.some((numero) => numeros.includes(objetivo - numero)) ? "Existe un par" : "No existe un par";
    }

    console.log(existePar([1,2,7,9], 10));