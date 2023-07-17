//7))  Algoritmo para obtener la suma de los valores de todas las propiedades numéricas de un objeto:
// Ejemplo:
// Entrada: {nombre: "Camiseta", precio: 20.99, cantidad: 5}
// Salida: 25.99


const objNum={
    nombre: "Camiseta", 
    precio: 20.99, 
    cantidad: 5
}

const sumandoN = (a) => {
    a
        let array = Object.values(a);
        
        let suma = array.reduce((total, item) => {
                if (typeof item === 'number') {
                    return total + item;
                }
                return total;
                
                   }       , 0);
        console.log(suma);
    
}



console.log(sumandoN({nombre: "Camiseta", precio: 20.99, cantidad: 5}))// salida:25.99 
