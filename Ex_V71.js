/*

Enunciado:

Estás desarrollando una función para un pequeño juego en línea. La función, llamada "calcularPuntos", debe calcular los puntos de un jugador basándose en las victorias, empates y derrotas que haya obtenido en distintas partidas.

La función debe aceptar tres argumentos enteros:

victorias: El número de victorias que el jugador ha obtenido (valor entre 0 y 100).
empates: El número de empates que el jugador ha logrado (valor entre 0 y 100).
derrotas: El número de derrotas que el jugador ha sufrido (valor entre 0 y 100).
La puntuación debe calcularse según las siguientes reglas:

Por cada victoria, el jugador recibe 3 puntos.
Por cada empate, el jugador recibe 1 punto.
Las derrotas no suman puntos.
La función debe devolver un entero representando la puntuación total del jugador.

Entrada Propuesta:

javascript
Copy code
const victorias = 10;
const empates = 5;
const derrotas = 3;
Salida Esperada en Consola:

javascript
Copy code
35

*/

const victorias = 10;
const empates = 5;
const derrotas = 3;

const calcularPuntos = (victorias, empates, derrotas) => {
    return (victorias * 3) + empates;
}

console.log(calcularPuntos(victorias, empates, derrotas));



