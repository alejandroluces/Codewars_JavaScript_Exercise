/*

Enunciado:

Estás desarrollando una función para un sitio web que gestiona recetas de cocina. La función, llamada "calcularIngredientes", debe tomar una receta y calcular la cantidad de ingredientes necesarios para un número determinado de personas.

La función debe aceptar dos argumentos:

receta: Un objeto que contiene la receta. Debe tener dos propiedades:
nombre: Un string que representa el nombre de la receta.
ingredientes: Un objeto que contiene los ingredientes necesarios para una sola porción. Cada clave representa el nombre del ingrediente, y el valor asociado es la cantidad necesaria para una porción.
porciones: Un número entero que representa el número de porciones que se quieren preparar.
La función debe devolver un objeto que contiene los ingredientes necesarios para el número de porciones especificado. Cada clave debe representar el nombre del ingrediente, y el valor asociado debe ser la cantidad necesaria para el número de porciones especificado.

Entrada Propuesta:

javascript
Copy code
const receta = {
  nombre: "Panqueques",
  ingredientes: {
    harina: 100, // gramos por porción
    huevo: 1, // cantidad por porción
    leche: 200, // ml por porción
    azucar: 15 // gramos por porción
  }
};

const porciones = 3;
Salida Esperada en Consola:

javascript
Copy code
{
  harina: 300,
  huevo: 3,
  leche: 600,
  azucar: 45
}
Explicación:

Para preparar panqueques para tres personas, simplemente necesitas multiplicar la cantidad de cada ingrediente en la receta original por 3. Por ejemplo, la receta original requiere 100 gramos de harina por porción, por lo que para 3 porciones, necesitarás 300 gramos de harina.


*/

const receta = {
    nombre: "Panqueques",
    ingredientes: {
        harina: 100, // gramos por porción
        huevo: 1, // cantidad por porción
        leche: 200, // ml por porción
        azucar: 15 // gramos por porción
    }
};

const porciones = 5;

const calcularIngredientes = (receta, porciones) => {

    let ingredientes = receta.ingredientes;

    for (let ingrediente in ingredientes) {
        ingredientes[ingrediente] = ingredientes[ingrediente] * porciones;
    }

    return ingredientes;
}

console.log(calcularIngredientes(receta, porciones));
/*
- La función `calcularIngredientes` recibe dos parámetros:
   - `receta`: un objeto con la receta.
   - `porciones`: un número con las porciones que queremos calcular.
- En la variable `ingredientes` guardamos el valor de la propiedad `ingredientes` del objeto `receta`.
- Con el ciclo `for...in` recorremos cada una de las llaves del objeto `ingredientes`.
- En cada iteración multiplicamos el valor de la propiedad actual por el número de porciones que queremos calcular.
- Retornamos el objeto `ingredientes` con los nuevos valores. */