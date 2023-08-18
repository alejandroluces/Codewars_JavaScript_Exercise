/*

Enunciado:
Desarrolla una función en JavaScript que tome como entrada un arreglo de cadenas de texto palabras. La función debe determinar si todas las palabras en el arreglo tienen una longitud mayor que 3 caracteres. Si todas las palabras cumplen esta condición, la función debe retornar "Todas las palabras tienen más de 3 caracteres". Si al menos una palabra tiene 3 caracteres o menos, la función debe retornar "Al menos una palabra tiene 3 caracteres o menos".

Entrada:
Un arreglo de cadenas de texto palabras, donde 1 <= palabras.length <= 100 y 1 <= palabras[i].length <= 100.
Ejemplo de Entrada:
javascript
Copy code
palabras = ["elefante", "girafa", "ratón", "tigre"]
Salida:
La función debe imprimir en consola si todas las palabras en el arreglo tienen una longitud mayor que 3 caracteres o no, utilizando operadores ternarios para tomar la decisión.

Ejemplo de Salida:
arduino
Copy code
"Al menos una palabra tiene 3 caracteres o menos"

*/

const todasMasDe3 = (palabras) => {
    return palabras.every((palabra) => palabra.length > 3) ? "Todas las palabras tienen más de 3 caracteres" : "Al menos una palabra tiene 3 caracteres o menos";
    }

    console.log(todasMasDe3(["elefante", "girafa", "rat", "tigre"]));

    /*
    
    Enunciado:
Desarrolla una función en JavaScript que tome como entrada un arreglo de números enteros numeros y un número entero x. La función debe determinar si existe algún número en el arreglo que sea divisible entre x. Si existe tal número, la función debe retornar "Existe un número divisible". Si no existe ningún número divisible entre x, la función debe retornar "No existe un número divisible".

Entrada:
Un arreglo de números enteros numeros, donde 1 <= numeros.length <= 100 y -10000 <= numeros[i] <= 10000.
Un número entero x, donde x no es igual a 0 y 1 <= x <= 10000.
Ejemplo de Entrada:
javascript
Copy code
numeros = [6, 8, 10, 12, 15]
x = 5
Salida:
La función debe imprimir en consola si existe algún número en el arreglo que sea divisible entre x o no, utilizando operadores ternarios para tomar la decisión.

Ejemplo de Salida:
arduino
Copy code
"Existe un número divisible"

    */

    const existeDivisible = (numeros, x) => {
        return numeros.some((numero) => numero % x === 0) ? "Existe un número divisible" : "No existe un número divisible";
        }

        console.log(existeDivisible([6, 8, 10, 12, 15], 5));


/*

Enunciado:
Desarrolla una función en JavaScript que tome como entrada un arreglo de números enteros numeros. La función debe determinar si todos los números en el arreglo son iguales entre sí. Si todos los números son iguales, la función debe retornar "Todos son iguales". Si al menos un número es diferente de los demás, la función debe retornar "No todos son iguales".

Entrada:
Un arreglo de números enteros numeros, donde 1 <= numeros.length <= 100 y -10000 <= numeros[i] <= 10000.
Ejemplo de Entrada:
javascript
Copy code
numeros = [5, 5, 5, 5, 5]
Salida:
La función debe imprimir en consola si todos los números en el arreglo son iguales entre sí o no, utilizando operadores ternarios para tomar la decisión.

Ejemplo de Salida:
arduino
Copy code
"Todos son iguales"

*/

const todosIguales = (numeros) => {
    return numeros.every((numero) => numero === numeros[0]) ? "Todos son iguales" : "No todos son iguales";
    }

    console.log(todosIguales([5, 5, 5, 5, 5]));




/*

Enunciado:
Desarrolla una función en JavaScript que tome como entrada una cadena de texto texto y un carácter caracter. La función debe determinar si el carácter dado aparece al menos una vez en la cadena de texto. Si el carácter aparece en la cadena, la función debe retornar "El carácter aparece en el texto". Si el carácter no aparece en la cadena, la función debe retornar "El carácter no aparece en el texto".

Entrada:
Una cadena de texto texto, donde 1 <= texto.length <= 1000, que representa el texto a analizar.
Un carácter caracter, que representa el carácter que se busca en el texto.
Ejemplo de Entrada:
javascript
Copy code
texto = "Hola, mundo!"
caracter = "o"
Salida:
La función debe imprimir en consola si el carácter dado aparece al menos una vez en la cadena de texto o no, utilizando operadores ternarios para tomar la decisión.

Ejemplo de Salida:
arduino
Copy code
"El carácter aparece en el texto"
En este caso, el carácter "o" aparece tres veces en la cadena "Hola, mundo!", por lo que la función debe retornar "El carácter aparece en el texto".

*/

