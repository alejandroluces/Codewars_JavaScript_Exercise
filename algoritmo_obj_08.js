// 8)) Algoritmo para convertir un objeto en un array de objetos con pares de clave-valor:
// Ejemplo:
// Entrada: {nombre: "Juan", edad: 30}
// Salida: [{clave: "nombre", valor: "Juan"}, {clave: "edad", valor: 30}]

/* 
El método Object.entries()devuelve una propiedad matriz de pares propios de una 
enumerable [key, value] de un objeto dado, en el mismo orden que es proporcionado 
por ( for...inLa diferencia es que un bucle for-in enumera las propiedades en la 
cadena de prototipos).
*/

const objDescrpcion={
    nombre: "Juan", 
    edad: 30
}

const valorYclave =(a) =>{
  // Obtener un array de pares clave-valor del objeto
  let paresClaveValor = Object.entries(a);
    console.log(paresClaveValor);
    
  // Mapear cada par clave-valor a un objeto con propiedades "clave" y "valor"
  let resultado = paresClaveValor.map(([clave, valor]) => {
    
    return { clave, valor };
    
  });

  return resultado;
}


console.log(valorYclave({nombre: "Juan", edad: 30}));
