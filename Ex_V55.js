// Instrucciones
// Escriba una función que tome una sola cadena ( word) como argumento. La función debe devolver una lista ordenada que contenga los índices de todas las letras mayúsculas de la cadena.

// Ejemplo (Entrada --> Salida)
// "CodEWaRs" --> [0,3,4,6]

// Solución
const capitals =(word) =>{
    let arr = [];
    for(let i = 0; i < word.length; i++){
      if(word[i] === word[i].toUpperCase()){
        console.log(i);     
        arr.push(i);
      }
    }
    return arr;
}
console.log(capitals('CodEWaRs'));
console.log(capitals('AleJAndro'));