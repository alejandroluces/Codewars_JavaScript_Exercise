/*

Enunciado:
Desarrolla una función en JavaScript que reciba una cadena de texto y retorne un objeto que contenga la frecuencia de cada palabra en la cadena. Las palabras en la cadena estarán separadas por espacios, y la función debe ignorar la diferencia entre mayúsculas y minúsculas, y considerar las palabras con y sin puntuación como iguales (por ejemplo, "gato" y "gato." deben considerarse la misma palabra).

Entrada:
Una cadena de texto texto, que contenga solo caracteres alfabéticos, espacios y signos de puntuación comunes, con una longitud donde 1 <= texto.length <= 10000.
Ejemplo de Entrada:
javascript
Copy code
texto = "Gato, perro, gato. ¡Gato! Perro."
Salida:
La función debe imprimir en consola un objeto que contenga las palabras en la cadena como claves y la frecuencia de cada palabra como valores.

Ejemplo de Salida:
javascript
Copy code
{
  "gato": 3,
  "perro": 2
}
En este caso, la función ha identificado que las palabras "gato" y "perro" aparecen 3 y 2 veces respectivamente, independientemente de la capitalización y la puntuación.


*/

const texto = "Gato, perro, gato. ¡Gato! Perro.";

const contarPalabras = (texto) => {

    const palabras = texto.toLowerCase().replace(/[.,¡!]/g, '').split(' ');
    const resultado = {};

    palabras.forEach(palabra => {
        
        if (resultado[palabra]) { resultado[palabra] += 1;} 
        else {resultado[palabra] = 1;}


    });

    return resultado;
}

console.log(contarPalabras(texto));