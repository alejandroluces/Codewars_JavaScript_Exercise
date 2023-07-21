// Crea un array de objetos que representen personas. Cada objeto debe tener propiedades como "nombre", "edad" y "país". Luego, utiliza un método para crear un nuevo array con solo las personas mayores de edad y que vivan en un país determinado. 



// Ejemplo de salida: // [ // { nombre: "Juan", edad: 27, país: "México" }, // { nombre: "Ana", edad: 24, país: "México" } // ]

const people = [ 

    { nombre: "Juan", edad: 27, pais: "México" }, 
    { nombre: "María", edad: 18, pais: "Argentina" }, 
    { nombre: "Pedro", edad: 32, pais: "España" }, 
    { nombre: "Ana", edad: 24, pais: "México" } 

] 

let resultado=people.filter(age=>age.pais==="México")
console.log(resultado);
