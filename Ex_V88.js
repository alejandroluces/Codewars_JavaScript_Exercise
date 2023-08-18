/*

Título: Gestión de Inventario con Descuentos

Descripción:
Eres parte de un equipo de desarrollo encargado de crear un sistema de gestión de inventario para una empresa. La empresa vende productos electrónicos y desea implementar un sistema que calcule los precios finales de los productos, incluyendo descuentos por volumen de compra.

Debes escribir un programa en JavaScript que tome como entrada la cantidad de unidades de un producto y el precio unitario, y calcule el precio total considerando los descuentos por volumen. El descuento se aplica de la siguiente manera:

Si se compran más de 10 unidades, se aplica un 5% de descuento.
Si se compran más de 20 unidades, se aplica un 10% de descuento.
Si se compran más de 50 unidades, se aplica un 15% de descuento.
El programa debe mostrar en la consola el precio total calculado.

Entrada:

cantidadUnidades: Cantidad numérica de unidades del producto.
precioUnitario: Precio unitario numérico del producto en dólares.
Salida esperada en consola:

bash
Copy code
Para la compra de 25 unidades a $50 cada una, el precio total con descuento es $1125


*/

// Solución:

const calcuDescuento = (cantidadUnidades, precioUnitario) => {
    let descuento = 0;
    if (cantidadUnidades > 50) {
        descuento = 0.15;
    } else if (cantidadUnidades > 20) {
        descuento = 0.1;
    } else if (cantidadUnidades > 10) {
        descuento = 0.05;
    }
    return cantidadUnidades * precioUnitario * (1 - descuento);
}

console.log(`Para la compra de 25 unidades a $50 cada una, el precio total con descuento es $${calcuDescuento(25, 50)}`);