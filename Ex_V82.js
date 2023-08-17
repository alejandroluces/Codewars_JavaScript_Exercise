/*

nunciado:
Desarrolla una función en JavaScript que reciba un arreglo de cadenas de texto palabras, y retorne una nueva cadena que sea un acróstico formado por las primeras letras de cada palabra en el arreglo. Si alguna de las cadenas está vacía, la función debe retornar "Cadena inválida".

Entrada:
Un arreglo de cadenas de texto palabras, donde 1 <= palabras.length <= 100 y 0 <= palabras[i].length <= 100.
Ejemplo de Entrada:
javascript
Copy code
palabras = ["Jabón", "Útil", "Gato", "Arroz", "Rápido", "Elefante"]
Salida:
La función debe imprimir en consola una cadena de texto que sea un acróstico formado por las primeras letras de cada palabra en el arreglo, o "Cadena inválida" si alguna de las cadenas está vacía.

Ejemplo de Salida:
arduino
Copy code
"JUGARE"
En este caso, las primeras letras de cada palabra en el arreglo forman la palabra "JUGARE".


*/

const palabras = ["Jabón", "Útil", "Gato", "Arroz", "Rápido", "Elefante"];

const acrostico = (palabras) => {

    let result = palabras.map((palabra) => {
        return palabra.charAt(0);
    }
    ).join('');

    return result;
}

console.log(acrostico(palabras));