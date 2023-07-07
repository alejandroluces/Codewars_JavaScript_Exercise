// contar consonantes
// https://www.codewars.com/kata/564e7fc20f0b53eb02000106/train/javascript
// Complete la función que toma una cadena de texto en inglés y 
// devuelve el número de consonantes en la cadena.

// Las consonantes son todas las letras que se usan para escribir en inglés, 
// excepto las vocales a, e, i, o, u.

const consonantCount =(str) =>{
    let charSpecial= str.replace(/[^a-z0-9]/gi, '');
    return charSpecial.toLowerCase().replace(/[aeiou1234567890]/g, '').length 


    //Solucion mas simplificada para solo considerar las consonantes 

    // return str.replace(/[\W\daeiou_]+/gi, ``).length;
}

console.log(consonantCount('bc1_.{*"!'));
console.log(consonantCount('bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ'));
console.log(consonantCount('01234567890_'));
console.log(consonantCount('aeiou AEIOU bcdfghjklmnpqrstvwxyz BCDFGHJKLMNPQRSTVWXYZ 01234567890_ ^&$#'));
console.log(consonantCount('aeiouAEIOU'));




