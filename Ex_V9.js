// Escriba una función get_char()/ getChar()que tome un número y devuelva el carácter ASCII correspondiente a ese valor.

// Ejemplo:

// get_char(65)
// debe regresar:

// 'A'


const getChar =(c) =>{
    
    return String.fromCharCode(c)
}
console.log(getChar(65));

