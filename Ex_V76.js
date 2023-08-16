/*

Enunciado del algoritmo:
Desarrolla una función en JavaScript que reciba una cadena de texto y determine si los paréntesis en la cadena están equilibrados y correctamente anidados. Por "equilibrados", nos referimos a que cada paréntesis que se abre, se cierra, y viceversa. Por "correctamente anidados", nos referimos a que no hay un paréntesis de cierre antes de uno de apertura.
La función debe retornar true si los paréntesis están equilibrados y correctamente anidados, y false en caso contrario. Luego, muestra el resultado en la consola.
Entrada propuesta:
javascriptCopy code
const cadena = "((a+b) * (c+d))";
Salida esperada en consola:
yamlCopy code
Los paréntesis están equilibrados: true
Otro ejemplo de entrada:
javascriptCopy code
const cadena = "(a+b) * (c+d))";
Salida esperada en consola:
yamlCopy code
Los paréntesis están equilibrados: false
Indicaciones adicionales:
Considera únicamente los caracteres '(' y ')'. No necesitas considerar otros tipos de paréntesis o corchetes, como '{', '}', '[', o ']'.
La cadena puede contener cualquier tipo de carácter, no solo letras y números.

*/

// Solución:

const cadena = "((a+b) * (c+d)))";

const parentesisOK = (str) => {
   
    let result= str.split('').filter((item,index,array) =>array.indexOf(item) !== index).length;  
    return result % 2 === 0 ? true : false;


}

console.log(parentesisOK("(((a+b) * (c+d)))"));


