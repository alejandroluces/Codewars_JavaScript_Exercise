// Complete la solución para que devuelva verdadero si el primer argumento (cadena) pasado termina con el segundo argumento (también una cadena).

// Ejemplos:

// solution('abc', 'bc') // returns true
// solution('abc', 'd') // returns false



const solution =(str, ending) =>{

    // return  str.slice(-ending.length) ===ending
       return str.endsWith(ending)
    }
    
    console.log(solution('abcde', 'cde'));
    console.log(solution('abcde', 'abc'));
    console.log(solution('samurai', 'ai'));
    console.log(solution('abc', ''));
    
    
    
    