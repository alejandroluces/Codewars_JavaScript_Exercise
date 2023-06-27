

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
 
 
