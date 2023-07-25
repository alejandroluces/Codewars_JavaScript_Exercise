// Volumen de una Caja

// Cree una función que tome un argumento de objeto sizes(contenga claves de ancho , largo y alto )
//  y devuelva el volumen de la caja.

// Ejemplos
// volumeOfBox({ width: 2, length: 5, height: 1 }) ➞ 10

// volumeOfBox({ width: 4, length: 2, height: 2 }) ➞ 16

// volumeOfBox({ width: 2, length: 3, height: 5 }) ➞ 30

// notas
// No te olvides del returnresultado.
// Recuerda que los valores están en un objeto.
// El volumen es largo * ancho * alto.
const volumeOfBox =(s) =>{
// return  Object.values(s).reduce((sum,acu)=>sum*acu)
return s.width*s.length*s.height
}

console.log(volumeOfBox({ width: 2, length: 5, height: 1 }));
console.log(volumeOfBox({ width: 4, length: 2, height: 2 }));
console.log(volumeOfBox({ width: 2, length: 3, height: 5 }));
