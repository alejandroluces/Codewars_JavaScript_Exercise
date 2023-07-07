// Desafío de código All Star #18
// Cree una función que acepte una cadena y un solo carácter, y devuelva un número entero de la 
// cantidad de veces que el segundo argumento se encuentra en el primero.

// Si no se pueden encontrar ocurrencias, se debe devolver un recuento de 0.

// ("Hello", "o")  ==>  1
// ("Hello", "l")  ==>  2
// ("", "z")       ==>  0
// str_count("Hello", 'o'); // returns 1
// str_count("Hello", 'l'); // returns 2
// str_count("", 'z'); // returns 0

// function strCount(str, letter){
//     let contChrt=0
//     for (let i = 0; i < str.length; i++) {
//         i
//        if(str[i]===letter){
//         contChrt++;
//        }
        
//     }
//     return contChrt
// }
function strCount(str, letter){  
    str
    return str.split(letter).length-1
    
    
  }

console.log(strCount('Hello', 'o'));
console.log(strCount('Hello', 'l'));
console.log(strCount('',      'z'));

/*

2. Una variable count se inicializa a 0.
3. La función itera a través de la cadena y comprueba si el carácter actual es igual a la letra que se está contando.
4. Si el carácter es igual, la cuenta se incrementa en 1.
5. 5. Una vez que se ha iterado sobre la cadena, se devuelve la cuenta. 

*/
