// Eliminar el primer y último carácter, segunda parte
// Este es un spin-off de mi primer kata .

// Se le proporciona una cadena que contiene una secuencia de secuencias de 
// caracteres separadas por comas.

// Escriba una función que devuelva una nueva cadena que contenga las mismas 
// secuencias de caracteres, excepto el primero y el último, pero esta vez separados por espacios.

// Si la cadena de entrada está vacía o si la eliminación del primer y último 
// elemento haría que la cadena resultante estuviera vacía, devuelva un valor 
// vacío (representado como un valor genérico NULLen los ejemplos a continuación).
// Ejemplos
// "1,2,3"      =>  "2"
// "1,2,3,4"    =>  "2 3"
// "1,2,3,4,5"  =>  "2 3 4"

// ""     =>  NULL
// "1"    =>  NULL
// "1,2"  =>  NULL

const array =(string)=>{
 let qtyPos= string.split(",").length
    console.log(qtyPos);
    
    if(qtyPos<=2){return null}
    else{return string.split(",").slice(1,-1).join(" ").trim()}

}



// Solucin mas simplificada
/*
 
function array(arr){
    return arr.split(",").slice(1,-1).join(" ") || null;
  }

 */

console.log(array(''));
console.log(array('1'));
console.log(array('A1,B2'));
console.log(array('1,2,3'));
console.log(array('1,2,3,4'));
console.log(array('A1,B2,C3,D4,E5'));
console.log(array('A,1,23,456,78,9,Z'));
console.log(array('A,1,23,456,78'));
console.log(array('OLEP,T,7C,MHV4P,PE4X,574,ODY5'));

