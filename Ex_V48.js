// Hay una sala de espera con N sillas colocadas en una sola fila. Las sillas están numeradas
//  consecutivamente del 1 al N. La primera es la más cercana a la entrada (que también es la salida).

// Por alguna razón, la gente elige una silla de la siguiente manera

// Encuentre un lugar lo más lejos posible de otras personas.
// Encuentre un lugar lo más cerca posible de la salida
// Todas las sillas deben estar ocupadas antes de que se sirva a la primera persona.

// Entonces se ve así para 10 sillas y 10 pacientes

// Sillas	1	2	3	4	5	6	7	8	9	10
// Pacientes	1	7	5	8	3	9	4	6	10	2
// Su tarea es encontrar el número de la silla del último paciente.

// Input: number of chairs N, an integer greater than 2.
// Output: a positive integer, the last patient's chair number.
// La solcucion de codewars es la siguiente:

function lastChair(N) {
  return N - 1;
}
console.log(lastChair(10));

// Explicacion: El ultimo paciente siempre se sentara en la ultima silla, por lo tanto, 
// el numero de la ultima silla es el numero de pacientes menos 1.