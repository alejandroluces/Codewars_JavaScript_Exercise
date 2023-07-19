// 10)) Algoritmo para obtener un nuevo objeto a partir de la combinación de dos objetos:
// Ejemplo:
// Entrada: {nombre: "Juan", edad: 30}, {apellido: "Pérez", ciudad: "Madrid"}
// Salida: {nombre: "Juan", edad: 30, apellido: "Pérez", ciudad: "Madrid"}

const objOne={
    nombre: "Juan", 
    edad: 30};

const objTwo={
    apellido: "Pérez", 
    ciudad: "Madrid"};  

    const merchObj =(objOne,objTwo) =>{
    return  {...objOne,...objTwo}
    }

    console.log(merchObj(objOne,objTwo));
    