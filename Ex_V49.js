// Calcule qué número de día del año es.

// toDayOfYear([1, 1, 2000]) => 1
// El argumento pasado a la función es una matriz con el formato [D, M, YYYY], 
// por ejemplo, [1, 2, 2000]para el 1 de febrero de 2000 o [22, 12, 1999]para el 22 de diciembre de 1999.

// ¡No te olvides de comprobar si es un año bisiesto ! Hay que tener en cuenta tres criterios 
// para identificar los años bisiestos:

// El año se puede dividir uniformemente por 4;
// Si el año se puede dividir por 100, NO es un año bisiesto, a menos que;
// El año también es divisible por 400. Entonces es un año bisiesto.


const toDayOfYear =(arr) =>{

    let [d, m, y] = arr;            
    let days = [31,28,31,30,31,30,31,31,30,31,30,31];
    let sum = 0;
    for (let i = 0; i < m - 1; i++) {
        
        sum += days[i];
        
    }
    sum += d;
    
    if (m > 2 && y % 4 == 0 && (y % 100 != 0 || y % 400 == 0)) {
        sum++;
    }
    return sum;
}

console.log(toDayOfYear([25, 12, 2017]));
// console.log(toDayOfYear([14, 3, 1066]));

/* 

1. Primero definimos una función llamada toDayOfYear que recibe un parámetro llamado arr. arr es 
un array de 3 elementos, que representan el día, el mes y el año respectivamente.
2. 2. A continuación, definimos una matriz llamada days, que contiene el número de días de cada mes. 
Nótese que el número de días de febrero es 28 porque aún no estamos considerando los años bisiestos.
3. A continuación definimos una variable llamada suma y la ponemos a 0. Esta variable se utilizará 
para almacenar la respuesta final. 
4. Definimos un bucle for que irá de 0 a m - 1, donde m es el mes. Usamos m - 1 porque el 
índice del array empieza en 0. 
5. Dentro del bucle for, sumamos el número de días de cada mes para sumar. 
6. A continuación, comprobamos si el mes es mayor que 2 y si el año es divisible por 4 y si el 
año no es divisible por 100 o si el año es divisible por 400. Si se cumplen todas estas condiciones, 
se calcula la suma. Si se cumplen todas estas condiciones, significa que el año es bisiesto, por lo 
que sumamos 1 a la suma. 
7. A continuación devolvemos la suma. 

*/