/*

Enunciado
Desarrollar una función en JavaScript que acepte una cadena de texto como entrada y determine si la cadena es un palíndromo. Un palíndromo es una palabra, frase, número u otro tipo de secuencia de caracteres que se lee igual hacia adelante que hacia atrás (ignorando espacios, puntuación y capitalización).

Entrada:

Una cadena de texto texto.
Salida:

La función debe imprimir en la consola "La cadena es un palíndromo" si la cadena es un palíndromo, o "La cadena no es un palíndromo" si no lo es.
Ejemplo de Entrada y Salida
Entrada:

texto: "A mamá Roma le aviva el amor a mamá".
Salida en la Consola:

La cadena es un palíndromo.
Notas:

La función debe ser lo suficientemente robusta como para ignorar diferencias en la capitalización y puntuación. En el ejemplo anterior, la función deberá ignorar el espacio y la capitalización para determinar correctamente que la cadena es un palíndromo.

*/

const texto = "A mama Roma le aviva el amor a mama";

const esPalindromo = (texto) => {

    return texto.toLowerCase().replace(/ /g, "") === texto.toLowerCase().replace(/ /g, "").split("").reverse().join("");
    
}

console.log(esPalindromo(texto));
