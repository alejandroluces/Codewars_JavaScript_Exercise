/*
Enunciado
Desarrollar una función en JavaScript que tome un objeto que representa una lista de compras y calcule el costo total. El objeto tendrá propiedades que representan diferentes productos, y los valores serán objetos que contienen la cantidad y el precio unitario de cada producto.

Entrada:

Un objeto listaDeCompras que contiene la siguiente estructura:

javascript
Copy code
{
  producto1: { cantidad: x, precio: y },
  producto2: { cantidad: a, precio: b },
  // ... más productos
}
Donde x y a son las cantidades de los productos, e y y b son los precios unitarios.

Salida:

La función debe imprimir en la consola el costo total de la lista de compras en el formato: "El costo total de la lista de compras es: $[costo total]".
Ejemplo de Entrada y Salida
Entrada:

listaDeCompras:
javascript
Copy code
{
  manzanas: { cantidad: 5, precio: 0.5 },
  pan: { cantidad: 2, precio: 1.5 },
  leche: { cantidad: 1, precio: 2 }
}
Salida en la Consola:

El costo total de la lista de compras es: $9.5.
La función debe recorrer el objeto de la lista de compras, multiplicar la cantidad y el precio de cada producto, y sumar estos valores para obtener el costo total. Luego, debe imprimir el resultado en la consola en el formato indicado.


*/

const listaDeCompras = {
    manzanas: { cantidad: 5, precio: 0.5 },
    pan: { cantidad: 2, precio: 1.5 },
    leche: { cantidad: 1, precio: 2 }
}

const costoTotal = (listaDeCompras) => {
    return Object.values(listaDeCompras).reduce((a, b) => a + (b.cantidad * b.precio), 0);
}

console.log(costoTotal(listaDeCompras));