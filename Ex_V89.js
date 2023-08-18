/*

Enunciado del problema:

Título: Calculadora de Impuestos Personalizados

Descripción:
Eres responsable de desarrollar una calculadora de impuestos personalizados para una tienda en línea. La tienda vende productos internacionales y necesita calcular los impuestos de importación según las reglas de diferentes países. Cada país tiene su propia tasa fija de impuestos sobre el valor del producto.

Debes escribir un programa en JavaScript que tome como entrada el valor del producto y el código del país, y calcule el monto del impuesto de importación. La tienda trabaja con los siguientes países y sus respectivas tasas de impuestos:

País A: 10%
País B: 15%
País C: 8%
País D: 20%
El programa debe mostrar en la consola el monto del impuesto calculado.

Entrada:

valorProducto: Valor numérico del producto en dólares.
codigoPais: Código del país (una cadena de texto representando el país, por ejemplo, "A", "B", etc.).
Salida esperada en consola:

bash
Copy code
Para un producto de valor $250 en el País B, el impuesto de importación es $37.5


*/

// Solución:
/* 
const valorProducto = 250;
const codigoPais = "B";

let impuesto = 0;

const calcularImpuesto = (valorProducto, codigoPais) => {
    switch (codigoPais) {
        case "A":
        impuesto = valorProducto * 0.1;
        break;
        case "B":
        impuesto = valorProducto * 0.15;
        break;
        case "C":
        impuesto = valorProducto * 0.08;
        break;
        case "D":
        impuesto = valorProducto * 0.2;
        break;
        default:
        console.log("El código de país no es válido");
    }
    return impuesto;
    }

    console.log(`Para un producto de valor $${valorProducto} en el País ${codigoPais}, el impuesto de importación es $${calcularImpuesto(valorProducto, codigoPais)}`);


    */


    // Otra solución seria:

    const valorProducto = 250;
const codigoPais = "B";

    const calcularImpuesto = (valorProducto, codigoPais) => {
        let impuesto = 0;
        if (codigoPais === "A") {
            impuesto = valorProducto * 0.1;
        } else if (codigoPais === "B") {
            impuesto = valorProducto * 0.15;
        } else if (codigoPais === "C") {
            impuesto = valorProducto * 0.08;
        } else if (codigoPais === "D") {
            impuesto = valorProducto * 0.2;
        } else {
            console.log("El código de país no es válido");
        }
        return impuesto;
    }

    console.log(`Para un producto de valor $${valorProducto} en el País ${codigoPais}, el impuesto de importación es $${calcularImpuesto(valorProducto, codigoPais)}`);