const apareceCaracter = (texto, caracter) => {
    //Tomar en cuenta que el método includes() es sensible a mayúsculas y minúsculas.El método toLowerCase() convierte una cadena de texto a minúsculas.
    return texto.toLowerCase().includes(caracter.toLowerCase()) ? "El carácter aparece en el texto" : "El carácter no aparece en el texto";

    
}

    console.log(apareceCaracter("Hola, mundo!", "r"));


    /*
    
    Enunciado:
Desarrolla una función en JavaScript que tome como entrada un arreglo de cadenas de texto palabras. La función debe determinar si todas las palabras en el arreglo comienzan con la misma letra. Si todas las palabras comienzan con la misma letra, la función debe retornar "Todas comienzan con la misma letra". Si al menos una palabra tiene una primera letra diferente, la función debe retornar "No todas comienzan con la misma letra".

Entrada:
Un arreglo de cadenas de texto palabras, donde 2 <= palabras.length <= 100 y 1 <= palabras[i].length <= 100.
Ejemplo de Entrada:
javascript
Copy code
palabras = ["gato", "gorila", "guitarra", "gris"]
Salida:
La función debe imprimir en consola si todas las palabras en el arreglo comienzan con la misma letra o no, utilizando operadores ternarios para tomar la decisión.

Ejemplo de Salida:
arduino
Copy code
"Todas comienzan con la misma letra"
    
    
    */

    const todasMismaLetra = (palabras) => {
        // Toma en cuenta que el método every() es sensible a mayúsculas y minúsculas. El método toLowerCase() convierte una cadena de texto a minúsculas.
        return palabras.every((palabra) => palabra[0].toLowerCase() === palabras[0][0].toLowerCase()) ? "Todas comienzan con la misma letra" : "No todas comienzan con la misma letra";
        }

        console.log(todasMismaLetra(["gato", "gorila", "guitarra", "gris"]));



/*

Enunciado:
Desarrolla una función en JavaScript que tome como entrada un número entero numero. La función debe determinar si el número es positivo, negativo o igual a cero. Si el número es positivo, la función debe retornar "Es positivo". Si el número es negativo, la función debe retornar "Es negativo". Si el número es igual a cero, la función debe retornar "Es igual a cero".

Entrada:
Un número entero numero, donde -10000 <= numero <= 10000.
Ejemplo de Entrada:
javascript
Copy code
numero = -7
Salida:
La función debe imprimir en consola si el número es positivo, negativo o igual a cero, utilizando operadores ternarios para tomar la decisión.

Ejemplo de Salida:
arduino
Copy code
"Es negativo"

*/

const esPositivo = (numero) => {
    return numero > 0 ? "Es positivo" : numero < 0 ? "Es negativo" : "Es igual a cero";
    }

    console.log(esPositivo(-7));



/*

Enunciado:
Desarrolla una función en JavaScript que tome como entrada un arreglo de números enteros numeros. La función debe determinar si todos los números en el arreglo son mayores que 10. Si todos los números son mayores que 10, la función debe retornar "Todos son mayores que 10". Si al menos un número es menor o igual a 10, la función debe retornar "Al menos un número no es mayor que 10".

Entrada:
Un arreglo de números enteros numeros, donde 1 <= numeros.length <= 100 y -10000 <= numeros[i] <= 10000.
Ejemplo de Entrada:
javascript
Copy code
numeros = [15, 12, 18, 9, 14]
Salida:
La función debe imprimir en consola si todos los números en el arreglo son mayores que 10 o no, utilizando operadores ternarios para tomar la decisión.

Ejemplo de Salida:
arduino
Copy code
"Al menos un número no es mayor que 10"

*/

const todosMayoresQue10 = (numeros) => {
    return numeros.every((numero) => numero > 10) ? "Todos son mayores que 10" : "Al menos un número no es mayor que 10";
    }

    console.log(todosMayoresQue10([15, 12,18, 19, 14]));



/*

Enunciado:
Desarrolla una función en JavaScript que tome como entrada una cadena de texto cadena. La función debe determinar si la cadena contiene al menos una vocal (a, e, i, o, u) en mayúscula. Si la cadena contiene al menos una vocal en mayúscula, la función debe retornar "Contiene una vocal en mayúscula". Si la cadena no contiene ninguna vocal en mayúscula, la función debe retornar "No contiene una vocal en mayúscula".

Entrada:
Una cadena de texto cadena, donde 1 <= cadena.length <= 1000, que representa la cadena a analizar.
Ejemplo de Entrada:
javascript
Copy code
cadena = "Hola Mundo"
Salida:
La función debe imprimir en consola si la cadena contiene al menos una vocal en mayúscula o no, utilizando operadores ternarios para tomar la decisión.

Ejemplo de Salida:
arduino
Copy code
"Contiene una vocal en mayúscula"


*/

const contieneVocalMayuscula = (cadena) => {
    // Toma en cuenta que el método match() es sensible a mayúsculas y minúsculas. El método toLowerCase() convierte una cadena de texto a minúsculas.
    return cadena.match(/[AEIOU]/) ? "Contiene una vocal en mayúscula" : "No contiene una vocal en mayúscula";
    }

    console.log(contieneVocalMayuscula("Hola Mundo"));