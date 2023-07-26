// https://www.codewars.com/kata/544d114f84e41094a9000439/train/javascript

// Escribe un método que devuelva verdadero si un parámetro dado es una potencia de 4 y falso si no lo es. 
// Si el parámetro no es un número entero (por ejemplo, cadena, matriz), el método también debería devolver falso.

// (En C# Integer significa todos los tipos de enteros como Int16, Int32, .....)

// Ejemplos

const powerOf4 =(n) =>{
    if (typeof n === 'string') {
        return false;}
    while (n > 1) {
        if (n % 4 !== 0) return false;
        n /= 4;
    }
    return n === 1;

}


console.log(powerOf4(4));
console.log(powerOf4(16));
console.log(powerOf4(1));
console.log(powerOf4(8));
console.log(powerOf4(20));
console.log(powerOf4("16"));
console.log(powerOf4(undefined));


