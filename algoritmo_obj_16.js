// 6.

// Crea un array de objetos que representen productos de una tienda. Cada objeto debe tener propiedades como "nombre", "precio" y "disponibilidad". 
// Luego, utiliza un método para crear un nuevo array con solo los productos disponibles y ordenarlos por precio, del más barato al más caro. 

//Ejemplo de entrada: const products = [ { nombre: "camisa", precio: 20, disponibilidad: true }, { nombre: "pantalón", precio: 30, disponibilidad: true }, { nombre: "zapatos", precio: 50, disponibilidad: false }, { nombre: "calcetines", precio: 5, disponibilidad: true } ] 

// Ejemplo de salida: // [ // { nombre: "calcetines", precio: 5, disponibilidad: true }, // { nombre: "camisa", precio: 20, disponibilidad: true }, // { nombre: "pantalón", precio: 30, disponibilidad: true } // ]


const products = [ 
    { nombre: "camisa", precio: 20, disponibilidad: true }, 
    { nombre: "pantalón", precio: 30, disponibilidad: true }, 
    { nombre: "zapatos", precio: 50, disponibilidad: false }, 
    { nombre: "calcetines", precio: 5, disponibilidad: true } 
]


const swtDispo =(a) =>{

    let articleDisponible= a.filter(status=>status.disponibilidad===true)
    return articleDisponible.sort((c,d)=>c.precio>d.precio?1:-1)
}

console.log(swtDispo(products));
