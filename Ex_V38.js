// Complete la función que toma dos enteros ( a, b, where a < b) y devuelva una matriz de 
// todos los enteros entre los parámetros de entrada, incluidos ellos.

// Por ejemplo:

// a = 1
// b = 4
// --> [1, 2, 3, 4]

const between =(a,b) =>{
    let result=[];
    for( let i = a; i<b+1;i++){
        console.log(i);
        result.push(i)
      
      console.log(result);
      

        
    }
return result
}
console.log(between(1, 4));
console.log(between(-2, 2));
