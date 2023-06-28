// Dada una cadena de dígitos, debe reemplazar cualquier dígito debajo de 5 con '0' y 
// cualquier dígito 5 y superior con '1'. Devuelve la cadena resultante.

// Nota: la entrada nunca será una cadena vacía

// const fakeBin =(x) =>{
//     result= x.split("").map((num)=> num <5)
//     console.log(result);
//     newArr= result.map((val) => val ? 0 : 1).join("");//Reemplazo el true por 1 y false por 0 y junto con join
//     console.log(newArr);
//     return newArr
//   }
    

const fakeBin =(x) =>{
  return x.split("").map(n=> n <5? 0:1).join("")
  
}
  

  

    



console.log(fakeBin('45385593107843568'));
console.log(fakeBin('509321967506747'));
console.log(fakeBin('366058562030849490134388085'));
