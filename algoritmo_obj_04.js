// 4))   Algoritmo para agregar una propiedad a un objeto si no existe:
// Ejemplo:
// Entrada: {nombre: "Juan", edad: 30}, "apellido"
// Salida: {nombre: "Juan", edad: 30, apellido: null}


const objetoP  = [
    {nombre: "Juan", edad: 30}, "apellido"
];


console.log(objetoP);



const determinarNull =(a,b) =>{
   let addObj={[b]:"null"}
   Object.assign(a,addObj)
   addObj=a
   return addObj
}

console.log(determinarNull({nombre: "Juan", edad: 30}, "apellido"));
