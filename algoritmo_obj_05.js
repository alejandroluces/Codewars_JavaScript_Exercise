
// 5)) Algoritmo para eliminar una propiedad de un objeto:
// Ejemplo:
// Entrada: {nombre: "Juan", edad: 30}, "edad"
// Salida: {nombre: "Juan"}

const objetoP  = [
    {nombre: "Juan", edad: 30}, "edad"
];

const extFistProp =(a) =>{
return  a.nombre
}

console.log(extFistProp({nombre: "Juan", edad: 30}, "edad"));
