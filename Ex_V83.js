/*

Enunciado:
Desarrolla una función en JavaScript que tome como entrada una cadena de texto frase y un carácter letra. La función debe contar cuántas veces aparece letra en frase, sin importar si es mayúscula o minúscula, y retornar ese número. Además, si la letra no aparece en la frase, la función debe retornar la cadena "La letra no se encuentra en la frase".

Entrada:
Una cadena de texto frase, donde 1 <= frase.length <= 1000, que representa una frase en la que se buscará la letra.
Un carácter letra, que representa la letra que se buscará en la frase.
Ejemplo de Entrada:
javascript
Copy code
frase = "El elefante elegante"
letra = "e"
Salida:
La función debe imprimir en consola el número de veces que letra aparece en frase, o "La letra no se encuentra en la frase" si la letra no aparece.

Ejemplo de Salida:
Copy code
5
En este caso, la letra "e" aparece 5 veces en la frase "El elefante elegante".

*/

const countLetter = (phrase, letter) => {
    let frase = phrase.toLowerCase();
    let letra = letter.toLowerCase();
    let count = 0;
    for (let i = 0; i < frase.length; i++) {
        if (frase[i] === letra) {
            count++;
        }
    }
    if (count === 0) {
        return "La letra no se encuentra en la frase";
    }
    return count;
    

}

console.log(countLetter("El elefante elegante", "e")); // 5
