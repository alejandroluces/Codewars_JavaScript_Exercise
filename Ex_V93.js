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


    /* Desarrollar una funcion para calcular 20/5*20 */

    const calcular = () => {
        return 20 / 5 * 20;
    }

    console.log(calcular());





// OTro algortimo
/*

Miedo selectivo a los números.
541085% de 5451.599 de 5.195Jota4 problemas informados
 javascript
Nodo v8.1.3
EMPUJE
EMACS
Instrucciones
Producción
Tengo una enfermedad mental loca. No me gustan mucho los números. Pero es un poco complicado: el número al que tengo miedo depende del día de la semana que sea... Esta es una descripción concreta de mi enfermedad mental:

Lunes --> 12

Martes --> números mayores que 95

Miércoles --> 34

Jueves --> 0

Viernes --> números divisibles por 2

Sábado --> 56

Domingo --> 666 o -666

Escribe una función que tome una cadena (día de la semana) y un número entero (número a analizar) para que le diga al médico si tengo miedo o no. (devuelve un booleano)

*/

const amIafraid = (day, num) => {

    return day === 'Monday' && num === 12 ||
        day === 'Tuesday' && num > 95 ||
        day === 'Wednesday' && num === 34 ||
        day === 'Thursday' && num === 0 ||
        day === 'Friday' && num % 2 === 0 ||
        day === 'Saturday' && num === 56 ||
        day === 'Sunday' && (num === 666 || num === -666);
        
}

console.log(amIafraid('Monday', 13));
console.log(amIafraid('Tuesday', 965));
console.log(amIafraid('Wednesday', 34));
console.log(amIafraid('Thursday', 0));
console.log(amIafraid('Friday', 2));
console.log(amIafraid('Saturday', 56));
console.log(amIafraid('Sunday', -666));


