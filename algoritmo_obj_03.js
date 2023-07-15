
// 3)) Algoritmo para clonar un objeto sin modificar el objeto original:
// Ejemplo:
// Entrada: {nombre: "Juan", edad: 30}
// Salida: {nombre: "Juan", edad: 30}

const objetoP  = [
    {nombre: "Juan", edad: 30}
    
   
];


const modiffObj =(obj) =>{
    return  {...obj}
   

}

console.log(modiffObj({nombre: "Juan", edad: 30}));
