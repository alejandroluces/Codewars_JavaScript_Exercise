// 2)) Algoritmo para calcular el promedio de los valores de una propiedad de un array de objetos:
// Ejemplo:
// Entrada: [{nombre: "Camiseta", precio: 20.99}, {nombre: "Pantalón", precio: 35.99}, {nombre: "Zapatos", precio: 49.99}], "precio"
// Salida: 35.99

const objeto  = [
    {nombre: "Camiseta", precio: 20.99}, 
    {nombre: "Pantalón", precio: 35.99}, 
    {nombre: "Zapatos", precio: 49.99}
];



const priceAverage =() =>{
    let total = 0;
    objeto.map(({precio})=>total+=precio)
    let resultado= total/objeto.length
    return resultado

}

console.log(priceAverage(objeto));