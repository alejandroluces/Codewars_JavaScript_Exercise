

const isIsogram = (str) => {
    return new Set(str.toUpperCase()).size == str.length;
 }
 console.log(( isIsogram("Dermatoglyphics")))
 console.log(( isIsogram("aba")));
 
/* Otra form de solucionar

const isIsogram = (str) => {
    let palabra = str.toLowerCase() 
    for (var i=0; i<str.length; i++) {
        if ( palabra.indexOf(str[i]) !=  palabra.lastIndexOf(str[i]) ) {
          return false; 
        }
      }
    return true; 
   

  }
*/
 
 
 
 
 // / Crear un Set
 const letras = new Set();
 
 // Agregar valores al Set
 letras.add("a");
 letras.add("b");
 letras.add("c");
 letras.add([2,5,]);
   
 console.log(letras);
 