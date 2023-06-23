// Escriba una función que reciba una cadena de una o más palabras y devuelva 
// la misma cadena, pero con todas las palabras de cinco o más letras invertidas 
// (como el nombre de esta Kata). Las cadenas introducidas constarán sólo de letras y espacios. 
// Los espacios se incluirán sólo cuando haya más de una palabra.
//La solución debe ser capaz de manejar cadenas de cualquier longitud. (No es necesario comprobar cadenas de longitud cero o nula).



// const spinWords =(string) =>{
//     let array = string.split(' ');
//     let newArray = [];
//     for(let i = 0; i < array.length; i++){
//         if(array[i].length >= 5){
//             newArray.push(array[i].split('').reverse().join(''));
//         }else{
//             newArray.push(array[i]);
//         }
//     }
//     return newArray.join(' ');

   
    
// }

// console.log(spinWords("Alej")); 

//Otra solucion para el mismo problema (Solucion recomendada)
/*
const spinWords2 = (string) =>{
        return string.split(' ').map(function(word){
        return (word.length > 4) ? word.split('').reverse().join('') : word;
    }).join(' ');

}

console.log(spinWords2("Alejo un saludo"));
console.log(spinWords2("You are almost to the last test"));
//El Split te separa la cadena por palabra___ El reverse la invierte____ el join las une de nuevo
 */

const spinWords2 = (string) =>{

    return string.split(" ").map(function(word){

    return (word.length>4)? word.split("").reverse().join(""):word;}).join(" ");
    
}

console.log(spinWords2("Alejo un saludo"));



function spinWords3(words){
  return words.split(" ").map(w => w.length < 5 ? w : w.split("").reverse().join("")).join(" ");}

console.log(spinWords3("Alejo un saludo"));






// Ejemplo de lo que hace el metodo map.

var numbers = [1, 5, 10, 15];
var doubles = numbers.map(function(x) {
   return x * 5;
})

console.log(doubles);