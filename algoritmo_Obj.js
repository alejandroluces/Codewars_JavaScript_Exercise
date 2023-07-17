// 1))   Algoritmo para obtener el valor de una propiedad específica de un objeto:
// Ejemplo:
// Entrada: {nombre: "Juan", edad: 30}, "nombre"
// Salida: "Juan"


// 2)) Algoritmo para calcular el promedio de los valores de una propiedad de un array de objetos:
// Ejemplo:
// Entrada: [{nombre: "Camiseta", precio: 20.99}, {nombre: "Pantalón", precio: 35.99}, {nombre: "Zapatos", precio: 49.99}], "precio"
// Salida: 35.99



// 3)) Algoritmo para clonar un objeto sin modificar el objeto original:
// Ejemplo:
// Entrada: {nombre: "Juan", edad: 30}
// Salida: {nombre: "Juan", edad: 30}


// 4))   Algoritmo para agregar una propiedad a un objeto si no existe:
// Ejemplo:
// Entrada: {nombre: "Juan", edad: 30}, "apellido"
// Salida: {nombre: "Juan", edad: 30, apellido: null}




// 5)) Algoritmo para eliminar una propiedad de un objeto:
// Ejemplo:
// Entrada: {nombre: "Juan", edad: 30}, "edad"
// Salida: {nombre: "Juan"}


// 6)) Algoritmo para determinar si un objeto es vacío (no tiene propiedades):
// Ejemplo:
// Entrada: {}
// Salida: true


//7))  Algoritmo para obtener la suma de los valores de todas las propiedades numéricas de un objeto:
// Ejemplo:
// Entrada: {nombre: "Camiseta", precio: 20.99, cantidad: 5}
// Salida: 25.99


// 8)) Algoritmo para convertir un objeto en un array de objetos con pares de clave-valor:
// Ejemplo:
// Entrada: {nombre: "Juan", edad: 30}
// Salida: [{clave: "nombre", valor: "Juan"}, {clave: "edad", valor: 30}]

// 9)) Algoritmo para obtener el número de propiedades de un objeto:
// Ejemplo:
// Entrada: {nombre: "Juan", edad: 30, apellido: null}
// Salida: 3


// 10)) Algoritmo para obtener un nuevo objeto a partir de la combinación de dos objetos:
// Ejemplo:
// Entrada: {nombre: "Juan", edad: 30}, {apellido: "Pérez", ciudad: "Madrid"}
// Salida: {nombre: "Juan", edad: 30, apellido: "Pérez", ciudad: "Madrid"}


// ______________________________________________



// 1)) Algoritmo para obtener el valor de una propiedad específica de un objeto:
// Ejemplo:
// Entrada: {nombre: "Juan", edad: 30}, "nombre"
// Salida: "Juan"

 
const detalleObj =(n) =>{
return  n.nombre
}

console.log(detalleObj({nombre: "Juan", edad: 30}));











