/*

Enunciado del Algoritmo - Cálculo de Descuento en Compra

Nivel de Dificultad: Medio

Objetivo: Crear un programa en JavaScript que calcule el precio final de una compra teniendo en cuenta un descuento aplicable. El programa debe ser lo suficientemente claro y estructurado para que un programador junior pueda entenderlo y completarlo.

Entrada:

Precio original del producto (número)
Porcentaje de descuento a aplicar (número)
Proceso:

Lee el precio original del producto y el porcentaje de descuento desde el usuario.
Calcula el monto de descuento aplicando el porcentaje al precio original.
Resta el monto de descuento al precio original para obtener el precio final.
Salida:
Imprime en la consola el precio original, el porcentaje de descuento, el monto de descuento y el precio final, con el siguiente formato:

less
Copy code
Precio Original: [Precio Original]
Porcentaje de Descuento: [Porcentaje de Descuento]%
Monto de Descuento: [Monto de Descuento]
Precio Final: [Precio Final]
Ejemplo de Entrada:

yaml
Copy code
Precio original del producto: 1500
Porcentaje de descuento: 20
Salida Esperada:

yaml
Copy code
Precio Original: 1500
Porcentaje de Descuento: 20%
Monto de Descuento: 300
Precio Final: 1200
Este enunciado presenta un problema simple pero interesante para un programador junior con un nivel de dificultad medio. Les permite practicar la manipulación de datos, cálculos matemáticos y la salida formateada en la consola.

*/


/* 


const precioOriginal = 1500;
const porcentajeDescuento = 20;
// funcion para calcular el descuento
const calcularDescuento = (precio, descuento) => {
    return (precio * descuento) / 100;
}
// funcion para calcular el precio final
const calcularPrecioFinal = (precio, descuento) => {
    return precio - descuento;
}
// funcion para imprimir el resultado
const imprimirResultado = (precio, descuento) => {

    const descuentoCalculado = calcularDescuento(precio, descuento);
    const precioFinal = calcularPrecioFinal(precio, descuentoCalculado);

    console.log(`Precio Original: ${precio}`);
    console.log(`Porcentaje de Descuento: ${descuento}%`);
    console.log(`Monto de Descuento: ${descuentoCalculado}`);
    console.log(`Precio Final: ${precioFinal}`);
}
// llamada a la funcion
imprimirResultado(precioOriginal, porcentajeDescuento);


*/

// Otra solucion mas simplificada

const precioOriginal = 1500;
const porcentajeDescuento = 20;
// Una solacuncion para calcular el descuento y el precio final:
const calcularPrecioFinal = (precio, descuento) => {
    let precioF= - ((precio * descuento) / 100);
    let descuentoCalculado = precio + precioF;
    
    return [precio, descuento, descuentoCalculado];


}

// funcion para imprimir el resultado
const imprimirResultado = (precio, descuento, descuentoCalculado) => {
    
        console.log(`Precio Original: ${precio}`);
        console.log(`Porcentaje de Descuento: ${descuento}%`);
        console.log(`Monto de Descuento: ${descuentoCalculado}`);
        console.log(`Precio Final: ${descuentoCalculado}`);
    }
    // llamada a la funcion
    imprimirResultado(...calcularPrecioFinal(precioOriginal, porcentajeDescuento));

    



