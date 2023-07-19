// 9)) Algoritmo para obtener el número de propiedades de un objeto:
// Ejemplo:
// Entrada: {nombre: "Juan", edad: 30, apellido: null}
// Salida: 3

const qtyPropiedad={
    nombre: "Juan", 
    edad: 30, 
    apellido: null
}

const qtyPropier =(a) =>{
return  Object.keys(a).length
}

console.log(qtyPropier({nombre: "Juan", edad: 30, apellido: null}));
