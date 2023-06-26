// Compruebe si una cadena tiene la misma cantidad de 'x' y 'o'. El método debe devolver un valor booleano y 
// no distinguir entre mayúsculas y minúsculas. La cadena puede contener cualquier carácter.

// Ejemplos de entrada/salida:

const XO = (str) => {

    let palabra = str.toLowerCase();
    return palabra.split("o").length === palabra.split("x").length;
    


}
console.log(XO('xo'));
console.log(XO("xxOo"));
console.log(XO("xxxm"));
console.log(XO("Oo"));
console.log(XO("ooom"));


