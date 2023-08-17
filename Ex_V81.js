/*

Enunciado:
Desarrolla una función en JavaScript que reciba dos cadenas de texto, str1 y str2. La función debe determinar si es posible convertir str1 en str2 reemplazando exactamente un carácter en str1. Si es posible, la función debe retornar "Sí". Si no es posible o si las cadenas ya son idénticas, debe retornar "No".

Entrada:
Dos cadenas de texto str1 y str2, que contienen solo caracteres alfabéticos en minúscula y tienen la misma longitud, donde 1 <= str1.length, str2.length <= 1000.
Ejemplo de Entrada:
javascript
Copy code
str1 = "gato"
str2 = "galo"
Salida:
La función debe imprimir en consola "Sí" si es posible convertir str1 en str2 reemplazando exactamente un carácter, o "No" en caso contrario.

Ejemplo de Salida:
arduino
Copy code
"Sí"
En este caso, es posible convertir "gato" en "galo" reemplazando la 't' por una 'l'.

*/

const ispossible = (str1, str2) => {
    let count = 0;
    for (let i = 0; i < str1.length; i++) {
        if (str1[i] !== str2[i]) count++;
    }
    return count === 1 ? "Sí" : "No";
    };

    console.log(ispossible("gato", "gato"));
    console.log(ispossible("gato", "gata"));