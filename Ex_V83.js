/*


Enunciado:
Desarrolla una función en JavaScript que tome como entrada un arreglo bidimensional de enteros matriz, que represente una grilla de celdas. La función debe determinar si es posible llegar desde la esquina superior izquierda hasta la esquina inferior derecha, moviéndose solamente hacia la derecha o hacia abajo en cada paso, y sólo a través de celdas con valor 1. Las celdas con valor 0 son consideradas obstáculos y no se pueden atravesar. La función debe retornar "Sí" si es posible llegar, y "No" si no lo es.

Entrada:
Un arreglo bidimensional de enteros matriz, donde 2 <= matriz.length, matriz[i].length <= 100 y matriz[i][j] es 0 o 1. La esquina superior izquierda y la esquina inferior derecha siempre tendrán valor 1.
Ejemplo de Entrada:
javascript
Copy code
matriz = [
  [1, 0, 1, 1],
  [1, 1, 0, 1],
  [0, 1, 1, 0],
  [1, 1, 1, 1]
]
Salida:
La función debe imprimir en consola "Sí" si es posible llegar desde la esquina superior izquierda hasta la esquina inferior derecha, moviéndose solamente hacia la derecha o hacia abajo, y "No" si no lo es.

Ejemplo de Salida:
arduino
Copy code
"No"
En este caso, no es posible llegar desde la esquina superior izquierda hasta la esquina inferior derecha, ya que hay obstáculos en el camino.


*/

const matriz = [
    [1, 0, 1, 1],
    [1, 1, 0, 1],
    [0, 1, 1, 0],
    [1, 1, 1, 1]
    ]

    const esPosible = (matriz) => {

        let esPosible = matriz.map((item, index) => {
            if (index === 0) {
                return item.every((item) => item === 1)
            } else {
                return item[0] === 1
            }
        }).every((item) => item === true)


        return esPosible ? 'Si' : 'No'


    }

    console.log(esPosible(matriz))
