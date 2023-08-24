/*

Cuerdas fibrosas
34715793% de 3.55411.343 de 31.045andresmacmurray
 javascript
Nodo v18.x
EMPUJE
EMACS
Instrucciones
Producción
escríbeme una función stringyque tome a sizey devuelva a stringde 1s y 0s alternados.

la cadena debe comenzar con 1.

una cadena con size6 debería devolver: '101010'.

con size4 debería regresar : '1010'.

con size12 debería regresar : '101010101010'.

El tamaño siempre será positivo y sólo utilizará números enteros.

*/

const stringy = size => {
    let str = '';
    for (let i = 1; i <= size; i++) {
        str += i % 2;
    }
    return str;
    }

    console.log(stringy(6));
    console.log(stringy(3));

    // otra solucion seria:

    const stringy2 = size => {

        return '10'.repeat(size).slice(0, size);
    }

    console.log(stringy(6));

