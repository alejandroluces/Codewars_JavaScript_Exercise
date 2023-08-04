/* 
Dadas dos cadenas, la primera es una cadena aleatoria y la segunda es igual a la primera, pero con tres caracteres agregados en algún lugar de la cadena (tres mismos caracteres),

Escribe una función que devuelva el carácter agregado

P.ej
string1 = "hello"
string2 = "aaahello"

// => 'a'
Otro ejemplo
string1 = "abcde"
string2 = "2db2a2ec"

// => '2'
Tenga en cuenta que el carácter agregado también podría existir en la cadena original

string1 = "aabbcc"
string2 = "aacccbbcc"

// => 'c'
Puede suponer que la cadena2 siempre será más grande que la cadena1, y siempre habrá tres caracteres agregados en la cadena2.

Escriba la función addedChar()que toma dos cadenas y devuelve el carácter agregado como se describe arriba.

*/

// const addedChar =(s1,s2) =>{
//     let arr1 = s1.split('').sort();
//     let arr2 = s2.split('').sort();
//     let i = 0;
//     while(i < arr2.length){
//         if(arr1[i] !== arr2[i]){
//             return arr2[i];
//         }
//         i++;
//     }
//     return "Wrong!";

    
// }

// console.log(addedChar('hello','aaahello'))
// console.log(addedChar('aabbcc','aacccbbcc'));
// console.log(addedChar('c', "Wrong!"));

// otra forma de hacerlo

function addedChar(s1, s2){
    let s11 = [...s1].sort()
    s11
    let s22 = [...s2].sort()
    return s22.find((el, i) => el !== s11[i])
   }
   console.log(addedChar('hello','aaahello'))
// console.log(addedChar('aabbcc','aacccbbcc'));
// console.log(addedChar('c', "Wrong!"));