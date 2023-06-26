// validar código PIN




const validatePIN =(pin) =>{
    if (pin.length===4 || pin.length===6){
    return pin.split('').every((char) => !isNaN(char));
}
return false;

}



console.log((validatePIN("a234")));
console.log((validatePIN("0000")));
console.log((validatePIN("1111")));
console.log((validatePIN("123456")));
console.log((validatePIN("098765")));
console.log((validatePIN("000000")));
console.log((validatePIN("123456")));
console.log((validatePIN("090909")));
console.log((validatePIN("a234")));
console.log((validatePIN(".234")));
console.log((validatePIN("1")));
console.log((validatePIN("12")));
console.log((validatePIN("123")));
console.log((validatePIN("12345")));
console.log((validatePIN("1234567")));
console.log((validatePIN("-1234")));
console.log((validatePIN("-1234")));
console.log((validatePIN("-1.234")));
console.log((validatePIN("00000000")));



/*
1. La función recibe un parámetro pin.
2. Luego comprobamos si la longitud del pin es 4 o 6 y devolvemos false en caso contrario.
3. El método split() se utiliza para dividir una cadena en una matriz de subcadenas, y devuelve la nueva matriz.
4. El método every() comprueba si todos los elementos del array pasan el test implementado por la función proporcionada.
5. La función isNaN() determina si un valor es NaN o no. 

*/