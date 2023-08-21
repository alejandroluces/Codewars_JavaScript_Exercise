/*

Objetivo: Desarrollar un programa en JavaScript que cuente el número de vocales y consonantes en una cadena de texto. 
Entrada:

Cadena de texto (string)
Proceso:

Lee la cadena de texto desde el usuario.
Inicializa contadores para las vocales y las consonantes.
Recorre cada carácter en la cadena de texto:
Si el carácter es una vocal (a, e, i, o, u), incrementa el contador de vocales.
Si el carácter es una consonante (letra que no es una vocal ni un espacio), incrementa el contador de consonantes.
Salida:
Imprime en la consola el número de vocales y consonantes encontradas en la cadena de texto, con el siguiente formato:

mathematica
Copy code
Número de Vocales: [Número de Vocales]
Número de Consonantes: [Número de Consonantes]
Ejemplo de Entrada:

arduino
Copy code
Cadena de texto: "Hola, este es un ejemplo"
Salida Esperada:

mathematica
Copy code
Número de Vocales: 9
Número de Consonantes: 11

*/

// Solución:

// Lee la cadena de texto desde el usuario.
let string="Hola, este es un ejemplo";
// Inicializa contadores para las vocales y las consonantes.
const countVowelAndConsonant = (string) => {

    let vowel= string.match(/[aeiou]/gi).length;
    let consonant= string.match(/[bcdfghjklmnpqrstvwxyz]/gi).length;

    return `Número de Vocales: ${vowel} \nNúmero de Consonantes: ${consonant}`;

}

console.log(countVowelAndConsonant(string));

